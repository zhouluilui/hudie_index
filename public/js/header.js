$(function () {
    //当滑动的高度大于200px的时候
    $(window).scroll(function (e) {
        var scroll_top = $(e.target).scrollTop();
        console.log(scroll_top);
        if (scroll_top >= 200) { //当滑动的距离小于200px的时候，内边距要加上
            $(".header").animate({"padding-top":"0px"},5);
        } else{
            $(".header").animate({"padding-top":"20px"},5);
        }

    });
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:3000/header.html",
        success: function (res) {
            $("<link rel='stylesheet' href='./css/header.css'>").appendTo("head");
            $(res).replaceAll("#header");
        }
    });
})