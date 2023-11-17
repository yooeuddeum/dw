const pTags = document.querySelectorAll("p");
// console.log(pTags);
pTags.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.toggle("selected");
  });
});

const holder1 = document.querySelector(".holder1");

// holder1 의 첫번째 자식요소 가져오기
const firstDiv = holder1.firstElementChild;

// holder1 의 마지막 자식요소 가져오기
const lastDiv = holder1.lastElementChild;

function leftToRight() {
  const selectedPtags = firstDiv.querySelectorAll("p[class=selected]");
  //   console.log(selectedPtags);
  selectedPtags.forEach(function (el) {
    el.remove();
    el.setAttribute("class", "");
    lastDiv.append(el);
  });
}

