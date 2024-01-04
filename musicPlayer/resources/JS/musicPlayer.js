const menuItems = document.querySelectorAll(".menu-item");
// console.log(menuItems);
menuItems.forEach(function(el, idx){
    el.addEventListener('click', function(){
        if(idx == 0){
            location.href = 'index.html';
        }
    });
});

const wraps = document.querySelectorAll("header .wrap > span");
wraps.forEach(function(el, idx){
    el.addEventListener('click', function(){
        if(idx == 0){
            location.href = 'musicPlayer.html'
        };
    });
});



