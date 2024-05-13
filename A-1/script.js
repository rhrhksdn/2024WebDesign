$(".main-menu li").mouseover(function(){
    $(".sub-menu").stop().slideDown()
}).mouseout(function(){
    $(".sub-menu").stop().slideUp();
})

$(".tab-title ul li:first-child").click
(function(){
    $(".gallery .tab-con").hide();
    $(".con-box .tab-con").show();
})
$(".tav-title ul li:nth-child(2)").click
(function(){
    $(".gallery .tab-con").hide();
    $(".con-box .tab-con").show();
})