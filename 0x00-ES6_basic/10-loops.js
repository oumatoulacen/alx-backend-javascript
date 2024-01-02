export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  for (const value of array) {
    // eslint-disable-next-line no-plusplus, no-param-reassign
    array[i++] = appendString + value;
  }

  return array;
}
