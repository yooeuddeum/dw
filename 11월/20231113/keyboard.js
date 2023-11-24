const myInput = document.getElementById("my-input");
const key = document.getElementById("key");
const code = document.getElementById("code");
const keydown = document.getElementById("keydown");
const keypress = document.getElementById("keypress");
const keyup = document.getElementById("keyup");

function onkeyEvent(e) {
  // 눌린 키에 대한 요소를 가져온다.
  const el = document.querySelector(`#${e.code}`);
  // keyup 요소에 check 클래스를 추가한다.
  keyup.classList.add("check");
  // keydown div에 check 클래스를 추가한다.
  keydown.classList.add("check");
  
  // 눌린 키를 화면상에서 회색으로 변경한다.(클래스를 적용하여)
  el.classList.add("on");

  key.innerHTML = `key: ${e.key}`;
  code.innerHTML = `code: ${e.code}`;

  setTimeout(function(){
    keyup.classList.remove("check");
    keydown.classList.remove("check");
  },300);
}

function upkeyEvent(e) {
  // 손가락을 뗏을 때의 키에 대한 요소를 가져온다.
  const el = document.querySelector(`#${e.code}`);

  // 손가락을 뗀 키를 화면상에서 다시 원상복구 시킨다.(클래스를 삭제하여)
  el.classList.remove("on");
}

function presskeyEvnet(e){
    keypress.classList.add("check");

    setTimeout(function(){
        keypress.classList.remove("check");
      },300);
    
}

    

myInput.addEventListener("keydown", onkeyEvent);
myInput.addEventListener("keypress", presskeyEvnet);
myInput.addEventListener("keyup", upkeyEvent);

