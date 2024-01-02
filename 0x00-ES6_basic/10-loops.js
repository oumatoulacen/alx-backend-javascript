export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const value of array) {
    // eslint-disable-next-line no-plusplus, no-param-reassign
    array[i++] = appendString + value;
  }

  return array;
}

// export default function appendToEachArrayValue(array, appendString) {
//   for (const [index, value] of array.entries()) {
//     // eslint-disable-next-line no-param-reassign
//     array[index] = appendString + value;
//   }

//   return array;
// }
