// GETTING ELEMENTS
let link_list = document.getElementById('link_list');
let settingBar = document.querySelector('.settingBar');



//Adding new links
function addLinks() {
  let product;
  let name = prompt('site name:');
  let url = prompt('site url');
  if (url === null || name === null || url === "" || name === "") {
    return;
  }
  product = `<span href=""><a href="${url}">${name}</a><i class="fa fa-close" onclick="this.parentElement.remove();"></i></span>`;
  link_list.innerHTML += product;
}
//Showing Setting Bar
function showSetting(){
  settingBar.classList.toggle('show');
}