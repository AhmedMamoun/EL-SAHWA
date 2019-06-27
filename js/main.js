 
// ببساطة هو عمل متغير عشان يحط فيه طول الشاشه
// دي الخاصية ال بتعرف منها طول الشاشه : $(window).height()
// وبعدين جاب طول الابر بار و حطة جوا متغير باردو
// ثم طول النافبار و حطه جوا متغير باردو
// ثم عشان يجيب طول السلايدر .. طرح ارتفاع الشاشه كلها من الابر بار و الناف
//Navbar 
  
$('#main-nav ul li') .on('click', function(){

    $(this).addClass('active').siblings().removeClass('active');
    });
//Featured work     
$('.Featured-work ul li') .on('click', function(){
$(this).addClass('active').siblings().removeClass('active');
//----------------

if ($(this).data('class') === '.all') {
        $('.shuffle-imgs .col-md').css('opacity','1')

    } else {
       
        $('.shuffle-imgs .col-md').css('opacity','.07')  ;
        $($(this).data('class')).parent().css ('opacity',1) ;
      }

});
});
