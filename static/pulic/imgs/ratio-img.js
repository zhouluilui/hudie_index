

function imgratio() {//ͼƬ ratio��������
    $(".ratio-img").each(function (index, element) {
     
        if($(this).is(":visible"))
        {
            $(this).css({ height: Math.floor($(this).width() * $(this).data("ratio")) });
            $(".in_star2_main li").height($(".in_star2_main li:eq(0)").height())
        }
    });

    if ($(".menu_h").is(":visible")) {
        $(".body-box").height($(window).height());

        $("a").each(function (e) {
            $(this).attr({ "target": "_self" })
        });

    } else {
        $(".body-box").css({ height: "auto" });
    }


}

$(function () {

    imgratio()//��ʼ��ͼƬratio

    setTimeout(function () {
        imgratio();
    }, 300)

    $(".ratio-img").each(function (index, element) {
        $(this).attr({ "src": $(this).data("src") });
    });


    //���ڸı��С�ص�ratio��
    var rtime = new Date();
    var timeout = false;
    var delta = 500;
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            if (!$("html").hasClass("ie7")) {
                setTimeout(resizeend, delta); //resizeֻ�ص����һ��
            }
        }
    });
    function resizeend() {  //window.resize�ص�
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            imgratio()//ratio
        }
    }
    //

})

//��ͼͼ��
var nullimg = '../images/error.png';
function lod(t) {
    t.onerror = null;
    t.src = nullimg
}
$(function () {
    $(".ratio-img").each(function () {
        if ($(this).attr("src") == "") {
            $(this).attr({ "src": nullimg })
        }
    })
})
