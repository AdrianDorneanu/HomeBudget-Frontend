export function isObjectEmpty(object: any): boolean {
  return object && Object.keys(object).length === 0;
}
