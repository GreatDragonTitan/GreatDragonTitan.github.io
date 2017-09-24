    function onMoveImg(a) {
            a.width = '60%';
            a.height = '60%';
        }
    function onOutImg(a) {
            a.width = '50%';
            a.height = '50%';
        }
function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("c1").classList.toggle("change");
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("c1").classList.toggle("change");
}
window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
});
function openNav1() {
    
    document.getElementById("myNav1").style.height = "100%";
    
}

function closeNav1() {
    document.getElementById("myNav1").style.height = "0%";
}

