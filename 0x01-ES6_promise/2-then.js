export default function handleResponseFromAPI(promise) {
  promise
    // eslint-disable-next-line no-unused-vars
    .then((_result) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    // eslint-disable-next-line no-unused-vars
    .catch((_error) => {
      console.log('Got a response from the API');
      return new Error();
    });
}
