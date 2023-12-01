
// 자바스크립트

// const colorInput = document.querySelector('.color-input');
// colorInput.addEventListener('change', function(){
//  const colorVal = colorInput.value;
//  if(colorVal.length == 7){
//     const colorChip = document.querySelector('.color-input-chip');
//     colorChip.style.backgroundColor = colorVal;
//  }
// });






// jQuery


$(document).ready(function () {
    $(".color-input").change(function () {
        const selectedColor = $(this).val();
        $(".color-input-chip").css("background-color", selectedColor);
    });

    
    $(".submit").click(function () {
        const selectedColor = $(".color-input").val();
    });
});
       
    
        
       