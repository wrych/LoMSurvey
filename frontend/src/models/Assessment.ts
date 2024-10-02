export class Assessment {
  id: number;
  stateId: number;
  title: string;

  constructor(id: number, stateId: number, title: string) {
    this.id = id;
    this.stateId = stateId;
    this.title = title;
  }

  static fromJSON(json: {
    id: number;
    stateId: number;
    title: string;
  }): Assessment {
    return new Assessment(json.id, json.stateId, json.title);
  }
}

export class Assessments {
  assessments: Assessment[];

  constructor(assessments: Assessment[]) {
    this.assessments = assessments;
  }

  static fromJSON(json: Assessment[]): Assessments {
    return new Assessments(json.map((a) => Assessment.fromJSON(a)));
  }
}
