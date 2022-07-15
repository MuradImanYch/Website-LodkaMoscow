let slider = ['0', '1', 'header'];

// slider
for(let i = 0; i <= slider.length - 1; i++) {
    $( ".ourBoats .thumbs" ).append( `<span id=img${i}></span>` );
}
$('.thumbs span').click((e) => {
    $('.ourBoats .thumbs span').css({background: '#fff'});
    $(`#${e.target.id}`).css({background: '#2723D9'});
    $('.ourBoats .slider img').attr('src', `assets/img/${slider[e.target.id.match(/\d+/g).join('')]}.jpg`);
});