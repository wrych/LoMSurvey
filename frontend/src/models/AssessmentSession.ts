export class AssessmentSession {
  id: number;
  assessmentId: number;

  constructor(id: number, assessmentId: number) {
    this.id = id;
    this.assessmentId = assessmentId;
  }

  static fromJSON(json: {
    id: number;
    assessmentId: number;
  }): AssessmentSession {
    return new AssessmentSession(json.id, json.assessmentId);
  }
}

export class AssessmentSessions {
  assessmentSessions: Record<number, AssessmentSession>;

  constructor(assessments: AssessmentSession[]) {
    this.assessmentSessions = Object.fromEntries(
      assessments.map((a) => [a.id, a])
    );
  }

  static fromJSON(json: AssessmentSession[]): AssessmentSessions {
    return new AssessmentSessions(
      json.map((a) => AssessmentSession.fromJSON(a))
    );
  }
}
