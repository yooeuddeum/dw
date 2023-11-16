const imgTag = document.querySelector('img');
    const divTag = document.querySelector('#x');
    imgTag.addEventListener('click', function(){
        imgTag.classList.toggle('on');
        divTag.classList.toggle('on');
        
        
    });