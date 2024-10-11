export class ValueReasoning {
  id: number;
  assessmentSessionId: number;
  dimensionId: number;
  text: string | null;

  constructor(
    id: number,
    userId: number,
    assessmentId: number,
    text: string | null
  ) {
    this.id = id;
    this.assessmentSessionId = userId;
    this.dimensionId = assessmentId;
    this.text = text;
  }

  static fromJSON(json: {
    id: number;
    assessmentSessionId: number;
    dimensionId: number;
    text: string | null;
  }): ValueReasoning {
    return new ValueReasoning(
      json.id,
      json.assessmentSessionId,
      json.dimensionId,
      json.text
    );
  }
}
