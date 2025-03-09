function fetchAndGet() {
  let pAPI = fetch("./ytData/data.json");
  pAPI.then((value) => {
    return value.json();
  }).then((value) => {
    dataAPI = value.passwords[0];
  });
}