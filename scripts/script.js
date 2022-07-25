let slider = [{img: '0', name: 'Аренда Яхты "Farline Targa" 52 с капитаном', description: 'Яхта в 52 фута - 16 метров подойдет компании до 12 человек ( вмещает и больше ) Ширина лодки в 4,5 метра позволяет устойчиво держаться на воде и на волнах, ее не сильно качает и все гости будут чувствовать себя комфортно.', price: 'от 25 000 ₽ / час'}, {img: '1', name: '2-х часовая прогулка в "Бухту Радости"', description: 'Эта непродолжительная прогулка - прекрасная возможность отлично отдохнуть на природе. За несколько часов вы успеете насладиться речной прогулкой, отдыхом на берегу и посещением ресторана «Причал 95°»."', price: 'от 50 000 ₽'}, {img: '2', name: '4-х часовая прогулка по водохранилищам МО', description: 'Четырехчасовая прогулка на яхте - это возможность насладиться отдыхом на воде с потрясающими видами и сделать красивые фотографии."', price: 'от 80 000 ₽'}, {img: '3', name: '6-ти часовая Прогулка по центру Москвы', description: 'Приглашаю вас насладиться речной прогулкой по Москве-реке на современной 16-ти метровой яхте «Fairline Targa 52»"', price: '120 000 ₽'}, {img: '4', name: 'Девичник на Яхте от 3-х часов', description: 'Отпразднуйте девичник оригинально, весело и со вкусом! Невероятная атмосфера, высокий уровень сервиса позволят провести грандиозный, запоминающийся и веселый девичник."', price: 'от 60 000 ₽'}, {img: '5', name: 'Романтическая прогулка на яхте на закате от 3-х часов', description: 'Если вы хотите порадовать свою половинку приятными впечатлениями и яркими эмоциями, то романтический ужин на яхте будет прекрасным подарком."', price: 'от 60 000 ₽'}, {img: '6', name: 'Фотосессия на яхте – стильно, романтично и красиво!', description: 'Фотосессия на яхте – это способ сохранить наиболее яркие моменты праздника, ведь красота рек и берегов Подмосковья – эффектный и очень естественный фон для любого торжества."', price: ' по договорённости'}, {img: '7', name: 'Джета - идёт в комплекте с яхтой', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum maxime totam, voluptas modi soluta voluptate fuga tempora nisi beatae veniam doloremque distinctio doloribus animi corporis quae? Ab non numquam culpa?"', price: ' по договорённости'}];

// slider | swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// video
$('.playWrap img').click(() => {
  setTimeout(() => {
    $('.playWrap').hide();
    $('.video .wrap').css({filter: 'blur(0px)'});
  }, 500);
    var symbol = $(".video iframe")[0].src.indexOf("?") > -1 ? "&" : "?";
    $(".video iframe")[0].src += symbol + "autoplay=1";
});
