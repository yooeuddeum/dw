

// const pTags = document.querySelectorAll("p");
// console.log(pTags);
// pTags.forEach(function (el) {
//   el.addEventListener("click", function () {
//     el.classList.toggle("selected");
//   });
// });





const holder1 = document.querySelector(".holder1");

// holder1 의 첫번째 자식요소 가져오기
const firstDiv = holder1.firstElementChild;
firstDiv.addEventListener('click', function(e){
//  console.log(e.target, e.target.tagName);
 if (e.target.tagName == 'P'){
   e.target.classList.toggle('selected');
  }
});


// holder1 의 마지막 자식요소 가져오기
const lastDiv = holder1.lastElementChild;
lastDiv.addEventListener('click', function(e){
  //  console.log(e.target, e.target.tagName);
   if (e.target.tagName == 'P'){
     e.target.classList.toggle('selected');
    }
  });

function leftToRight() {
  const selectedPtags = firstDiv.querySelectorAll("p[class=selected]");
  //   console.log(selectedPtags);
  selectedPtags.forEach(function (el) {
    el.remove();
    el.setAttribute("class", "");
    lastDiv.append(el);
  });
}

function leftToRightAll(){
  const selectedPtags = firstDiv.querySelectorAll("p");
  selectedPtags.forEach(function (el) {
    el.remove();
    el.setAttribute("class", "");
    lastDiv.append(el);
  });
}

function rightToLeft() {
 const selectedPtags = lastDiv.querySelectorAll("p[class=selected]");
 selectedPtags.forEach(function (el){
    el.remove();
    el.setAttribute("class", "");
    firstDiv.append(el);
 });
}

function rightToLeftAll(){
  const selectedPtags = lastDiv.querySelectorAll("p");
  selectedPtags.forEach(function (el) {
    el.remove();
    el.setAttribute("class", "");
    firstDiv.append(el);
  });
}

function addItem(){
  const inputNum = document.querySelector('input[type=number]').value;
  const pTag = document.createElement('p');
  pTag.innerHTML = inputNum;
  firstDiv.append(pTag);
}
  
  



