export class Level {
  id: number;
  capabilities: string[];
  examples: string[];
  level: number;
  dimensionId: number;

  constructor(
    id: number,
    capabilities: string[],
    examples: string[],
    level: number,
    dimensionId: number
  ) {
    this.id = id;
    this.capabilities = capabilities;
    this.examples = examples;
    this.level = level;
    this.dimensionId = dimensionId;
  }

  static fromJSON(json: {
    id: number;
    LevelCapabilities: { capability: string }[];
    LevelExamples: { example: string }[];
    level: number;
    dimensionId: number;
  }): Level {
    return new Level(
      json.id,
      json.LevelCapabilities.map((c) => c.capability),
      json.LevelExamples.map((e) => e.example),
      json.level,
      json.dimensionId
    );
  }
}

export class Levels {
  levels: Record<number, Level>;

  constructor(assessments: Level[]) {
    this.levels = Object.fromEntries(assessments.map((a) => [a.id, a]));
  }

  static fromJSON(json: Level[]): Levels {
    return new Levels(json.map((a) => Level.fromJSON(a)));
  }
}
