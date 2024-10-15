export class AssessmentSession {
  id: number;
  stateId: number;
  assessmentId: number;

  constructor(id: number, stateId: number, assessmentId: number) {
    this.id = id;
    this.stateId = stateId;
    this.assessmentId = assessmentId;
  }

  static fromJSON(json: AssessmentSession): AssessmentSession {
    return new AssessmentSession(json.id, json.stateId, json.assessmentId);
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
