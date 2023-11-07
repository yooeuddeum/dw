


const button = document.querySelector("button");

let min;
let sec;

let intervalID;

button.addEventListener("click", function(){
resetCount();
});

function resetCount(){
    min = "2";
    sec = "30";

    if (intervalID){
        clearInterval(intervalID);
    }

    setInterval((v) =>{
        setcount();
    }, 1000);
};
function setcount(){
    document.querySelector(".min").innerText = min;
    document.querySelector(".sec").innerText = sec;

    const nummin = Number(min);
    const numsec = Number(sec);

    if (nummin == 0 && numsec == 0){
        clearInterval(intervalID);
    } else {
        if(numsec == 0){
            const newmin = nummin - 1;
            const newsec = 59;

            min = newmin.toString();
            sec = newsec.toString();
        } else {
            const newsec = numsec -1;

            if (newsec < 10){
                sec = "0" + newsec.toString();
            }else {
                sec = newsec.toString();
            }
        }
    }
};