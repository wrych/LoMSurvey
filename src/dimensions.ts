import { ref } from "vue";
import { description } from "./textblocks";

export interface Level {
  value: number;
  capabilities: { en: string[]; de: string[] };
  examples: { en: string[]; de: string[] };
}

export interface Dimension {
  name: { en: string; de: string };
  id: string;
  description: { en: string; de: string };
  impact: { en: string; de: string };
  levels: Level[];
}

export const values = ref<{
  subject_matter_expertise: number | undefined;
  leadership: number | undefined;
  ownership: number | undefined;
  collaboration: number | undefined;
  communication: number | undefined;
}>({
  subject_matter_expertise: 8.0,
  leadership: 8.0,
  ownership: 8.0,
  collaboration: 8.0,
  communication: 8.0,
});

export type dimensionId =
  | "subject_matter_expertise"
  | "leadership"
  | "ownership"
  | "collaboration"
  | "communication";

const ownership = [
  {
    value: 4,
    capabilities: {
      en: ["execute tasks according to step-by-step instructions."],
      de: ["führen Aufgaben gemäss Schritt-für-Schritt-Anweisungen aus."],
    },
    examples: {
      en: [
        "An operator that assembles modulebacks and follows the work instructions. The operator's workplace is set up for the task, and the parts are available.",
        "An IT service technician installs software according to instructions on a client machine.",
      ],
      de: [
        "Ein Operator montiert Modul-Backs und die Arbeitsanweisungen befolgt. Der Arbeitsplatz des Operators ist für die Aufgabe eingerichtet, und die Teile sind verfügbar.",
        "Ein IT-Service-Techniker installiert Software gemäss Anweisungen auf einem Client-Rechner.",
      ],
    },
  },
  {
    value: 5,
    capabilities: {
      en: [
        "complete tasks independently",
        "make decisions withing defined and tight parameters.",
      ],
      de: [
        "führen Aufgaben selbständig aus",
        "treffen Entscheidungen innerhalb definierter und enger Parameter.",
      ],
    },
    examples: {
      en: [
        "An HR assistant updates an employee record and checks back with the employee if any information is missing.",
        "An operator runs calibration scripts for the module calibration in the X-box.",
        "An IT service technician solves a service desk request after clarifying with the stakeholder.",
      ],
      de: [
        "Ein HR-Assistent aktualisiert einen Mitarbeiterdatensatz und fragt beim Mitarbeiter nach, falls Informationen fehlen.",
        "Ein Operator führt Kalibrierungsskripte für die Modulkalibrierung in der X-Box durch.",
        "Ein IT-Service-Techniker löst eine Service-Desk-Anfrage, nachdem er sich mit dem Stakeholder abgestimmt hat.",
      ],
    },
  },
  {
    value: 6,
    capabilities: {
      en: [
        "complete task within guidelines independently.",
        "demonstrate initiative in solving issues.",
        "make decisions within bounded parameters.",
        "adapt instructions to variations and assess outcomes.",
      ],
      de: [
        "führen Aufgaben gemäss Richtlinien selbständig aus.",
        "zeigen Initiative bei der Problemlösung.",
        "treffen Entscheidungen innerhalb vorgegebener Parameter.",
        "passen Anweisungen an Variationen an und bewerten Ergebnisse.",
      ],
    },
    examples: {
      en: [
        "An operator addresses issues with a manufacturing order and organises the missing material with the responsible group.",
        "A logistic expert prepares all the materials for a shipment and ensures to meet the scheduled delivery date.",
        "A recruiting assistant publishes job ads on the correct platforms.",
      ],
      de: [
        "Ein Operator behebt Probleme mit einem Fertigungsauftrag und organisiert das fehlende Material mit der verantwortlichen Gruppe.",
        "Ein Logistikexperte bereitet alle Materialien für einen Versand vor und stellt sicher, dass der Liefertermin eingehalten wird.",
        "Ein Recruiting-Assistent veröffentlicht Stellenanzeigen auf den richtigen Plattformen.",
      ],
    },
  },
  {
    value: 7,
    capabilities: {
      en: [
        "develop solutions and contribute independently to a project.",
        "take initiative to find creative ways of resolving issues within broad parameters.",
        "take accountabilty for their contributions.",
      ],
      de: [
        "entwickeln Lösungen und tragen selbständig zu einem Projekt bei.",
        "ergreifen die Initiative, um kreative Lösungswege innerhalb weiter Parameter zu finden.",
        "übernehmen die Verantwortung für ihre Beiträge.",
      ],
    },
    examples: {
      en: [
        "A field service engineers finds an solutions that satisfy the immediate customer need, drawing on internal and external resources.",
        "An engineer identifies domain needs by collecting feedback from stakeholders, mapping it to e.g. a SWOT analysis, prioritizing and addressing the relevant topics.",
        "A R&D scientist plans and executes the characterisation of a new sensor material on an existing ASIC with input from colleagues.",
      ],
      de: [
        "Ein Mitarbeiter im Support findet eine Lösung, die den unmittelbaren Kundenbedarf befriedigen, wobei er auf interne und externe Ressourcen zugreift.",
        "Ein Ingenieur identifiziert Domänenbedürfnisse, indem er Feedback von Stakeholdern sammelt, es z. B. einer SWOT-Analyse zuordnet, priorisiert und die relevanten Themen anspricht.",
        "Ein F&E-Wissenschaftler plant und führt die Charakterisierung eines neuen Sensormaterials auf einem vorhandenen ASIC mit Input von Kollegen durch.",
      ],
    },
  },
  {
    value: 8,
    capabilities: {
      en: [
        "manage projects without guidance.",
        "take accountability for their contributions and its impact on DECTRIS.",
      ],
      de: [
        "leiten Projekte ohne Anleitung.",
        "übernehmen Verantwortung für ihre Beiträge und deren Auswirkungen auf DECTRIS.",
      ],
    },
    examples: {
      en: [
        "A software engineer realizes the quality of code degrades, takes initiative and brings in software best practices in the team.",
        "A development engineer/R&D scientist brings up new technologies in the team, evaluates it and assesses potential applications.",
        "A production engineer initiates the introduction of Six Sigma to the company and improves quality management.",
      ],
      de: [
        "Ein Softwareingenieur erkennt, dass die Codequalität nachlässt, ergreift die Initiative und bringt Software-Best-Practices ins Team.",
        "Ein Entwicklungsingenieur/F&E-Wissenschaftler bringt neue Technologien ins Team, bewertet sie und prüft potenzielle Anwendungen.",
        "Ein Produktionsingenieur initiiert die Einführung von Six Sigma im Unternehmen und verbessert das Qualitätsmanagement.",
      ],
    },
  },
  {
    value: 9,
    capabilities: {
      en: [
        "take accountability for the contributions of their domain and its impact on DECTRIS.",
        "take proactive steps to address critical topics in peripheral areas.",
      ],
      de: [
        "übernehmen Verantwortung für die Beiträge ihres Bereichs und deren Auswirkungen auf DECTRIS.",
        "ergreifen proaktive Maßnahmen, um kritische Themen in peripheren Bereichen anzugehen.",
      ],
    },
    examples: {
      en: [
        "A software engineer takes accountability for the build system and maintains and continuously improves it.",
        "A mechanical engineer realizes an improvement potential while talking with an operator and implements changes addressing the issue and creates best-practice documentation for similar cases in the future.",
      ],
      de: [
        "Ein Softwareingenieur übernimmt die Verantwortung für das Build-System und pflegt und verbessert es kontinuierlich.",
        "Ein Maschinenbauingenieur erkennt ein Verbesserungspotenzial im Gespräch mit einem Bediener, setzt Änderungen zur Behebung des Problems um und erstellt Best-Practice-Dokumentationen für ähnliche Fälle in der Zukunft.",
      ],
    },
  },
  {
    value: 10,
    capabilities: {
      en: [
        "take accountability for the outcome across multiple domains.",
        "take proactive steps to ensure success across multiple domains.",
      ],
      de: [
        "übernehmen Verantwortung für das Ergebnis über mehrere Bereiche hinweg.",
        "ergreifen proaktive Maßnahmen, um den Erfolg in mehreren Bereichen sicherzustellen.",
      ],
    },
    examples: {
      en: [
        "A project manager takes accountability for an entire product project and finds creative solutions to reduce time to market.",
        "A marketing manager oversees and coordinates marketing activities and ensures their alignment with DECTRIS strategy.",
        "A product manager ensures the product line's alignment with the market and actively manages its life cycle.",
      ],
      de: [
        "Ein Projektmanager übernimmt die Verantwortung für ein gesamtes Produktprojekt und findet kreative Lösungen, um die Markteinführungszeit zu verkürzen.",
        "Ein Marketingmanager überwacht und koordiniert Marketingaktivitäten und stellt deren Ausrichtung an der DECTRIS-Strategie sicher.",
        "Ein Produktmanager stellt die Ausrichtung der Produktlinie am Markt sicher und managt aktiv deren Lebenszyklus.",
      ],
    },
  },
  {
    value: 11,
    capabilities: {
      en: [
        "take ownership of a strategically critical aspect of the company.",
        "proactively propose, plan, and execute strategic initiatives affecting the entire company.",
      ],
      de: [
        "übernehmen die Verantwortung für einen strategisch kritischen Aspekt des Unternehmens.",
        "proaktiv strategische Initiativen vorschlagen, planen und umsetzen, die das gesamte Unternehmen betreffen.",
      ],
    },
    examples: {
      en: [
        "A flow team member introduces a new development process and ensures the new process reduces time-to-market.",
        "An ASIC designer takes ownership of the entire ASIC portfolio, oversees its implementation, and coordinates with stakeholders and external partners.",
      ],
      de: [
        "Ein Mitglied des Flow-Teams führt einen neuen Entwicklungsprozess ein und stellt sicher, dass der neue Prozess die Markteinführungszeit verkürzt.",
        "Ein ASIC-Designer übernimmt die Verantwortung für das gesamte ASIC-Portfolio, überwacht dessen Implementierung und koordiniert sich mit Stakeholdern und externen Partnern.",
      ],
    },
  },
  {
    value: 12,
    capabilities: {
      en: [
        "take full ownership of a business segment of the company.",
        "act with entrepreneurial spirit.",
      ],
      de: [
        "übernehmen die volle Verantwortung für einen Geschäftsbereich des Unternehmens.",
        "handeln mit unternehmerischem Geist.",
      ],
    },
    examples: {
      en: ["no example"],
      de: ["kein Beispiel"],
    },
  },
];

