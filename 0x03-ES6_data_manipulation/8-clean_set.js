export default function cleanSet(set, str) {
  const arr = Array.from(set);
  arr.filter((el) => (el.startsWith(str)));
  return arr.map((el) => el.slice(str.length)).join('-');
}
