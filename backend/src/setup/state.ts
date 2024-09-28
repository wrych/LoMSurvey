import { create } from "@/services/state.js";

export const setupStates = async (): Promise<void> => {
  await create({
    title: "draft",
    rank: 1,
  });
  await create({
    title: "ready",
    rank: 2,
  });
  await create({
    title: "active",
    rank: 3,
  });
  await create({
    title: "review",
    rank: 4,
  });
  await create({
    title: "done",
    rank: 5,
  });
};
