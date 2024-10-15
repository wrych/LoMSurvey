import State from "src/models/State.js";
import { create } from "../services/state.js";

export const setupStates = async (): Promise<State[]> => {
  const draft = await create({
    title: "draft",
    rank: 1,
  });
  const ready = await create({
    title: "ready",
    rank: 2,
  });
  const active = await create({
    title: "active",
    rank: 3,
  });
  const review = await create({
    title: "review",
    rank: 4,
  });
  const done = await create({
    title: "done",
    rank: 5,
  });
  return [draft, ready, active, review, done];
};
