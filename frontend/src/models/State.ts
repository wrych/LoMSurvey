export class State {
  id: number;
  rank: number;
  title: string;

  constructor(id: number, rank: number, title: string) {
    this.id = id;
    this.rank = rank;
    this.title = title;
  }

  static fromJSON(json: { id: number; rank: number; title: string }): State {
    return new State(json.id, json.rank, json.title);
  }
}

export class States {
  states: State[];

  constructor(states: State[]) {
    this.states = states;
  }

  static fromJSON(json: State[]): States {
    return new States(json.map((state) => State.fromJSON(state)));
  }
}
