$(document).ready(function(){
    $("#b1").click(function(){
        $("#p1").hide();
    });
    $("#b2").click(function(){
        $("#p2").hide();
    });
    $("button#b3").click(function(){
        $(this).hide();
    });

    $("button#b4").click(function(){
        $("#p1,#p2,#b3").show(1000,changeColor());
    });
    $("button#b5").click(function(){
        $("#div1p1").fadeToggle();
        $("#div1p2").fadeToggle(1000);
        $("#div1p3").fadeToggle(3000);
    });
    $("button#b6").click(function(){
        $("#div1p1").fadeTo(100,0.2);
        $("#div1p2").fadeTo(100,0.2);
        $("#div1p3").fadeTo(100,0.2);
    });
    $(".flip").click(function () {
        $(".panel").slideToggle("slow");
    });
    $("button#b7").click(function(){
        var div2 = $("#div2");
        div2.animate({marginLeft:'+=10px', marginTop:'+=5px',/*opacity:'0.3',*/ height:'100px',width:'+=10px'},"slow");
        div2.animate({marginLeft:'+=10px', marginTop:'+=5px',/*opacity:'0.3',*/ height:'200px',width:'+=0px'},"slow");
        div2.animate({marginLeft:'+=10px', marginTop:'+=5px',/*opacity:'0.3',*/ height:'200px',width:'+=100px'},"slow");
        div2.animate({marginLeft:'+=10px', marginTop:'+=5px',/*opacity:'0.3',*/ height:'100px',width:'-=110px'},"slow");
        div2.animate({marginLeft:'+=0px', marginTop:'+=0px',/*opacity:'0.3',*/ height:'toggle',width:'-=0px'},"slow");
        div2.animate({marginLeft:'+=0px', marginTop:'+=0px',/*opacity:'0.3',*/ height:'toggle',width:'-=0px'},"slow");
    });
});
function changeColor() {
	$("#p1,#p2,#b3").css("color","red");
}

/* 如果$被其他占用，可以改名
//$.noConflict();
var jQuery=$.noConflict();
jQuery(document).ready(function(){
    jQuery("#b1").click(function(){
        jQuery("#p1").hide();
	});
    jQuery("#b2").click(function(){
        jQuery("#p2").hide();
	});
    jQuery("button#b3").click(function(){
        jQuery(this).hide();
	});
    jQuery("p").css("color","green");
    jQuery("button#b4").click(function(){
        jQuery("p").show();
        jQuery("button").show();
	});
});*/