//標題半透明效果
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("header").style.opacity = "0.7";
      document.getElementsByClassName("content_sticker").style.display = "block";
  } else {
    document.getElementById("header").style.opacity = "1";
      document.getElementsByClassName("content_sticker").style.display = "none";
  }
}

//滑鼠移到時觸發

function StickerScroll() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementsByClassName("content_sticker").style.display = "block";
  } else {
    document.getElementsByClassName("content_sticker").style.display = "none";
      
  }
}

