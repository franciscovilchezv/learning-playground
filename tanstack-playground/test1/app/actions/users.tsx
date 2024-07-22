export async function getUsers() {
  // console.log("getUsers");
  // return Promise.resolve(["Hello", "Hello2"]);
  const res = await fetch('https://get.geojs.io/v1/ip/country.json')
  return await res.json();
}
