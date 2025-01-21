function checkifpass(button) {
  const movieData = button.closest('.movieData');
  const orgetbtn = movieData.querySelector('.orgetLink');
  const passwordInput = movieData.querySelector('.passfield input');
  const contOutput = movieData.querySelector('.contOutput');
  const orText = movieData.querySelector('.orText');
  const enteredPassword = passwordInput.value;
  const correctPassword = button.value;

  if (enteredPassword === correctPassword) {
    contOutput.classList.add('unlock');
    orText.innerHTML = "or";
    orText.style.color = "";
  } else {
    orText.innerHTML = "Wrong Password! Watch Video!";
    orText.style.color = "gold";
    orText.style.padding = "5px 0px";
    orgetbtn.classList.add('if_wrong');
  }
}

function FetchBata(e) {
  let searchQuery = e.value.toLowerCase(); // Get the search query and convert to lowercase
  let items = document.querySelectorAll('.movieData .movieHeading .moNam'); // Get all list items

  items.forEach(function(item) {
    let itemName = item.textContent.toLowerCase(); // Get the text content of each item and convert to lowercase

    // Show or hide the item based on whether it matches the search query
    if (itemName.includes(searchQuery)) {
      item.parentElement.parentElement.style.display = ''; // Show the item
    } else {
      item.parentElement.parentElement.style.display = 'none'; // Hide the item
    }
  });
}

function share47539(e) {
  e.classList.add('shared');
  setTimeout(() => { e.classList.remove('shared'); }, 5000);
}

function copyShareUrl(e) {
  let closestMovieData = e.closest('.movieData');
  const url = `https://bysimpuprasad.github.io/repo/youtubex/ytindex.html#${closestMovieData.id}`;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => {
        console.log("URL copied to clipboard!");
        share47539(e);
      })
      .catch(() => {
        console.log("Failed to copy URL. Please try again.");
      });
  } else {
    const textArea = document.createElement("textarea");
    textArea.value = url;
    textArea.style.position = "fixed";
    textArea.style.opacity = 0;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        console.log("URL copied to clipboard!");
      } else {
        throw new Error();
      }
    } catch {
      console.log("Failed to copy URL. Please try again.");
    } finally {
      document.body.removeChild(textArea);
    }
  }
}

function shareThePage(e) {
  let xyz = window.location;
  switch (e) {
    case 'whatsapp':
      window.location.href = `https://wa.me/?text=${xyz}`
      break;
    case 'facebook':
      window.location.href = `https://www.facebook.com/sharer/sharer.php?u=${xyz}&quote=YOUR_TEXT`;
      break;
    case 'insta':
      window.location.href = `https://www.instagram.com/`;
      break;
    case 'telegram':
      window.location.href = `https://t.me/share/url?url=${xyz}&text=YOUR_TEXT`;
      break;
    case 'copy':
      const newCopyWindow = window.open("", "_blank");
      newCopyWindow.document.write(`<h1>Copy URL: </h1><br/><h2 style='color:deepskyblue;'>${xyz}</h2>`);
      break;
    default:
  }
}

function OneLike(e) {
  let movieDataElem = document.querySelectorAll('.movieData');
  let MN = movieDataElem.length;
  let exactelem = movieDataElem[MN - 1];
  let orgetLink = exactelem.querySelector('.orgetLink').href;
  window.open(orgetLink, "_blank");
  
  setTimeout(()=>{ 
    e.innerHTML = `<i class="fa fa-heart"></i>`;
  },2000);
}

function fetchAndGet(e){
  let p = fetch("./ytData/data.json");
    
    p.then((value)=>{
    	return value.json();
    }).then((value)=>{
    	e.innerHTML = (`<pre>${JSON.stringify(value.students[0],1,1)}</pre>`);
    });
}