const sme = [
  {
    value: 4,
    capabilities: {
      en: ["have completed basic education."],
      de: ["haben die Grundbildung abgeschlossen."],
    },
    examples: {
      en: [
        "An operator has completed secondary school before starting his professional career at DECTRIS.",
      ],
      de: [
        "Ein Operator hat die Sekundarschule abgeschlossen, bevor er seine berufliche Laufbahn bei DECTRIS begann.",
      ],
    },
  },
  {
    value: 5,
    capabilities: {
      en: [
        "have completed an apprenticeship or have multiple years of experience on the job without completed apprenticeship.",
      ],
      de: [
        "haben eine Lehre abgeschlossen oder verfügen über mehrere Jahre Berufserfahrung ohne abgeschlossene Lehre.",
      ],
    },
    examples: {
      en: [
        "An IT supporter joins DECTRIS after completing his apprenticeship.",
        "An operator joins DECTRIS after working for 5 years in a similar position. They have not completed an apprenticeship.",
      ],
      de: [
        "Ein IT-Supporter kommt zu DECTRIS, nachdem er seine Lehre abgeschlossen hat.",
        "Ein Operator kommt zu DECTRIS, nachdem er 5 Jahre in einer ähnlichen Position gearbeitet hat. Sie haben keine Lehre abgeschlossen.",
      ],
    },
  },
  {
    value: 6,
    capabilities: {
      en: ["experienced professionals."],
      de: ["erfahrene Fachkräfte."],
    },
    examples: {
      en: [
        "An operator that visited a further education and has experience in a specific safety topic.",
        "A software engineer joins DECTRIS after completing their degree at the HF/TS/FMS.",
        "A marketing specialist joins DECTRIS part time while completing their bachelor’s degree.",
      ],
      de: [
        "Ein Operator, der eine Weiterbildung besucht hat und Erfahrung in einem bestimmten Sicherheitsthema hat.",
        "Ein Softwareingenieur kommt zu DECTRIS, nachdem er sein Studium an der HF/TS/FMS abgeschlossen hat.",
        "Ein Marketing-Spezialist kommt in Teilzeit zu DECTRIS, während er seinen Bachelor-Abschluss macht.",
      ],
    },
  },
  {
    value: 7,
    capabilities: {
      en: [
        "rely on practical experience in some area of their domain.",
        "have in-depth knowledge on specialized topics.",
        "have extended experience or advanced vocational training.",
      ],
      de: [
        "verlassen sich auf praktische Erfahrung in einem Bereich ihrer Domäne.",
        "haben tiefgehendes Wissen zu spezialisierten Themen.",
        "haben erweiterte Erfahrung oder eine fortgeschrittene berufliche Ausbildung.",
      ],
    },
    examples: {
      en: [
        "A purchasing specialist shows proficiency in negotiating contracts.",
        "An ICT system specialist demonstrates expertise in managing virtual machines.",
        "A mechanical engineer joins DECTRIS after completing their degree (BSc/MSc) at a university of applied sciences.",
      ],
      de: [
        "Ein Einkaufsspezialist zeigt Kompetenz im Verhandeln von Verträgen.",
        "Ein ICT-System-Spezialist demonstriert Fachwissen im Management von virtuellen Maschinen.",
        "Ein Maschinenbauingenieur kommt zu DECTRIS, nachdem er sein Studium (BSc/MSc) an einer Fachhochschule abgeschlossen hat.",
      ],
    },
  },
  {
    value: 8,
    capabilities: {
      en: [
        "are recognized for their deep knowledge for a specific subject.",
        "serve as key contacts for specific subjects within the organization.",
        "have in-depth experience in the relevant field.",
      ],
      de: [
        "werden für ihr tiefes Wissen in einem bestimmten Fachgebiet anerkannt.",
        "dienen als Hauptansprechpartner für spezifische Themen innerhalb der Organisation.",
        "haben tiefgehende Erfahrung im relevanten Bereich.",
      ],
    },
    examples: {
      en: [
        "A product engineer explains to the developers how DECTRIS customers use detectors.",
        "A software engineer represents the team in a quarterly target (QT) and advises on specific architectural decisions.",
        "A development engineer acts as contact for radiation simulations.",
        "A R&D scientist joins DECTRIS after completing their PhD in detector physics.",
      ],
      de: [
        "Ein Produktingenieur erklärt den Entwicklern, wie DECTRIS-Kunden Detektoren verwenden.",
        "Ein Softwareingenieur vertritt das Team in einem Quartalsziel (QT) und berät bei spezifischen Architekturentscheidungen.",
        "Ein Entwicklungsingenieur fungiert als Ansprechpartner für Strahlungssimulationen.",
        "Ein F&E-Wissenschaftler kommt zu DECTRIS, nachdem er seinen Doktortitel in Detektorphysik abgeschlossen hat.",
      ],
    },
  },
  {
    value: 9,
    capabilities: {
      en: [
        "experienced technical experts for their domain.",
        "represent their domain expertise in projects.",
        "mentor more junior peers in their professional development.",
      ],
      de: [
        "erfahrene technische Experten für ihre Domäne.",
        "vertreten ihre Fachkenntnisse in Projekten.",
        "mentoren jüngere Kollegen in ihrer beruflichen Entwicklung.",
      ],
    },
    examples: {
      en: [
        "An electrical engineer adds critical contributions to a product development project and contributes with broad domain knowledge.",
        "A product manager keeps an informed overview of all the activities that affect the EM market.",
        "A sales manager knows competitors and dynamics in a specific market and implements targeted sales strategies to increase market share.",
      ],
      de: [
        "Ein Elektroingenieur leistet kritische Beiträge zu einem Produktentwicklungsprojekt und trägt mit umfassendem Fachwissen bei.",
        "Ein Produktmanager behält einen informierten Überblick über alle Aktivitäten, die den EM-Markt betreffen.",
        "Ein Vertriebsleiter kennt die Wettbewerber und Dynamiken in einem bestimmten Markt und implementiert gezielte Verkaufsstrategien, um den Marktanteil zu erhöhen.",
      ],
    },
  },
  {
    value: 10,
    capabilities: {
      en: [
        "serve as authoritative voices in their domain.",
        "are consulted in decisions of major importance.",
        "many years of experience within their domain and its interfaces.",
        "monitor trends in their field and analyze their applicability at DECTRIS.",
      ],
      de: [
        "dienen als autoritative Stimmen in ihrem Fachgebiet.",
        "werden bei Entscheidungen von großer Bedeutung konsultiert.",
        "viele Jahre Erfahrung in ihrem Fachgebiet und dessen Schnittstellen.",
        "beobachten Trends in ihrem Bereich und analysieren deren Anwendbarkeit bei DECTRIS.",
      ],
    },
    examples: {
      en: [
        "A business analyst critically contributes with his extended expertise and experience to the development and implementation of a new process in collaboration with the finance team.",
        "A product manager spearheads the definition of the strategy for the Lab market with his outstanding understanding of the market and the dynamics within it.",
        "A development engineer critically contributes to a development project in multiple phases and multiple domains.",
      ],
      de: [
        "Ein Business Analyst trägt mit seinem umfangreichen Fachwissen und seiner Erfahrung maßgeblich zur Entwicklung und Implementierung eines neuen Prozesses in Zusammenarbeit mit dem Finanzteam bei.",
        "Ein Produktmanager leitet die Definition der Strategie für den Labormarkt mit seinem herausragenden Verständnis des Marktes und der Dynamik darin.",
        "Ein Entwicklungsingenieur trägt maßgeblich zu einem Entwicklungsprojekt in mehreren Phasen und mehreren Bereichen bei.",
      ],
    },
  },
  {
    value: 11,
    capabilities: {
      en: [
        "are recognized as exceptional experts in their field and its peripherals.",
        "substantially advance their field with important inputs, ideas or solutions.",
      ],
      de: [
        "werden als außergewöhnliche Experten in ihrem Fachgebiet und dessen Randbereichen anerkannt.",
        "bringen ihr Fachgebiet mit wichtigen Beiträgen, Ideen oder Lösungen erheblich voran.",
      ],
    },
    examples: {
      en: [
        "An ASIC designer supports his team with outstanding knowledge about designing radiation hard chips in a smaller node.",
      ],
      de: [
        "Ein ASIC-Designer unterstützt sein Team mit herausragendem Wissen über das Design strahlungsfester Chips in einem kleineren Knoten.",
      ],
    },
  },
  {
    value: 12,
    capabilities: {
      en: [
        "are recognized as thought leaders in their industry.",
        "shape trends and set benchmarks for excellence.",
        "show visionary technical leadership.",
      ],
      de: [
        "werden als Vordenker in ihrer Branche anerkannt.",
        "prägen Trends und setzen Maßstäbe für Exzellenz.",
        "zeigen visionäre technische Führung.",
      ],
    },
    examples: {
      en: ["no example"],
      de: ["kein Beispiel"],
    },
  },
];

