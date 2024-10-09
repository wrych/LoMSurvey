export class Dimension {
  id: number;
  title: string;
  description: string;
  impact: string;
  min: number;
  max: number;
  assessmentId: number;

  constructor(
    id: number,
    title: string,
    description: string,
    impact: string,
    min: number,
    max: number,
    assessmentId: number
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.impact = impact;
    this.min = min;
    this.max = max;
    this.assessmentId = assessmentId;
  }

  static fromJSON(json: Dimension): Dimension {
    return new Dimension(
      json.id,
      json.title,
      json.description,
      json.impact,
      json.min,
      json.max,
      json.assessmentId
    );
  }
}

export class Dimensions {
  dimensions: Record<number, Dimension>;

  constructor(dimensions: Dimension[]) {
    this.dimensions = Object.fromEntries(dimensions.map((a) => [a.id, a]));
  }

  static fromJSON(json: Dimension[]): Dimensions {
    return new Dimensions(json.map((a) => Dimension.fromJSON(a)));
  }
}
