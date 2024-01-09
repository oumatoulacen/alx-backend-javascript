export default function cleanSet(set, startString) {
  if (startString === '' || !startString) return '';
  const arr = Array.from(set);
  return arr.filter((el) => (el.startsWith(startString))).map((el) => el.slice(startString.length)).join('-');
}
