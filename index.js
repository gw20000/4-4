


const btn = document.querySelectorAll('button');

const div1 = document.querySelector('.div1');

 btn[0].addEventListener('click',handler1);

function handler1(e) {
     e.preventDefault();
  document.documentElement.classList.add("color-eee");
  btn[0].classList.add('insetShadow');
    // alert("you have clicked button ");
  div1.classList.add("getAnima");

}

btn[1].addEventListener('click',handler2);

function handler2(e) {
     e.preventDefault();
    window.location.reload();
}