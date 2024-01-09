export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  if (position < 0 || position > buffer.byteLength) {
    throw new Error('Position outside range');
  }
  const array = new Int8Array(buffer);
  array[position] = value;
  return new DataView(buffer);
}
