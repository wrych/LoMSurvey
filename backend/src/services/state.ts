import State, { StateAttributes } from "../models/State.js";

export const create = async (state: StateAttributes): Promise<State> => {
  const newState = await State.create(state);
  return newState;
};

export const findInitialState = async (): Promise<State> => {
  const initialState = await State.findOne({
    order: [["rank", "ASC"]],
  });
  if (!initialState) {
    throw new Error("No state found");
  }
  return initialState;
};

export const findAllStates = async (): Promise<State[]> => {
  const states = await State.findAll({
    order: [["rank", "ASC"]],
  });
  return states;
};