const leadership = [
  {
    value: 4,
    capabilities: {
      en: ["no leadership responsibilities."],
      de: ["keine Führungsverantwortung."],
    },
    examples: {
      en: ["no example"],
      de: ["kein Beispiel"],
    },
  },
  {
    value: 5,
    capabilities: {
      en: ["act with self-responsibility."],
      de: ["handeln mit Selbstverantwortung."],
    },
    examples: {
      en: [
        "An employee proactively acknowledges a mistake they made and looks for solutions with colleagues.",
      ],
      de: [
        "Ein Mitarbeiter erkennt proaktiv einen Fehler, den er gemacht hat, und sucht nach Lösungen mit Kollegen.",
      ],
    },
  },
  {
    value: 6,
    capabilities: {
      en: [
        "align with a peer and drive progress toward shared objectives.",
        "start taking leadership responsibilities in the domain.",
      ],
      de: [
        "stimmen sich mit einem Kollegen ab und treiben Fortschritte in Richtung gemeinsamer Ziele voran.",
        "übernehmen erste Führungsverantwortung im Bereich.",
      ],
    },
    examples: {
      en: [
        "An employee coordinates the holidays or workload of the team and makes sure somebody is always around.",
        "An employee presents their domain to somebody who freshly joined DECTRIS.",
      ],
      de: [
        "Ein Mitarbeiter koordiniert die Urlaubs- oder Arbeitsbelastung des Teams und stellt sicher, dass immer jemand anwesend ist.",
        "Ein Mitarbeiter stellt einem neuen Kollegen seinen Bereich vor, der gerade bei DECTRIS angefangen hat.",
      ],
    },
  },
  {
    value: 7,
    capabilities: {
      en: [
        "take leadership for a specific topic in the domain and drive progress.",
        "align in a smaller group and drive progress toward shared objectives.",
      ],
      de: [
        "übernehmen die Führung für ein spezifisches Thema im Bereich und treiben Fortschritte voran.",
        "stimmen sich in einer kleineren Gruppe ab und treiben Fortschritte in Richtung gemeinsamer Ziele voran.",
      ],
    },
    examples: {
      en: [
        "An employee takes a global role and advances the domain forward in regard to the responsibility of the role.",
        "A SCADA team member takes responsibility for adapting the interface to a new machine.",
      ],
      de: [
        "Ein Mitarbeiter übernimmt eine globale Rolle und treibt den Bereich im Hinblick auf die Verantwortung der Rolle voran.",
        "Ein SCADA-Teammitglied übernimmt die Verantwortung für die Anpassung der Schnittstelle an eine neue Maschine.",
      ],
    },
  },
  {
    value: 8,
    capabilities: {
      en: [
        "co-create and coordinate execution of shared domain or project objectives.",
        "inspire domain to collaborate toward shared objectives and drive progress.",
      ],
      de: [
        "gemeinsame Ziele im Bereich oder Projekt mitgestalten und deren Umsetzung koordinieren.",
        "den Bereich inspirieren, auf gemeinsame Ziele hinzuarbeiten und Fortschritte voranzutreiben.",
      ],
    },
    examples: {
      en: [
        "An employee organizes multiple events from invitation to execution for DECTRIS X.",
        "A marketing specialist leads an improvement initiative in the domain.",
        "A compliance officer coordinates a work group and inspires members to meet the group's goals.",
      ],
      de: [
        "Ein Mitarbeiter organisiert mehrere Veranstaltungen von der Einladung bis zur Durchführung für DECTRIS X.",
        "Ein Marketing-Spezialist leitet eine Verbesserungsinitiative im Bereich.",
        "Ein Compliance-Beauftragter koordiniert eine Arbeitsgruppe und inspiriert die Mitglieder, die Ziele der Gruppe zu erreichen.",
      ],
    },
  },
  {
    value: 9,
    capabilities: {
      en: [
        "co-create and coordinate execution of shared objectives across domains.",
        "inspire people for shared objectives across domains and drive progress.",
      ],
      de: [
        "gemeinsame Ziele über verschiedene Bereiche hinweg mitgestalten und deren Umsetzung koordinieren.",
        "Menschen für gemeinsame Ziele über verschiedene Bereiche hinweg inspirieren und Fortschritte vorantreiben.",
      ],
    },
    examples: {
      en: [
        "A field system engineer realizes that customers and distributors struggle with configuration and installation of the detectors, implements a workflow to assist the configuration and to gain feedback; then gathers internal and external resources to generate training material and trigger relevant product changes.",
        "A stream coordinator inspires the C2C value stream and stakeholders from M2M to collaborate toward improving a critically low yield of a product and drive progress.",
      ],
      de: [
        "Ein Feldsystemingenieur erkennt, dass Kunden und Vertriebspartner Schwierigkeiten bei der Konfiguration und Installation der Detektoren haben, implementiert einen Workflow zur Unterstützung der Konfiguration und zur Gewinnung von Feedback; dann sammelt er interne und externe Ressourcen, um Schulungsmaterial zu erstellen und relevante Produktänderungen anzustoßen.",
        "Ein Stream-Koordinator inspiriert den C2C-Wertstrom und Stakeholder von M2M zur Zusammenarbeit, um den kritisch niedrigen Ertrag eines Produkts zu verbessern und Fortschritte voranzutreiben.",
      ],
    },
  },
  {
    value: 10,
    capabilities: {
      en: [
        "give input to the creation of the company's multi-year strategy.",
        "inspire on the company level.",
        "carry company's vision and values.",
      ],
      de: [
        "geben Input zur Erstellung der mehrjährigen Unternehmensstrategie.",
        "inspirieren auf Unternehmensebene.",
        "tragen die Vision und Werte des Unternehmens.",
      ],
    },
    examples: {
      en: [
        "A product manager develops a market entry strategy, collects market information and represents it in the company strategy discussions.",
        "An employee addresses the need of the company for better recruiting and drives it forward from ideation through implementation.",
      ],
      de: [
        "Ein Produktmanager entwickelt eine Markteintrittsstrategie, sammelt Marktinformationen und vertritt diese in den Unternehmensstrategie-Diskussionen.",
        "Ein Mitarbeiter erkennt den Bedarf des Unternehmens an besserem Recruiting und treibt es von der Ideenfindung bis zur Umsetzung voran.",
      ],
    },
  },
  {
    value: 11,
    capabilities: {
      en: [
        "provide direction for segments of the company or critical strategic topics.",
        "represent DECTRIS's vision and values in the company and toward the outside.",
        "inspire the company to commit towards shared goals.",
      ],
      de: [
        "geben Richtung für Segmente des Unternehmens oder kritische strategische Themen vor.",
        "vertreten die Vision und Werte von DECTRIS im Unternehmen und nach außen.",
        "inspirieren das Unternehmen, sich gemeinsamen Zielen zu verpflichten.",
      ],
    },
    examples: {
      en: [
        "A focus team member develops an overall market strategy and aligns the company on it.",
      ],
      de: [
        "Ein Mitglied des Fokus-Teams entwickelt eine Gesamtmarktstrategie und stimmt das Unternehmen darauf ab.",
      ],
    },
  },
  {
    value: 12,
    capabilities: {
      en: [
        "provide direction for the entire company.",
        "be a role model for DECTRIS's vision and values.",
        "lead the company to reach its shared goals.",
      ],
      de: [
        "geben die Richtung für das gesamte Unternehmen vor.",
        "sind ein Vorbild für die Vision und Werte von DECTRIS.",
        "führen das Unternehmen, um seine gemeinsamen Ziele zu erreichen.",
      ],
    },
    examples: {
      en: ["no example"],
      de: ["kein Beispiel"],
    },
  },
];

