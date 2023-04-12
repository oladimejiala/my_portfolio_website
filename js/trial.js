// This is a readmore and read less button function
function myFunction(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline" ;
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    }else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}


function myFunction1(){
    var dots1 = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
    if (dots.style.display === "none") {
        dots.style.display = "inline" ;
        btnText.innerHTML = "Read more1";
        moreText.style.display = "none";
    }else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction2(){
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
    if (dots.style.display === "none") {
        dots.style.display = "inline" ;
        btnText.innerHTML = "Read more2";
        moreText.style.display = "none";
    }else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function myFunction3(){
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
    if (dots.style.display === "none") {
        dots.style.display = "inline" ;
        btnText.innerHTML = "Read more2";
        moreText.style.display = "none";
    }else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

// get the search input and search button elements
const searchInput = document.getElementById('searchbox-input');
const searchBtn = document.getElementById('searchbox button');

// add click event listener to the search button
searchBtn.addEventListener('click', () => {
  // get the search query from the input element
  const query = searchInput.value;

  // check if the query is not empty
  if (query.trim() !== '') {
    // construct the search URL
    const searchUrl = `amtechbj.html${encodeURIComponent(query)}`;

    // redirect the user to the search URL
    window.location.href = searchUrl;
  }
});



