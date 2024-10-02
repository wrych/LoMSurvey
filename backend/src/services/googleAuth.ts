import passport from "passport";
import {
  Strategy as GoogleStrategy,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";
import { Express } from "express";

import * as userService from "../services/user.js";
import User from "../models/User.js";

interface GoogleAuthConfig {
  clientID: string;
  clientSecret: string;
  callbackURL: string;
}

interface GoogleProfile extends Profile {
  id: string;
  emails: { value: string; verified: boolean }[];
  name: { familyName: string; givenName: string };
}

const setupGoogleAuth = (app: Express) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        callbackURL: "/_auth/google/callback",
      } as GoogleAuthConfig,
      async (
        accessToken: string,
        refreshToken: string,
        profile: GoogleProfile,
        done: VerifyCallback
      ) => {
        try {
          const user: [User, boolean] = await userService.findOrCreate(
            profile.emails![0].value,
            profile.emails![0].verified,
            profile.name!.familyName,
            profile.name!.givenName,
            "google",
            profile.id
          );
          return done(null, user[0]);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );

  app.get(
    "/_auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/_auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/");
    }
  );
};

export default setupGoogleAuth;