const collaboration = [
  {
    value: 4,
    capabilities: {
      en: ["coordinate their own activities with others."],
      de: ["koordinieren ihre eigenen Aktivitäten mit anderen."],
    },
    examples: {
      en: [
        "An operator, who assembles modules, coordinates with colleagues according for the use of available machines.",
      ],
      de: [
        "Ein Operator, der Module montiert, koordiniert sich mit Kollegen bezüglich der Nutzung der verfügbaren Maschinen.",
      ],
    },
  },
  {
    value: 5,
    capabilities: {
      en: [
        "actively participate in team activities.",
        "offer assistance to others within their areas of expertise.",
      ],
      de: [
        "nehmen aktiv an Teamaktivitäten teil.",
        "bieten anderen Unterstützung in ihren Fachgebieten an.",
      ],
    },
    examples: {
      en: [
        "An operator who assembles MYTHEN modules supports a colleague to manage peak workloads.",
        "A commercial assistant supports the team when resources are limited, whenever possible, within its own area of expertise.",
      ],
      de: [
        "Ein Operator, der MYTHEN-Module montiert, unterstützt einen Kollegen bei der Bewältigung von Spitzenlasten.",
        "Ein kaufmännischer Assistent unterstützt das Team, wenn Ressourcen knapp sind, wann immer möglich, in seinem eigenen Fachgebiet.",
      ],
    },
  },
  {
    value: 6,
    capabilities: {
      en: [
        "work collaboratively and in direct contact with members of other teams.",
        "address requests and contribute to team decisions.",
        "onboard colleagues.",
      ],
      de: [
        "arbeiten kollaborativ und in direktem Kontakt mit Mitgliedern anderer Teams.",
        "bearbeiten Anfragen und tragen zu Teamentscheidungen bei.",
        "führen neue Kollegen ein.",
      ],
    },
    examples: {
      en: [
        "An operator encounters a recurring issue with the operation of the X-ray tube, informs the lab responsible, discusses the problem, and confirms that the tube is functioning normally after the repair.",
        "A recruiting assistant collaborates with the team that opened the position, gathering the necessary information to accurately post a new job opening.",
      ],
      de: [
        "Ein Operator stößt auf ein wiederkehrendes Problem mit dem Betrieb der Röntgenröhre, informiert den Laborverantwortlichen, diskutiert das Problem und bestätigt, dass die Röhre nach der Reparatur normal funktioniert.",
        "Ein Recruiting-Assistent arbeitet mit dem Team zusammen, das die Position eröffnet hat, sammelt die notwendigen Informationen, um eine neue Stellenausschreibung genau zu veröffentlichen.",
      ],
    },
  },
  {
    value: 7,
    capabilities: {
      en: [
        "provide constructive feedback to peers.",
        "address technical or personal tensions in the team.",
        "work together with others to create solutions.",
      ],
      de: [
        "geben konstruktives Feedback an Kollegen.",
        "sprechen technische oder persönliche Spannungen im Team an.",
        "arbeiten mit anderen zusammen, um Lösungen zu finden.",
      ],
    },
    examples: {
      en: [
        "An employee participates in Peer-Reviewed Self-Reflections of a close peer, offering feedback to support growth and continuous improvement.",
        "An employee actively participates in team retrospectives and engages in one-on-one exchanges with peers, identifying personal tensions to discuss them at an early stage.",
        "An employee engages in consent discussions, expressing own concerns or objections to proposals and committing to decision.",
      ],
      de: [
        "Ein Mitarbeiter nimmt an Peer-Reviewed Self-Reflections eines engen Kollegen teil und bietet Feedback zur Unterstützung von Wachstum und kontinuierlicher Verbesserung.",
        "Ein Mitarbeiter nimmt aktiv an Team-Retrospektiven teil und engagiert sich in Einzelgesprächen mit Kollegen, um persönliche Spannungen zu erkennen und frühzeitig zu besprechen.",
        "Ein Mitarbeiter beteiligt sich an Konsensdiskussionen, äußert eigene Bedenken oder Einwände gegen Vorschläge und verpflichtet sich zur Entscheidung.",
      ],
    },
  },
  {
    value: 8,
    capabilities: {
      en: [
        "moderate and negotiate tensions in the team.",
        "ensure smooth collaboration in the team.",
        "facilitate effective decision making in the team.",
        "be there for peers and offer assistance.",
      ],
      de: [
        "moderieren und verhandeln Spannungen im Team.",
        "sorgen für eine reibungslose Zusammenarbeit im Team.",
        "ermöglichen effektive Entscheidungsfindung im Team.",
        "sind für Kollegen da und bieten Unterstützung an.",
      ],
    },
    examples: {
      en: [
        "A product engineer acts on tensions related to lack of resources in an urgent cross-functional Engineering Change Request, and negotiates prioritization with minimal impact on other activities.",
        "An employee engages in multi-team consent discussions, expressing own concerns or objections to proposals and committing to the decision.",
      ],
      de: [
        "Ein Produktingenieur reagiert auf Spannungen im Zusammenhang mit Ressourcenmangel bei einer dringenden bereichsübergreifenden Änderungsanforderung und verhandelt die Priorisierung mit minimalen Auswirkungen auf andere Aktivitäten.",
        "Ein Mitarbeiter beteiligt sich an Konsensdiskussionen zwischen mehreren Teams, äußert eigene Bedenken oder Einwände gegen Vorschläge und verpflichtet sich zur Entscheidung.",
      ],
    },
  },
  {
    value: 9,
    capabilities: {
      en: [
        "provide constructive feedback to peers of other teams.",
        "address tensions across teams.",
        "support peers in their professional growth.",
      ],
      de: [
        "geben konstruktives Feedback an Kollegen anderer Teams.",
        "sprechen Spannungen zwischen Teams an.",
        "unterstützen Kollegen in ihrem beruflichen Wachstum.",
      ],
    },
    examples: {
      en: [
        "A team member is available to colleagues when they need to discuss issues, providing support and motivation to take action and improve the situation.",
        "An employee moderates team operational and governance meetings, ensuring everyone has the space to express themselves and their opinions safely.",
        "A team sponsor guides the team towards self-organization practices and introduces S3.0 patterns.",
      ],
      de: [
        "Ein Teammitglied steht Kollegen zur Verfügung, wenn sie Probleme besprechen müssen, bietet Unterstützung und Motivation, um Maßnahmen zu ergreifen und die Situation zu verbessern.",
        "Ein Mitarbeiter moderiert operative und Governance-Meetings des Teams und stellt sicher, dass jeder den Raum hat, sich und seine Meinungen sicher auszudrücken.",
        "Ein Team-Sponsor führt das Team zu Selbstorganisationspraktiken und führt S3.0-Muster ein.",
      ],
    },
  },
  {
    value: 10,
    capabilities: {
      en: [
        "moderate and negotiate effectively tensions across teams.",
        "ensure smooth collaboration across teams.",
        "facilitate effective decision making across teams.",
        "coach/mentor peers.",
      ],
      de: [
        "moderieren und verhandeln Spannungen effektiv zwischen Teams.",
        "sorgen für eine reibungslose Zusammenarbeit zwischen Teams.",
        "ermöglichen effektive Entscheidungsfindung zwischen Teams.",
        "coachen/mentoren Kollegen.",
      ],
    },
    examples: {
      en: [
        "A PAT member mediates escalations between parties by moderating the discussions. They make everybody feel heard, understood and enable them to work out their differences themselves while ensuring a swift resolution.",
        "A PMO member negotiates between multiple teams and projects to find ideal solutions for DECTRIS and all parties involved.",
      ],
      de: [
        "Ein PAT-Mitglied vermittelt bei Eskalationen zwischen Parteien, indem es die Diskussionen moderiert. Sie sorgen dafür, dass sich jeder gehört und verstanden fühlt und ermöglichen es den Parteien, ihre Differenzen selbst zu klären, während sie eine schnelle Lösung sicherstellen.",
        "Ein PMO-Mitglied verhandelt zwischen mehreren Teams und Projekten, um ideale Lösungen für DECTRIS und alle beteiligten Parteien zu finden.",
      ],
    },
  },
  {
    value: 11,
    capabilities: {
      en: [
        "improve structures and processes to enhance collaboration in the company.",
        "promote initiatives and trainings to enhance collaboration at the company level.",
      ],
      de: [
        "verbessern Strukturen und Prozesse, um die Zusammenarbeit im Unternehmen zu fördern.",
        "fördern Initiativen und Schulungen, um die Zusammenarbeit auf Unternehmensebene zu verbessern.",
      ],
    },
    examples: {
      en: [
        "A trust team member works on an initiative improving appreciation and appraisal mechanisms including multiple topics.",
      ],
      de: [
        "Ein Mitglied des Vertrauenteams arbeitet an einer Initiative zur Verbesserung von Anerkennungs- und Bewertungsmechanismen, die mehrere Themen umfasst.",
      ],
    },
  },
];

