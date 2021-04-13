var search_battle = document.querySelector(".searching");

function search(num) {
    if(num == 1) {
       document.querySelector(".profile").style.display = "none";
       document.querySelector(".searching").style.display = "flex";
    } else {
        document.querySelector(".profile").style.display = "flex";
       document.querySelector(".searching").style.display = "none";
    }
}