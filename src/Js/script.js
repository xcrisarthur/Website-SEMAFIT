window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("logo").className = "w-12";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.color = "black";

  } else {
    document.getElementById("logo").className = "w-16";
    document.getElementById("navbar").style.backgroundColor = "white";
    document.getElementById("navbar").style.color = "black";

  }
}


