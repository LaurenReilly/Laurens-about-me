var button = document.querySelector("#hidey");
var list = document.querySelectorAll("li");

var items = [...list];


button.addEventListener("click", hide);

function hide(){
    items.forEach(function (li){
        li.classList.remove("hidden");
    });
}
