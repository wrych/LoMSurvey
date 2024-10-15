import Assessment from "../models/Assessment.js";
import * as dimensionService from "../services/dimension.js";
import { setupLevels } from "./level.js";
import Dimension, { DimensionAttributes } from "../models/Dimension.js";

export const setupDimensions = async (
  assessment: Assessment
): Promise<Dimension[]> => {
  const dimensions: Dimension[] = [];
  for (let d of [
    [
      "Ownership",
      "The dimension 'Ownership' measures the level of full responsibility for something, as if it belongs to you. It implies accountability for outcomes, decision-making capability and authority, and personal commitment to success. Each level represents increasing self-responsibility in performing tasks and making decisions in their domain. A person taking ownership is expected to take accountability and show personal investment. Owners are fully responsible for their actions, decisions, and their consequences.",
      "Mastering ownership positively impacts DECTRIS by accelerating decisions and fostering commitment to results. Employees that take ownership contribute more significantly to the company’s success by bringing in ideas, novel approaches and proactively driving solutions. Furthermore, we expect that the level of creativity and innovation in the solutions will increase with ownership.",
      4,
      12,
    ],
    [
      "Subject Matter Expertise",
      "The dimension 'Subject Matter Expertise' measures an individual's level of acumen and authority in a specific domain. Each level represents an increasing degree of knowledge, specialization, and proficiency impacting how efficient and effective they address challenges within their domains and its interfaces. A subject matter expert is expected to become a master at their craftsmanship and promote excellency within their disciplines. People focusing on Subject Matter Expertise wish to deepen their domain knowledge and become authorities in their fields.",
      "DECTRIS delivers high-tech detectors and wants to further expand its offering to more comprehensive detection and analytics solutions. Inherently, this requires a deep understanding of physics, various engineering disciplines and product development. Just as important are professionals in product management, marketing, administration, human resources, and sales. DECTRIS depends on having subject matter experts that excel in their field/domain.",
      4,
      12,
    ],
    [
      "Leadership",
      "The dimension 'Leadership' measures the scope of influence and accountability toward achieving a common goal within the organization. Each level represents a progression from managing specific topics to broader, company-wide responsibilities, with increasing complexity and impact. This path is designed for individuals who aspire to coordinate, lead by example, inspire others to work together toward shared objectives and eventually take on company-wide or global responsibility.",
      "Taking on leadership responsibilities is essential for organizational growth and to achieve operational excellence, innovation, and business success, DECTRIS needs individuals who cultivate their leadership skills to drive strategic initiatives, act on improvements, and ensure alignment and smooth operations across the organization.",
      4,
      12,
    ],
    [
      "Collaboration",
      "The 'Collaboration' dimension measures the ability to work effectively with others and to foster a positive, trust-based working environment. Each level represents an increasing degree of collaborative effort, impacting team performance, team cohesion, connections with other teams, and promoting a positive environment at larger scale. A collaborative person is expected to work constructively with others, support one another through a feedback culture, openly discuss tensions, and strive the resolve them.",
      "Employees working collaboratively, positively impact DECTRIS by boosting problem-solving and fostering innovation and creativity. We believe that a collective approach helps reduce risks, ensures that diverse perspectives are integrated into decision-making processes, and enables quicker solutions to new challenges. Furthermore, we value employees who demonstrate a strong cooperative and supportive spirit and leverage others' strengths.",
      4,
      11,
    ],
    [
      "Communication",
      "The dimension 'Communication' measures the ability to convey information clearly, transparently, and to listen actively.  Each level reflects an increasing degree of communication skills and their impact on the team and the organization. A communicative person actively participates in discussions, adapts their commucation to the audience, openly shares knowledge, seeks input from others and builds connections.",
      "Effective internal communication is crucial for ensuring clarity, flow of information, mutual understanding, and alignment within a team and in the company. Communicators document information and make it available for now and the future. The ability to convey essential information, organize constructive and productive discussions across domains, and facilitate group interactions leads to better decision-making, collective understanding and overall better outcomes.",
      4,
      11,
    ],
  ]) {
    const dimension = await dimensionService.create({
      title: d[0],
      description: d[1],
      impact: d[2],
      min: d[3],
      max: d[4],
      assessmentId: assessment.id,
    } as DimensionAttributes);
    dimensions.push(dimension);
    await setupLevels(dimension);
  }
  return dimensions;
};
