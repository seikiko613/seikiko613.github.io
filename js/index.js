//標題半透明效果
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").style.opacity = "0.7";
  } else {
    document.getElementById("header").style.opacity = "1";
      
  }
}

$(".tittle_link").hide();