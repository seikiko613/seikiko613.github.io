var momo = "" ;
var chicken = "" ;
var newyear = "" ;
window.onload = function sticker(){
    //默默兔和野生雞哥
    for(var i = 1; i <= 40 ; i++){
        if(i>=10){
            momo = momo +'<div class="momo"><img src="momorabbit/' + i + '.png"></div>';
            chicken = chicken + '<div class="chicken"><img src="wildchicken/' + i + '.png"></div>'
        }else{
            momo = momo +'<div class="momo"><img src="momorabbit/0' + i + '.png"></div>';
            chicken = chicken +'<div class="chicken"><img src="wildchicken/0' + i + '.png"></div>';
        }
    }
    //鼠你新年
    for(var i = 1; i <= 16 ; i++){
        if(i >= 10){
            newyear = newyear +'<div class="newyear"><img src="2020newyear/' + i + '.png"></div>';
        }else{
            newyear = newyear +'<div class="newyear"><img src="2020newyear/0' + i + '.png"></div>';
        }
    }
    
    document.getElementById("sticker_momo").innerHTML= momo ;
    document.getElementById("sticker_chicken").innerHTML = chicken ;
    
    document.getElementById("sticker_newyear").innerHTML = newyear ;
}

//選擇顯示的貼圖
//展示默默兔貼圖
function show_momo(){
    document.getElementById("sticker_momo").style.display = "flex" ;
    document.getElementById("sticker_chicken").style.display = "none" ;
    document.getElementById("sticker_newyear").style.display = "none" ;
    
}
//展示野生雞哥貼圖
function show_chicken(){
    document.getElementById("sticker_momo").style.display = "none" ;
    document.getElementById("sticker_chicken").style.display = "flex" ;
    document.getElementById("sticker_newyear").style.display = "none" ;
    
}
//展示鼠你新年貼圖
function show_newyear(){
    document.getElementById("sticker_momo").style.display = "none" ;
    document.getElementById("sticker_chicken").style.display = "none" ;
    document.getElementById("sticker_newyear").style.display = "flex" ;
    
}