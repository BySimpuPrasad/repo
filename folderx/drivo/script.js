function reDir() {
  let val = document.getElementById("searchIt");
  window.location.href = "https://www.google.com/search?q= " + val.value + " site:drive.google.com";
}