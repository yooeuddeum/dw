function createSnow() {
    const el = document.createElement("div");
    el.classList.add('snow');
    el.style.marginLeft = randomPostion() + 'px';
    document.body.appendChild(el);
  }
  
  function randomPostion() {
    return Math.floor(Math.random() * window.innerWidth);
  };
  for(let i=0; i<300; i++){
    createSnow();
  }
  createSnow();
