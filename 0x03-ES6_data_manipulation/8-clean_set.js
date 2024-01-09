export default function cleanSet(set, str) {
  if (str === '' || !str) return '';
  const arr = Array.from(set);
  return arr.filter((el) => (el.startsWith(str))).map((el) => el.slice(str.length)).join('-');
}
