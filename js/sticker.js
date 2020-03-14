//載入後觸發
$(document).ready(function(){
    sticker();
   // getUrlParam();
});


// 給予貼圖購買連結並跑出貼圖
var momo = '<p class="sticker_money">NT$30</p><a class="sticker_link" href="https://store.line.me/stickershop/product/1025308/zh-Hant?from=sticker"><div class="buy">購買</div></a><p class="sticker_p">讓默默兔的日常生活融入你的日常生活裡吧~</p>' ;
var chicken = '<p class="sticker_money">NT$30</p><a class="sticker_link" href="https://store.line.me/stickershop/product/1120423/zh-Hant?from=sticker"><div class="buy">購買</div></a><p class="sticker_p">成功捕捉一隻野生雞哥！讓可愛的他參與你的日常貼圖吧 !</p>' ;
var newyear = '<p class="sticker_money">NT$30</p><a class="sticker_link" href="https://store.line.me/stickershop/product/10227370/zh-Hant?from=sticker"><div class="buy">購買</div></a><p class="sticker_p">可愛的新年鼠陪伴“鼠”於你的新年</p>' ;


function sticker(){
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


// 判斷首頁點選的
window.onload = function getUrlParam(){
    
    var r = location.search;
    if(r.indexOf('?')!= -1){//是否有資料傳遞
        
        var st = r.split('=');//st[0]='?sticker'
        var sticker = "";
        sticker = st[1];
        
        if (sticker ==  "momorabbit"){
            show_momo();
        }else
        if (sticker == "wildchicken"){
            show_chicken();
        }else
        if (sticker == "2020newyear"){
            show_newyear();
        }
    }else{
        show_momo();
    }
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





