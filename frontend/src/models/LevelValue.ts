export class LevelValue {
  assessmentSessionId: number;
  dimensionId: number;
  value: number | null;

  constructor(userId: number, assessmentId: number, value: number | null) {
    this.assessmentSessionId = userId;
    this.dimensionId = assessmentId;
    this.value = value;
  }

  static fromJSON(json: {
    assessmentSessionId: number;
    dimensionId: number;
    value: number | null;
  }): LevelValue {
    return new LevelValue(
      json.assessmentSessionId,
      json.dimensionId,
      json.value
    );
  }
}
