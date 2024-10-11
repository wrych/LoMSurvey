export class WeightReasoning {
  id: number;
  assessmentSessionId: number;
  text: string | null;

  constructor(id: number, assessmentSessionId: number, text: string | null) {
    this.id = id;
    this.assessmentSessionId = assessmentSessionId;
    this.text = text;
  }

  static fromJSON(json: {
    id: number;
    assessmentSessionId: number;
    text: string | null;
  }): WeightReasoning {
    return new WeightReasoning(json.id, json.assessmentSessionId, json.text);
  }
}
