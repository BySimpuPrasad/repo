function fetchAndGet() {
  fetch('https://bysimpuprasad.github.io/repo/fetchData/fetch.json')
    .then(response => response.json())
    .then(data => {
      const func = new Function('data', data.step1);
      console.log(func(data));
    });
}

//fetchAndGet();