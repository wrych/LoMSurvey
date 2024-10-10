export class LevelWeight {
  assessmentSessionId: number;
  dimensionId: number;
  value: number;

  constructor(userId: number, assessmentId: number, value: number) {
    this.assessmentSessionId = userId;
    this.dimensionId = assessmentId;
    this.value = value;
  }

  static fromJSON(json: {
    assessmentSessionId: number;
    dimensionId: number;
    value: number;
  }): LevelWeight | null {
    return json
      ? new LevelWeight(json.assessmentSessionId, json.dimensionId, json.value)
      : null;
  }
}
