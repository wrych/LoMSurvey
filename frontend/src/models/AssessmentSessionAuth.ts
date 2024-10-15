export class AssessmentSessionAuth {
  canView: boolean;
  canEdit: boolean;

  constructor(canView: boolean, canEdit: boolean) {
    this.canView = canView;
    this.canEdit = canEdit;
  }

  static fromJSON(json: AssessmentSessionAuth): AssessmentSessionAuth {
    return new AssessmentSessionAuth(json.canView, json.canEdit);
  }
}
