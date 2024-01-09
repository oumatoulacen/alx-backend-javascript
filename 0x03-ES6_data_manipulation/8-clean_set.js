export default function cleanSet(set, startString) {
  let res = '';
  if (!startString || !startString.length) return res;
  for (const el of set) { if (el && el.startsWith(startString)) res += `${el.slice(startString.length)}-`; }
  return res.slice(0, res.length - 1);
}
// export default function cleanSet(set, startString) {
//   let res = '';
//   if (startString === '' || !startString) return res;
//   const arr = Array.from(set).filter((el) => (el.startsWith(startString)));
//   for (const el of arr) {
//     if (el.startsWith(startString) && el.length > startString.length) {
//       res += `${el.slice(startString.length)}-`;
//     }
//   }
//   return res.slice(0, -1);
// }
