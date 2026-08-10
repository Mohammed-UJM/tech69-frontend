const FRENCH_HOLIDAYS = [
  "01-01", // Jour de l'an
  "05-01", // Fête du Travail
  "05-08", // Victoire 1945
  "07-14", // Fête nationale
  "08-15", // Assomption
  "11-01", // Toussaint
  "11-11", // Armistice
  "12-25", // Noël
];

function getEasterSunday(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;

  return new Date(year, month - 1, day);
}

function formatDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function getFrenchHolidays(year: number): Set<string> {
  const holidays = new Set<string>();

  for (const holiday of FRENCH_HOLIDAYS) {
    holidays.add(`${year}-${holiday}`);
  }

  const easter = getEasterSunday(year);

  // Lundi de Pâques
  const easterMonday = new Date(easter);
  easterMonday.setDate(easterMonday.getDate() + 1);
  holidays.add(formatDateKey(easterMonday));

  // Ascension
  const ascension = new Date(easter);
  ascension.setDate(ascension.getDate() + 39);
  holidays.add(formatDateKey(ascension));

  // Lundi de Pentecôte
  const whitMonday = new Date(easter);
  whitMonday.setDate(whitMonday.getDate() + 50);
  holidays.add(formatDateKey(whitMonday));

  return holidays;
}

export function isWorkingDay(date: Date): boolean {
  const day = date.getDay();

  // Samedi / dimanche
  if (day === 0 || day === 6) {
    return false;
  }

  const holidays = getFrenchHolidays(date.getFullYear());

  return !holidays.has(formatDateKey(date));
}

export function getNextWorkingDays(count: number): Date[] {
  const result: Date[] = [];
  const current = new Date();

  while (result.length < count) {
    current.setDate(current.getDate() + 1);

    if (isWorkingDay(current)) {
      result.push(new Date(current));
    }
  }

  return result;
}

export function formatAppointmentDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatDateInput(date: Date): string {
  return formatDateKey(date);
}
