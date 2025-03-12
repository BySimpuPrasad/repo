let coming_soon_box = document.querySelector("#coming_soon");
let menuBox = document.querySelector("#menu_box");
let dataBox = document.getElementsByClassName('dataBox');
let totalMovies = document.getElementsByClassName('totalMovies');

let coming_soon_length = coming_soon_box.children.length;

function loadRandomImage() {
  checkTotalMovies();
  setTimeout(() => {
    let random = Math.floor(Math.random() * (coming_soon_length - 1) + 1);
    console.log(random);
    coming_soon_box.children[random].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }, 800);
}

function toggleMenuBox(e) {
  e.classList.toggle('on');
  menuBox.classList.toggle('show');
}

function checkTotalMovies(){
  let numberz = dataBox.length;
  totalMovies[0].innerHTML = `<i class="fa fa-bar-chart"></i>&nbsp;total movies ${numberz}`;
}