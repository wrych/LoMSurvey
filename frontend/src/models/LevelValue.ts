export class LevelValue {
  id: number;
  assessmentSessionId: number;
  dimensionId: number;
  value: number | null;

  constructor(
    id: number,
    userId: number,
    assessmentId: number,
    value: number | null
  ) {
    this.id = id;
    this.assessmentSessionId = userId;
    this.dimensionId = assessmentId;
    this.value = value;
  }

  static fromJSON(json: {
    id: number;
    assessmentSessionId: number;
    dimensionId: number;
    value: number | null;
  }): LevelValue {
    return new LevelValue(
      json.id,
      json.assessmentSessionId,
      json.dimensionId,
      json.value
    );
  }
}
