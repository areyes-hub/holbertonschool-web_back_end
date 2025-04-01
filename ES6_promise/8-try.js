export default function divideFunction(numerator, denominator) {
  return Promise.try(numerator / denominator)
    .then((result) => console.log(result))
    .catch(() => {
      throw new Error('cannot divide by 0');
    });
}
