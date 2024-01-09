export default function cleanSet(set, str) {
  const arr = [];
  if (str !== '' && str) set.forEach((el) => (el.startsWith(str) ? arr.push(el) : el));
  return arr.map((el) => el.slice(str.length)).join('-');
}
