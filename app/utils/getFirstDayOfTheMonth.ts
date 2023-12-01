export function getFirstDayOfTheMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}