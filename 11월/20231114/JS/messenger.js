

const chatBox = document.querySelector("#chat-box");
const input = document.querySelector("#input");
const send = document.querySelector("#send");

function sendMyText(){
    const newMessage = input.value;
    if(newMessage.length == 0){
        return;
    }
    const div = document.createElement("div");
    // <div></div>
    div.classList.add("bubble", "my-bubble");
    // <div class = "bubble my-bubble"></div>
    div.innerHTML = newMessage;
    // <div class = "bubble my-bubble">텍스트</div>
    chatBox.append(div);  // 아이디 chatBOX에 div 추가
    input.value = "";
}
send.addEventListener("click", sendMyText);   //이벤트 설정

function sendMyTextByEnter(e){
    // console.log(e.key, e.shiftKey);
    if(e.key == "Enter" && !e.shiftKey){
        sendMyText();
        e.preventDefault(); //기본 이벤트를 막아준다.
    }
}
input.addEventListener("keypress", sendMyTextByEnter);