const communication = [
  {
    value: 4,
    capabilities: {
      en: [
        "provide status updates about their own work, both verbally and in writing.",
      ],
      de: [
        "geben Statusupdates über ihre eigene Arbeit, sowohl mündlich als auch schriftlich.",
      ],
    },
    examples: {
      en: [
        "An employee who assembles modules participates in daily meetings, communicates the status of own activities, any problems encountered, and requests advice when needed.",
      ],
      de: [
        "Ein Mitarbeiter, der Module montiert, nimmt an täglichen Meetings teil, kommuniziert den Status seiner eigenen Aktivitäten, aufgetretene Probleme und bittet bei Bedarf um Rat.",
      ],
    },
  },
  {
    value: 5,
    capabilities: {
      en: [
        "contribute in team activities and team meetings by providing input within their areas of expertise.",
        "communicate clearly both in discussions and written form.",
      ],
      de: [
        "beteiligen sich an Teamaktivitäten und Teammeetings, indem sie Input in ihren Fachgebieten geben.",
        "kommunizieren klar sowohl in Diskussionen als auch in schriftlicher Form.",
      ],
    },
    examples: {
      en: [
        "An IT service technician responds promptly to support tickets, explaining solutions to users.",
        "An HR assistant informs new employees about the most relevant DECTRIS regulations.",
      ],
      de: [
        "Ein IT-Servicetechniker reagiert umgehend auf Support-Tickets und erklärt den Benutzern die Lösungen.",
        "Ein HR-Assistent informiert neue Mitarbeiter über die wichtigsten DECTRIS-Vorschriften.",
      ],
    },
  },
  {
    value: 6,
    capabilities: {
      en: [
        "provide substantial input and share ideas during discussions.",
        "share their expertise and knowledge on specific subjects.",
        "write reports or summaries on specific subjects or to support decisions.",
      ],
      de: [
        "geben wesentlichen Input und teilen Ideen während Diskussionen.",
        "teilen ihr Fachwissen und Wissen zu spezifischen Themen.",
        "schreiben Berichte oder Zusammenfassungen zu spezifischen Themen oder zur Unterstützung von Entscheidungen.",
      ],
    },
    examples: {
      en: [
        "A purchasing specialist discusses the production needs with the engineers and offers suggestions on how to streamline the procurement process.",
        "An operator, who calibrates modules regularly in the X-box, proposes and discusses in the team an idea of process improvements.",
        "A process owner trains operators on how to use new hardware, and documents the usage and how to solve issues in wiki.",
      ],
      de: [
        "Ein Einkaufsspezialist bespricht die Produktionsbedürfnisse mit den Ingenieuren und bietet Vorschläge zur Optimierung des Beschaffungsprozesses an.",
        "Ein Operator, der regelmäßig Module in der X-Box kalibriert, schlägt im Team eine Idee zur Prozessverbesserung vor und diskutiert diese.",
        "Ein Prozessverantwortlicher schult Operatoren im Umgang mit neuer Hardware und dokumentiert die Nutzung und die Lösung von Problemen im Wiki.",
      ],
    },
  },
  {
    value: 7,
    capabilities: {
      en: [
        "are able to communicate the big picture, the motivation, the reasoning and rationale behind their decisions.",
        "ensure transparency and help others understand why certain choices were made through well-structured written documentation.",
        "organize and conduct meetings according to 'Guideline meetings'.",
      ],
      de: [
        "sind in der Lage, das Gesamtbild, die Motivation, die Begründung und die Gründe hinter ihren Entscheidungen zu kommunizieren.",
        "sorgen für Transparenz und helfen anderen zu verstehen, warum bestimmte Entscheidungen getroffen wurden, durch gut strukturierte schriftliche Dokumentation.",
        "organisieren und führen Meetings gemäß den 'Richtlinien für Meetings' durch.",
      ],
    },
    examples: {
      en: [
        "A field system engineer contributes to the definition of a process. They document the process changes and present them to affected teams.",
        "A project leader of a QT clarifies project direction and decisions to stakeholders and team members.",
        "An R&D scientist, after participating at a conference, reviews the technical highlights and presents during the 'Technology Scouting Meeting' to share information that could be relevant for the company.",
        "An HR specialist informs employees about new HR regulations and regularly updates the onboarding materials.",
        "An IT specialist promptly responds to business-critical system failures, providing timely communication.",
      ],
      de: [
        "Ein Feldsystemingenieur trägt zur Definition eines Prozesses bei. Sie dokumentieren die Prozessänderungen und präsentieren sie den betroffenen Teams.",
        "Ein Projektleiter eines QT klärt die Projektrichtung und Entscheidungen für Stakeholder und Teammitglieder.",
        "Ein F&E-Wissenschaftler überprüft nach der Teilnahme an einer Konferenz die technischen Highlights und präsentiert diese während des 'Technology Scouting Meetings', um Informationen zu teilen, die für das Unternehmen relevant sein könnten.",
        "Ein HR-Spezialist informiert die Mitarbeiter über neue HR-Vorschriften und aktualisiert regelmäßig die Onboarding-Materialien.",
        "Ein IT-Spezialist reagiert umgehend auf geschäftskritische Systemausfälle und sorgt für eine zeitnahe Kommunikation.",
      ],
    },
  },
  {
    value: 8,
    capabilities: {
      en: [
        "are able to describe an organizational driver to respond to a situation.",
        "lead and facilitate group discussions, documenting key points and decisions in writing.",
        "communicate effectively in difficult topics.",
      ],
      de: [
        "sind in der Lage, einen organisatorischen Treiber zu beschreiben, um auf eine Situation zu reagieren.",
        "leiten und moderieren Gruppendiskussionen und dokumentieren wichtige Punkte und Entscheidungen schriftlich.",
        "kommunizieren effektiv bei schwierigen Themen.",
      ],
    },
    examples: {
      en: [
        "A project manager of the EM Market negotiates regularly with internal stakeholders and potential external customers to define the requirements for a new EM detector specification.",
        "A value stream engineer leads cross-team meetings to address production challenges and brainstorm solutions.",
        "A safety officer compiles training materials and conducts internal training sessions.",
      ],
      de: [
        "Ein Projektmanager des EM-Marktes verhandelt regelmäßig mit internen Stakeholdern und potenziellen externen Kunden, um die Anforderungen für eine neue EM-Detektorspezifikation zu definieren.",
        "Ein Wertstromingenieur leitet bereichsübergreifende Meetings, um Produktionsherausforderungen zu bewältigen und Lösungen zu entwickeln.",
        "Ein Sicherheitsbeauftragter erstellt Schulungsmaterialien und führt interne Schulungen durch.",
      ],
    },
  },
  {
    value: 9,
    capabilities: {
      en: [
        "facilitate discussions across different domains.",
        "demonstrate confidence in speaking to broad audiences, whether in training sessions or knowledge-sharing meetings.",
        "demonstrate confidence in writing formal reports, training materials, or knowledge-sharing documentation.",
        "ensure every voice is heard and inputs are correctly understood.",
      ],
      de: [
        "moderieren Diskussionen über verschiedene Bereiche hinweg.",
        "zeigen Selbstvertrauen beim Sprechen vor einem breiten Publikum, sei es in Schulungssitzungen oder Wissensaustausch-Meetings.",
        "zeigen Selbstvertrauen beim Schreiben formeller Berichte, Schulungsmaterialien oder Wissensaustausch-Dokumentationen.",
        "stellen sicher, dass jede Stimme gehört wird und Eingaben korrekt verstanden werden.",
      ],
    },
    examples: {
      en: [
        "An ICT system engineer leads discussions across departments to align IT services.",
        "A product owner who has to replace a production-critical system involves relevant stakeholders (production, sales, and market) in a planning meeting to discuss the impact of the change, the optimal timing, and negotiate for minimal necessary downtime.",
        "A process engineer organizes and moderates a workshop with large group stakeholders to evaluate, discuss and plan the formation of a new team.",
        "A development engineer effectively conveys knowledge and introduces highly complex concepts in an understandable way to a non-technical audience.",
      ],
      de: [
        "Ein ICT-Systemingenieur leitet bereichsübergreifende Diskussionen, um IT-Dienste abzustimmen.",
        "Ein Produktverantwortlicher, der ein produktionskritisches System ersetzen muss, bezieht relevante Stakeholder (Produktion, Vertrieb und Markt) in ein Planungstreffen ein, um die Auswirkungen der Änderung, den optimalen Zeitpunkt und die Verhandlung für die minimal notwendige Ausfallzeit zu besprechen.",
        "Ein Prozessingenieur organisiert und moderiert einen Workshop mit einer großen Gruppe von Stakeholdern, um die Bildung eines neuen Teams zu bewerten, zu diskutieren und zu planen.",
        "Ein Entwicklungsingenieur vermittelt Wissen effektiv und führt hochkomplexe Konzepte auf verständliche Weise einem nicht-technischen Publikum ein.",
      ],
    },
  },
  {
    value: 10,
    capabilities: {
      en: [
        "are highly adaptive and experienced in communicating in various settings.",
        "significantly contribute to improving internal or external communication.",
        "advise peers on communication methodology.",
        "provide a safe space and make people feel at ease.",
        "are experienced in discussing sensitive topics.",
      ],
      de: [
        "sind hoch anpassungsfähig und erfahren in der Kommunikation in verschiedenen Settings.",
        "tragen wesentlich zur Verbesserung der internen oder externen Kommunikation bei.",
        "beraten Kollegen in Kommunikationsmethoden.",
        "schaffen einen sicheren Raum und sorgen dafür, dass sich die Menschen wohl fühlen.",
        "sind erfahren im Umgang mit sensiblen Themen.",
      ],
    },
    examples: {
      en: [
        "An employee prepares and conducts feedback training for the entire company.",
        "A business analyst engages the entire company over multiple channels and multiple formats (stakeholder groups, reviews, Q&As, general meeting presentations, etc.) to accompany the introduction of a new ERP.",
      ],
      de: [
        "Ein Mitarbeiter bereitet ein Feedback-Training für das gesamte Unternehmen vor und führt es durch.",
        "Ein Business Analyst engagiert das gesamte Unternehmen über mehrere Kanäle und Formate (Stakeholder-Gruppen, Reviews, Q&As, allgemeine Meeting-Präsentationen usw.), um die Einführung eines neuen ERP zu begleiten.",
      ],
    },
  },
  {
    value: 11,
    capabilities: {
      en: [
        "improve structures and processes to enhance verbal and written communication in the company.",
        "promote initiatives and trainings to enhance communication at the company level.",
        "are experienced in delivering inspiring communications for the company.",
      ],
      de: [
        "verbessern Strukturen und Prozesse, um die mündliche und schriftliche Kommunikation im Unternehmen zu fördern.",
        "fördern Initiativen und Schulungen, um die Kommunikation auf Unternehmensebene zu verbessern.",
        "sind erfahren darin, inspirierende Kommunikation für das Unternehmen zu liefern.",
      ],
    },
    examples: {
      en: ["no examples"],
      de: ["keine Beispiele"],
    },
  },
];

