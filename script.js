const menubar = document.getElementById('menubar');
const menu = document.getElementById('menu');
const closebar=document.getElementById('closebar');
menu.hidden = true;
menubar.addEventListener("click", () => {
    if (menu.hidden) {
        menu.hidden = false;
    }
    else {
        menu.hidden = true;
    }
}) ;
closebar.addEventListener("click",()=>{
    menu.hidden=true;
})