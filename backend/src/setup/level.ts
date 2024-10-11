import Dimension from "../models/Dimension.js";
import * as levelService from "../services/level.js";

const levels: { level: number; capabilities: string[]; examples: string[] }[] =
  [];
levels.push({
  level: 4,
  capabilities: ["execute tasks according to step-by-step instructions."],
  examples: [
    "An operator that assembles modulebacks and follows the work instructions. The operator's workplace is set up for the task, and the parts are available.",
    "An IT service technician installs software according to instructions on a client machine.",
  ],
});

levels.push({
  level: 5,
  capabilities: [
    "complete tasks independently.",
    "make decisions within defined and tight parameters",
  ],
  examples: [
    "An HR assistant updates an employee record and checks back with the employee if any information is missing.",
    "An operator runs calibration scripts for the module calibration in the X-box.",
    "An IT service technician solves a service desk request after clarifying with the stakeholder.",
  ],
});

levels.push({
  level: 6,
  capabilities: [
    "complete task within guidelines independently.",
    "demonstrate initiative in solving issues.",
    "make decisions within bounded parameters.",
    "adapt instructions to variations and assess outcomes.",
  ],
  examples: [
    "An operator addresses issues with a manufacturing order and organises the missing material with the responsible group.",
    "A logistic expert prepares all the materials for a shipment and ensures they meet the scheduled delivery date.",
    "A recruiting assistant publishes job ads on the correct platforms.",
  ],
});
levels.push({
  level: 7,
  capabilities: [
    "develop solutions and contribute independently to a project.",
    "take initiative to find creative ways of resolving issues within broad parameters.",
    "take accountabilty for their contributions.",
  ],
  examples: [
    "A field service engineers finds an solutions that satisfy the immediate customer need, drawing on internal and external resources.",
    "An engineer identifies domain needs by collecting feedback from stakeholders, mapping it to e.g. a SWOT analysis, prioritizing and addressing the relevant topics.",
    "A R&D scientist plans and executes the characterisation of a new sensor material on an existing ASIC with input from colleagues.",
  ],
});
levels.push({
  level: 8,
  capabilities: [
    "manage projects without guidance.",
    "take accountability for their contributions and its impact on DECTRIS.",
  ],
  examples: [
    "A software engineer relalises the quality of code degrades, takes initiative and brings in software best practices in the team.",
    "A development engineer/R&D scientist brings up new technologies in the team, evaluates it and assesses potential applications.",
    "A production engineer initiates the introduction of Six Sigma to the company and improve quality management.",
  ],
});
levels.push({
  level: 9,
  capabilities: [
    "take accountability for the contributions of their domain and its impact on DECTRIS.",
    "take proactive steps to address critical topics in peripherial areas.",
  ],
  examples: [
    "A software engineer takes accountability for the build sytem and maintains and continuously improves them.",
    "A mechanical engineer realises an improvement potential while talking with a operator and implements changes addressing the issue and creates best-practice documentation for similar cases in the future.",
  ],
});
levels.push({
  level: 10,
  capabilities: [
    "take accountability for the outcome across multiple domains.",
    "take proactive steps to ensure success across multiple domains.",
  ],
  examples: [
    "project manager take accountabilty for an entire product project and finds creative solutions to reduce time to market.",
    "marketing manager oversees and coordiantes marketing activities and ensures their alignment with DECTRIS strategy.",
    "product manager ensures the product line's alignment with the market and actively manages its life cycle.",
  ],
});
levels.push({
  level: 11,
  capabilities: [
    "take ownership of a stragtecially critical aspect of the company.",
    "proactively propose, plan and excute strategic initiatives afecting the entire company.",
  ],
  examples: [
    "A flow team member introduces a new development process and ensures the new process reduces time-to-market.",
    "An ASIC designer takes the ownership for the entrie ASIC portfolio, oversees its implementation, and coordinates with stakesholders and external partners.",
  ],
});
levels.push({
  level: 12,
  capabilities: [
    "take full ownership of a business segment of the company.",
    "act with entrepreneurial spirit.",
  ],
  examples: ["no example"],
});

export const setupLevels = async (dimension: Dimension): Promise<void> => {
  levels.forEach(async (l) => {
    const level = await levelService.create({
      level: l.level,
      dimensionId: dimension.id,
    });
    l.capabilities.forEach(async (c) => {
      await levelService.createCapability({
        levelId: level.id,
        capability: c,
      });
    });
    l.examples.forEach(async (e) => {
      await levelService.createExample({
        levelId: level.id,
        example: e,
      });
    });
  });
};
