export async function _fetch(url) {
  try {
    let response = await fetch(url);
    let promise = await response.json();
    return promise;
  } catch (error) {
    console.error(error);
  }
}
