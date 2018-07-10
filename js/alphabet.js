const BASE_URL = `http://localhost:3000/api`;
const IMAGE_DIR = `/images/background`;

const headers = new Headers({
  Accept: "application/json",
  "Content-Type": "application/json"
});

const myInit = {
  method: "GET",
  headers: headers,
  cache: "default",
  mode: "cors"
};

export const setBackgroundImage = letter => {
  const url = `${BASE_URL}/bg?key=${letter}`;
  const request = new Request(url, myInit);
  fetch(request)
    .then(response => {
      if (response.ok) return response.json();
      else throw Error;
    })
    .then(result => {
      const poster = result.length > 0 ? result.pop().value : "apricot";
      return poster;
    })
    .then(poster => {
      const bgURL = `url(${IMAGE_DIR}/${poster}.jpg)`; // css way
      document.body.querySelector("header").style.backgroundImage = bgURL;
    })
    .catch(e => {
      document.body.style.background = `color`;
    });
};
