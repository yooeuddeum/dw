function openMenu() {
    document.getElementById("main").style.marginLeft = "300px";
    document.querySelector('.sidebar').style.width = "300px";
    document.querySelector('.openbtn').style.display = 'none';
}

function closeMenu() { 
    document.getElementById("main").style.marginLeft= "0";
    document.querySelector('.sidebar').style.width = "0";
    document.querySelector('.openbtn').style.display = 'block';
}