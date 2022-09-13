"use strict";

// toggle menu buttun
var btn = document.getElementById("icon"),
  btn2 = document.getElementById("list");

btn.onclick = function () {
  if (btn2.style.display === "none") {
    btn2.style.display = "block";
  } else {
    btn2.style.display = "none";
  }
};

// chanage background section
var hd = document.getElementById("header");
// first video
var bShow = document.getElementById("bk"),
  go = document.getElementById("go");

bShow.onmouseover = function () {
  if ((go.style.display = "none")) {
    go.style.display = "block";
  }
};

bShow.onmouseout = function () {
  if ((go.style.display = "block")) {
    go.style.display = "none";
  }
};

// scond video
var bShow1 = document.getElementById("bk1"),
  go1 = document.getElementById("go1");

bShow1.onmouseover = function () {
  if ((go1.style.display = "none")) {
    go1.style.display = "block";
    go1.style.height = hd.style.height;
  }
};

bShow1.onmouseout = function () {
  if ((go1.style.display = "block")) {
    go1.style.display = "none";
  }
};

// third video
var bShow2 = document.getElementById("bk2"),
  go2 = document.getElementById("go2");

bShow2.onmouseover = function () {
  if ((go2.style.display = "none")) {
    go2.style.display = "block";
  }
};

bShow2.onmouseout = function () {
  if ((go2.style.display = "block")) {
    go2.style.display = "none";
  }
};

// start about section

AOS.init({
  offset: 500,
  duration: 1000,
});

// go to top buttun

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

