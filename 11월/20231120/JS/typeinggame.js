

const words = ['DW', 'DOM', 'Event','Window','굴굴','return','아카데미'];
const container = document.querySelector('#container');
console.log(container.offsetWidth, container.offsetHeight);

const maxPositionX = container.offsetWidth - 90;
const maxPositionY = container.offsetHeight - 100;

function init(){
    words.forEach(function(el){
      const span = document.createElement('span');
      span.classList.add('word');
      span.setAttribute('id', el);
      span.innerHTML = el;
      span.style.top = `${Math.floor(Math.random() * (maxPositionY - 20)) + 20}px`;
      span.style.left = `${Math.floor(Math.random() * (maxPositionX - 20)) + 20}px`;
      container.append(span);
    });
}

function wordRain(){
    const words = document.querySelectorAll('.word');
    words[0].style.top
    words[0].getBoundingClientRect().bottom;
    
    setInterval(function(){
        words.forEach(function(el){
            const rectTop = el.getBoundingClientRect().top;
            el.style.top = `${rectTop - 75}px`;
            if(el.getBoundingClientRect().bottom > 810){
                alert('game over');
                el.remove();
            }
            
             const colorArr = [];
             for(let i = 0; i < 3; i++){
                 colorArr.push(Math.floor(Math.random() * 256));
             }
              el.style.color = `rgb(${colorArr.toString()})`;
         });
     }, 3000);
 }
                


const input = document.querySelector('input');
input.addEventListener('change', function(){
    const word = document.querySelector(`span[id=${input.value}]`);
    if(word != null) {
    word.remove();
    const leftWords = document.querySelectorAll('.word');
    if(leftWords.length == 0){
        alert('success!👏');
        if(confirm('재도전 하시겠습니까?😆')){
            window.location.reload();
        }
    }
    }
    input.value = '';
})
init();
wordRain();
input.focus();

    
    


    

        
        

    
        
    

