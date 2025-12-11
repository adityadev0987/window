const menu = document.querySelector('#menu');
// const view = document.querySelector('#view-popup')
// const sort = document.querySelector('#sort-popup')
// const neu = document.querySelector('#new-popup')
const main = document.querySelector("main");

let timer;

main.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    // let x = e.pageX;
    // let y = e.pageY

  menu.style.display = "flex";  
  clearTimeout(timer);
    
})

function scheduleHide() {
  timer = setTimeout(() => {
    menu.style.display = "none";
  }, 1000);
}

menu.addEventListener("mouseenter", () => {
  clearTimeout(timer);
});


menu.addEventListener("mouseleave", () => {
  scheduleHide();
});

main.addEventListener("mouseleave", () => {
  scheduleHide();
});


