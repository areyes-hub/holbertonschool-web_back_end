export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8View = new Int8Array(buffer);
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  int8View[position] = value;
  const dataView = new DataView(buffer);

  return dataView;
}
