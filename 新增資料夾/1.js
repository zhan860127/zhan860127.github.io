$(document).ready(function(){
    setTimeout(myshow_total(),3000);
    
    setInterval(myshow_total,37000);
    setTimeout(function(){$(".cat1").fadeIn();},1000);

    setTimeout(function(){$(".home").fadeIn();},2000);
    setTimeout(function(){$(".thing1").fadeIn();},3000);
    setTimeout(function(){$(".thing2").fadeIn();},3000);



    function myshow(){
        setTimeout(function(){$(".cloud_1").fadeIn();},2000);
        setTimeout(function(){$(".cloud_1").fadeOut();},5000);
        setTimeout(function(){$(".cloud_2").fadeIn();},4000);
        setTimeout(function(){$(".cloud_2").fadeOut();},8000);
        setTimeout(function(){$(".cloud_3").fadeIn();},6000);
        setTimeout(function(){$(".cloud_3").fadeOut();},9000);
     };

     function myshow2(){
        setTimeout(function(){$(".foot1").fadeIn();},1000);
        setTimeout(function(){$(".foot1").fadeOut();},4000);
        setTimeout(function(){$(".foot2").fadeIn();},3000);
        setTimeout(function(){$(".foot2").fadeOut();},6000);
        setTimeout(function(){$(".foot3").fadeIn();},5000);
        setTimeout(function(){$(".foot3").fadeOut();},8000);
        setTimeout(function(){$(".foot4").fadeIn();},7000);
        setTimeout(function(){$(".foot4").fadeOut();},10000);
        setTimeout(function(){$(".foot5").fadeIn();},9000);
        setTimeout(function(){$(".foot5").fadeOut();},12000);
        setTimeout(function(){$(".foot6").fadeIn();},11000);
        setTimeout(function(){$(".foot6").fadeOut();},14000);
        setTimeout(function(){$(".foot7").fadeIn();},14000);
        setTimeout(function(){$(".foot7").fadeOut();},18000);
        setTimeout(function(){$(".foot8").fadeIn();},16000);
        setTimeout(function(){$(".foot8").fadeOut();},19000);
        setTimeout(function(){$(".foot9").fadeIn();},18000);
        setTimeout(function(){$(".foot9").fadeOut();},21000);
        setTimeout(function(){$(".foot10").fadeIn();},20000);
        setTimeout(function(){$(".foot10").fadeOut();},23000);
        setTimeout(function(){$(".foot11").fadeIn();},22000);
        setTimeout(function(){$(".foot11").fadeOut();},25000);
        setTimeout(function(){$(".foot12").fadeIn();},24000);
        setTimeout(function(){$(".foot12").fadeOut();},27000);
   setTimeout(function(){$(".foot13").fadeIn();},26000);
        setTimeout(function(){$(".foot13").fadeOut();},29000);
   setTimeout(function(){$(".foot14").fadeIn();},28000);
        setTimeout(function(){$(".foot14").fadeOut();},31000);
   setTimeout(function(){$(".foot15").fadeIn();},30000);
        setTimeout(function(){$(".foot15").fadeOut();},33000);
   setTimeout(function(){$(".foot16").fadeIn();},32000);
        setTimeout(function(){$(".foot16").fadeOut();},35000);
   setTimeout(function(){$(".foot17").fadeIn();},34000);
        setTimeout(function(){$(".foot17").fadeOut();},37000);

     };

     function myshow_total()
     {  myshow();
        setInterval(myshow,8000);

        myshow2();


     }
    


});


