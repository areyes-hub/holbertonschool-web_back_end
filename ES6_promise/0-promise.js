export default function getResponseFromAPI() {
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Done');
    }, 100);
  });
  return myPromise;
}
