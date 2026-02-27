/**
 * German Naturalisation Eligibility Requirements
 * Source: https://www.einbuergerung.de/fragebogen.php?l=en
 * Federal Government Commissioner for Migration, Refugees and Integration
 */

export const REQUIREMENTS = [
  {
    id: "residency",
    icon: "🏠",
    title: "Residency",
    titleDe: "Aufenthalt",
    requirement: "You have been living habitually and legally in Germany for five years.",
    requirementDe: "Sie leben seit fünf Jahren gewöhnlich und rechtmäßig in Deutschland.",
    checkQuestion: "Have you been living in Germany for at least 5 years?",
    details: "Continuous legal residency. Periods of short absence (e.g. holidays) generally do not interrupt the count.",
  },
  {
    id: "identity",
    icon: "🪪",
    title: "Identity & Citizenship",
    titleDe: "Identität & Staatsangehörigkeit",
    requirement: "You can prove your identity and current citizenship.",
    requirementDe: "Sie können Ihre Identität und Ihre aktuelle Staatsangehörigkeit nachweisen.",
    checkQuestion: "Can you prove your identity and current citizenship (e.g. valid passport)?",
    details: "A valid passport or national ID from your country of origin is typically required.",
  },
  {
    id: "residence-permit",
    icon: "📄",
    title: "Right of Residence",
    titleDe: "Aufenthaltsrecht",
    requirement: "You have a permanent right of residence or a long-term residence permit.",
    requirementDe: "Sie haben ein unbefristetes Aufenthaltsrecht oder eine langfristige Aufenthaltserlaubnis.",
    checkQuestion: "Do you hold a permanent residence permit (Niederlassungserlaubnis) or long-term residence permit?",
    details: "A Niederlassungserlaubnis, Erlaubnis zum Daueraufenthalt-EU, or certain other permits qualify.",
  },
  {
    id: "financial",
    icon: "💰",
    title: "Financial Self-Sufficiency",
    titleDe: "Lebensunterhalt",
    requirement: "You can financially support yourself and your dependent family members, including your spouse and children.",
    requirementDe: "Sie können den Lebensunterhalt für sich und Ihre unterhaltsberechtigten Familienangehörigen bestreiten.",
    checkQuestion: "Can you support yourself and your family without social welfare benefits (Bürgergeld)?",
    details: "You must not rely on Bürgergeld (social welfare) or Sozialhilfe. Income from employment, self-employment, pension, or other means counts.",
  },
  {
    id: "german-language",
    icon: "🗣️",
    title: "German Language (B1)",
    titleDe: "Deutschkenntnisse (B1)",
    requirement: "You have sufficient knowledge of German, at least at level B1 of the Common European Framework of Reference for Languages (CEFR).",
    requirementDe: "Sie verfügen über ausreichende Kenntnisse der deutschen Sprache, mindestens auf dem Niveau B1 des Gemeinsamen Europäischen Referenzrahmens (GER).",
    checkQuestion: "Do you have a B1 German certificate (or higher), or equivalent proof?",
    details: "Proof: Zertifikat Deutsch / telc B1 / Goethe B1 certificate, or 4+ years of German school education, or a German university degree.",
  },
  {
    id: "civic-knowledge",
    icon: "📚",
    title: "Civic Knowledge",
    titleDe: "Kenntnisse der Rechts- und Gesellschaftsordnung",
    requirement: "You have sufficient knowledge of the legal system, society and way of life in Germany.",
    requirementDe: "Sie verfügen über Kenntnisse der Rechts- und Gesellschaftsordnung und der Lebensverhältnisse in Deutschland.",
    checkQuestion: "Have you passed the Einbürgerungstest (citizenship test) or equivalent?",
    details: "Pass the 33-question Einbürgerungstest (17/33 to pass), or hold a German school-leaving certificate, or completed equivalent studies.",
  },
  {
    id: "democratic-commitment",
    icon: "⚖️",
    title: "Democratic Commitment",
    titleDe: "Bekenntnis zur freiheitlichen demokratischen Grundordnung",
    requirement: "You declare your commitment to the free and democratic basic order of the Federal Republic of Germany.",
    requirementDe: "Sie bekennen sich zur freiheitlichen demokratischen Grundordnung des Grundgesetzes der Bundesrepublik Deutschland.",
    checkQuestion: "Are you prepared to declare your commitment to Germany's democratic constitution?",
    details: "A formal written declaration is signed during the naturalisation ceremony.",
  },
  {
    id: "historical-responsibility",
    icon: "🕊️",
    title: "Historical Responsibility",
    titleDe: "Historische Verantwortung",
    requirement: "You declare your commitment to Germany's special historical responsibility for the National Socialist regime and its consequences — in particular for the protection of Jewish life — and to the peaceful coexistence of peoples and the prohibition on waging a war of aggression.",
    requirementDe: "Sie bekennen sich zu der besonderen historischen Verantwortung Deutschlands für die nationalsozialistische Gewaltherrschaft und ihre Folgen — insbesondere für den Schutz jüdischen Lebens — sowie zum friedlichen Zusammenleben der Völker und dem Verbot der Führung eines Angriffskrieges.",
    checkQuestion: "Are you prepared to acknowledge Germany's historical responsibility?",
    details: "This declaration is part of the naturalisation ceremony.",
  },
  {
    id: "no-criminal-record",
    icon: "✅",
    title: "No Criminal Record",
    titleDe: "Keine Vorstrafen",
    requirement: "You have not been convicted of a criminal offence.",
    requirementDe: "Sie sind nicht wegen einer Straftat verurteilt worden.",
    checkQuestion: "Are you free of criminal convictions?",
    details: "Minor fines (up to 90 daily rates) or suspended sentences under 6 months may be disregarded in certain cases. The authorities check this automatically.",
  },
  {
    id: "no-exclusion",
    icon: "🚫",
    title: "No Grounds for Exclusion",
    titleDe: "Keine Ausschlussgründe",
    requirement: "There are no other reasons that might make you ineligible for naturalisation (grounds for exclusion).",
    requirementDe: "Es liegen keine Ausschlussgründe vor.",
    checkQuestion: "Are you free of any grounds for exclusion (see details)?",
    details: "Exclusion grounds include: pursuing anti-democratic activities, polygamous marriage, or disrespecting equal rights between men and women.",
  },
];

export const EXCLUSION_GROUNDS = [
  "Pursuing or supporting efforts directed against Germany's free and democratic basic order or constitutional violations.",
  "Previously holding anti-constitutional beliefs (unless credibly renounced to the relevant authorities).",
  "Disrespecting the equal rights of men and women as enshrined in the Basic Law.",
  "Practising polygamy or being married to someone who practises polygamy.",
];

export const DISCRETIONARY_NOTES = {
  summary: "Naturalisation may be granted at the authority's discretion even if not all standard requirements are fully met.",
  mandatoryEvenForDiscretionary: [
    "Five-year residency (exceptions for academics, researchers, stateless persons)",
    "Suitable accommodation",
    "Financial self-sufficiency",
    "German language at B1 level",
    "Knowledge of German law and society",
    "Commitment to democratic order and historical responsibility",
    "No criminal conviction",
  ],
};

export const QUICK_CHECK_URL = "https://www.einbuergerung.de/schnellcheck";

export const SOURCE_URL = "https://www.einbuergerung.de/fragebogen.php?l=en";
export const SOURCE_LABEL = "Federal Government Commissioner for Migration, Refugees and Integration";
