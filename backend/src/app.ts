import dotenv from "dotenv";

import createError, { HttpError } from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import session from "express-session";
import pluralize from "pluralize";
import connectSessionSequelize from "connect-session-sequelize";

import setupGoogleAuth from "@/services/googleAuth.js";
import apiRouter from "@/routes/api/api.js";
import authRouter from "@/routes/auth.js";
import ORM from "@/data/ORM.js";
import syncDatabase, { runInitialSetup } from "@/initialSetup.js";
import { setupPassport } from "@/services/passport.js";

dotenv.config();

const app = express();

app.locals.pluralize = pluralize;

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("./public"));

const SequelizeStore = connectSessionSequelize(session.Store);
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    store: new SequelizeStore({
      db: ORM,
      checkExpirationInterval: 15 * 60 * 1000, // 15 minutes
      expiration: 24 * 60 * 60 * 1000, // 24 hours
    }),
  })
);

app.use(function (req: Request, res: Response, next: NextFunction) {
  var msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !!msgs.length;
  req.session.messages = [];
  next();
});

setupPassport(app);
setupGoogleAuth(app);

app.use("/api", apiRouter);
app.use("/_auth", authRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

app.use((err: HttpError, req: Request, res: Response) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

await syncDatabase();
console.log(`running in environment '${app.get("env")}'...`);
await runInitialSetup(app.get("env"));

export default app;
