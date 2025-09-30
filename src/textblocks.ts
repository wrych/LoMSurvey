export const level_of_mastery = {
  en: "Level of Mastery",
  de: "Level of Mastery",
};

export const description = {
  en: "Description",
  de: "Beschreibung",
};

export const impact = {
  en: "Impact on DECTRIS",
  de: "Auswirkung auf DECTRIS",
};

export const level_selection = {
  en: "Level Selection",
  de: "Level Auswahl",
};

export const examples = {
  en: "examples",
  de: "Beispiele",
};

export const level = {
  en: "level",
  de: "Level",
};

export const employees = {
  en: "employees",
  de: "Mitarbeiter",
};

export const messageOfTheDay = {
  en: `The ${level_of_mastery.en} table has recently been <a href="https://gitlab.k8s.dectris.io/andy.moesch/lomlevels/-/tags">updated</a>.`,
  de: `The ${level_of_mastery.de} wurde <a href="https://gitlab.k8s.dectris.io/andy.moesch/lomlevels/-/tags">aktualisiert</a>.`,
};

export type languageIndicies = "en" | "de";

export const capitalitzeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