export default [
  {
    name: { en: "Ownership", de: "Ownership" },
    id: "ownership",
    description: {
      en: "The dimension 'Ownership' measures the level of full responsibility for something, as if it belongs to you. It implies accountability for outcomes, decision-making capability and authority, and personal commitment to success. Each level represents increasing self-responsibility in performing tasks and making decisions in their domain. A person taking ownership is expected to take accountability and show personal investment. Owners are fully responsible for their actions, decisions, and their consequences.",
      de: "Die Dimension „Ownership“ misst den Grad der Verantwortung für etwas, so als ob es einem selbst gehören würde. Sie impliziert Verantwortlichkeit für Ergebnisse, Entscheidungsfähigkeit und -befugnis sowie persönliches Engagement für den Erfolg. Jede Stufe steht für eine zunehmende Selbstverantwortung bei der Ausführung von Aufgaben und der Entscheidungsfindung in einer Domain. Von einer Person, die Verantwortung übernimmt, wird erwartet, dass sie Rechenschaft ablegt und persönliches Engagement zeigt. Ein 'Owner' ist für die Handlungen, Entscheidungen und deren Folgen voll verantwortlich.",
    },
    impact: {
      en: "Mastering ownership positively impacts DECTRIS by accelerating decisions and fostering commitment to results. Employees that take ownership contribute more significantly to the company’s success by bringing in ideas, novel approaches and proactively driving solutions. Furthermore, we expect that the level of creativity and innovation in the solutions will increase with ownership.",
      de: "Mastery in 'Ownership' wirkt sich positiv auf DECTRIS aus, indem sie Entscheidungen beschleunigt und das Engagement für Ergebnisse fördert. Mitarbeiter, die Verantwortung übernehmen, tragen mehr zum Erfolg des Unternehmens bei, indem sie Ideen und neue Ansätze einbringen und proaktiv Lösungen vorantreiben. Darüber hinaus erwarten wir, dass der Grad an Kreativität und Innovation in den Lösungen mit der Eigenverantwortung steigt.",
    },
    levels: ownership,
  },
  {
    name: { en: "Subject Matter Expertise", de: "Fachkenntnisse" },
    id: "subject_matter_expertise",
    description: {
      en: "The dimension 'Subject Matter Expertise' measures an individual's level of acumen and authority in a specific domain. Each level represents an increasing degree of knowledge, specialization, and proficiency impacting how efficient and effective they address challenges within their domains and its interfaces. A subject matter expert is expected to become a master at their craftsmanship and promote excellency within their disciplines. People focusing on Subject Matter Expertise wish to deepen their domain knowledge and become authorities in their fields.",
      de: "Die Dimension 'Fachkenntnisse' misst den Grad des Fachwissens und der Kompetenz einer Person in einem bestimmten Bereich. Jede Stufe steht für einen zunehmenden Grad an Wissen, Spezialisierung und Kompetenz, der sich darauf auswirkt, wie effizient und effektiv sie Herausforderungen in ihren Bereichen und deren Schnittstellen angehen. Von einem Fachexperten wird erwartet, dass er sein Handwerk meisterhaft beherrscht und in seinem Fachgebiet herausragende Leistungen erbringt. Menschen, die sich auf Fachwissen konzentrieren, wollen ihr Fachwissen vertiefen und zu Autoritäten auf ihrem Gebiet werden.",
    },
    impact: {
      en: "DECTRIS delivers high-tech detectors and wants to further expand its offering to more comprehensive detection and analytics solutions. Inherently, this requires a deep understanding of physics, various engineering disciplines and product development. Just as important are professionals in product management, marketing, administration, human resources, and sales. DECTRIS depends on having subject matter experts that excel in their field/domain.",
      de: "DECTRIS liefert Hightech-Detektoren und möchte sein Angebot auf umfassendere Detektions- und Analyselösungen ausweiten. Dies erfordert ein tiefes Verständnis der Physik, verschiedener technischer Disziplinen und der Produktentwicklung. Genauso wichtig sind Fachleute in den Bereichen Produktmanagement, Marketing, Verwaltung, Personalwesen und Vertrieb. DECTRIS ist darauf angewiesen, Fachleute zu haben, die in ihrem Bereich herausragend sind.",
    },
    levels: sme,
  },
  {
    name: { en: "Leadership", de: "Leadership" },
    id: "leadership",
    description: {
      en: "The dimension 'Leadership' measures the scope of influence and accountability toward achieving a common goal within the organization. Each level represents a progression from managing specific topics to broader, company-wide responsibilities, with increasing complexity and impact. This path is designed for individuals who aspire to coordinate, lead by example, inspire others to work together toward shared objectives and eventually take on company-wide or global responsibility.",
      de: "Die Dimension 'Führung' misst den Umfang des Einflusses und der Verantwortlichkeit für die Erreichung eines gemeinsamen Ziels innerhalb der Organisation. Jede Stufe stellt eine Entwicklung von der Verwaltung spezifischer Themen hin zu umfassenderen, unternehmensweiten Verantwortlichkeiten mit zunehmender Komplexität und Wirkung dar. Dieser Weg ist für Personen gedacht, die danach streben, zu koordinieren, mit gutem Beispiel voranzugehen, andere zur Zusammenarbeit für gemeinsame Ziele zu inspirieren und schliesslich unternehmensweite oder globale Verantwortung zu übernehmen.",
    },
    impact: {
      en: "Taking on leadership responsibilities is essential for organizational growth and to achieve operational excellence, innovation, and business success, DECTRIS needs individuals who cultivate their leadership skills to drive strategic initiatives, act on improvements, and ensure alignment and smooth operations across the organization.",
      de: "Die Übernahme von Führungsverantwortung ist für das Unternehmenswachstum von entscheidender Bedeutung. Um operative Spitzenleistungen, Innovationen und geschäftlichen Erfolg zu erreichen, benötigt DECTRIS Personen, die ihre Führungsqualitäten kultivieren, um strategische Initiativen voranzutreiben, Verbesserungen umzusetzen und die Abstimmung und den reibungslosen Ablauf im gesamten Unternehmen zu gewährleisten.",
    },
    levels: leadership,
  },
  {
    name: { en: "Collaboration", de: "Zusammenarbeit" },
    id: "collaboration",
    description: {
      en: "The 'Collaboration' dimension measures the ability to work effectively with others and to foster a positive, trust-based working environment. Each level represents an increasing degree of collaborative effort, impacting team performance, team cohesion, connections with other teams, and promoting a positive environment at larger scale. A collaborative person is expected to work constructively with others, support one another through a feedback culture, openly discuss tensions, and strive the resolve them.",
      de: "Die Dimension 'Zusammenarbeit' misst die Fähigkeit, effektiv mit anderen zusammenzuarbeiten und ein positives, vertrauensbasiertes Arbeitsumfeld zu fördern. Jede Stufe steht für einen zunehmenden Grad an Zusammenarbeit, der sich auf die Teamleistung, den Teamzusammenhalt, die Verbindungen zu anderen Teams und die Förderung eines positiven Umfelds auf breiter Ebene auswirkt. Von einer kollaborativen Person wird erwartet, dass sie konstruktiv mit anderen zusammenarbeitet, sich gegenseitig durch eine Feedback-Kultur unterstützt, Spannungen offen diskutiert und sich um deren Lösung bemüht.",
    },
    impact: {
      en: "Employees working collaboratively, positively impact DECTRIS by boosting problem-solving and fostering innovation and creativity. We believe that a collective approach helps reduce risks, ensures that diverse perspectives are integrated into decision-making processes, and enables quicker solutions to new challenges. Furthermore, we value employees who demonstrate a strong cooperative and supportive spirit and leverage others' strengths.",
      de: "Die Zusammenarbeit der Mitarbeiter wirkt sich positiv auf DECTRIS aus, da sie die Problemlösung verbessert und Innovation und Kreativität fördert. Wir sind davon überzeugt, dass ein kollektiver Ansatz dazu beiträgt, Risiken zu reduzieren, unterschiedliche Perspektiven in Entscheidungsprozesse zu integrieren und schnellere Lösungen für neue Herausforderungen zu ermöglichen. Ausserdem schätzen wir Mitarbeiter, die einen starken kooperativen und unterstützenden Geist zeigen und die Stärken anderer nutzen.",
    },
    levels: collaboration,
  },
  {
    name: { en: "Communication", de: "Kommunikation" },
    id: "communication",
    description: {
      en: "The dimension 'Communication' measures the ability to convey information clearly, transparently, and to listen actively.  Each level reflects an increasing degree of communication skills and their impact on the team and the organization. A communicative person actively participates in discussions, adapts their commucation to the audience, openly shares knowledge, seeks input from others and builds connections.",
      de: "Die Dimension 'Kommunikation' misst die Fähigkeit, Informationen klar und transparent zu vermitteln und aktiv zuzuhören. Jede Stufe spiegelt einen zunehmenden Grad an Kommunikationsfähigkeiten und deren Auswirkungen auf das Team und die Organisation wider. Eine kommunikative Person nimmt aktiv an Diskussionen teil, passt ihre Kommunikation an das Publikum an, teilt offen Wissen, sucht den Input von anderen und baut Verbindungen auf.",
    },
    impact: {
      en: "Effective internal communication is crucial for ensuring clarity, flow of information, mutual understanding, and alignment within a team and in the company. Communicators document information and make it available for now and the future. The ability to convey essential information, organize constructive and productive discussions across domains, and facilitate group interactions leads to better decision-making, collective understanding and overall better outcomes.",
      de: "Eine wirksame interne Kommunikation ist entscheidend für Klarheit, Informationsfluss, gegenseitiges Verständnis und Abstimmung innerhalb eines Teams und des Unternehmens. Kommunikatoren dokumentieren Informationen und machen sie für jetzt und die Zukunft verfügbar. Die Fähigkeit, wichtige Informationen zu vermitteln, konstruktive und produktive Diskussionen über verschiedene Bereiche hinweg zu organisieren und Gruppeninteraktionen zu erleichtern, führt zu einer besseren Entscheidungsfindung, kollektivem Verständnis und insgesamt besseren Ergebnissen.",
    },
    levels: communication,
  },
];
