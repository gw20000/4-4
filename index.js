


const btn = document.querySelector('button');



 btn.addEventListener('click',handler1);

function handler1(e) {
     e.preventDefault();
  document.documentElement.classList.add("color-eee");
  btn.classList.add('insetShadow');
    alert("you have clicked button ");


}