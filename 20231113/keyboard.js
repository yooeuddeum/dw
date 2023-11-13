const myInput = document.getElementById('my-input');
const key = document.getElementById('key');
const code = document.getElementById('code');

function onkeyEvent(e){
    // 눌린 키에 대한 요소를 가져온다.
    const el = document.querySelector(`#${e.code}`);
    // 눌린 키를 화면상에서 회색으로 변경한다.(클래스를 적용하여)
    el.classList.add('on');
    key.innerHTML = `key: ${e.key}`;
    code.innerHTML = `key: ${e.code}`;
}

function upkeyEvent(e){
    // 손가락을 뗏을 때의 키에 대한 요소를 가져온다.
    const el = document.querySelector(`#${e.code}`);

    // 손가락을 뗀 키를 화면상에서 다시 원상복구 시킨다.(클래스를 삭제)
    el.classList.remove('on');
}

myInput.addEventListener('keydown', onkeyEvent);
myInput.addEventListener('keyup', onkeyEvent);
