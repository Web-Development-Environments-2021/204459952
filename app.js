const slider=document.querySelector('.images');
const images = document.querySelectorAll('.images img');

const prevButton= document.querySelector('#prviousButton');
const nextButton= document.querySelector('#nextButton');

/*
since we are going to increase the counter we use let 
make sure all pictures are with the same resoulution
*/
let counter=1;
const size= images[0].clientWidth;

slider.style.transform= 'translateX('+(-size*counter)+'px)';

nextButton.addEventListener('click',()=>{
    if(counter>=images.length-1)return;
    slider.style.transition="transform 0.4ps ease-in-out";
    counter++;
    slider.style.transform= 'translateX('+(-size*counter)+'px)';
});

prevButton.addEventListener('click',()=>{
    if(counter<=0)return;
    console.log('clicked');
    slider.style.transition="transform 0.4ps ease-in-out";
    counter--;
    slider.style.transform= 'translateX('+(-size*counter)+'px)';
}); 

slider.addEventListener('transitionend',()=>{
    console.log('fired');   
    if(images[counter].id ==='lastClone'){
        slider.style.transition="none";
        counter=images.length-2;
        slider.style.transform= 'translateX('+(-size*counter)+'px)';
    }

    if(images[counter].id ==='firstClone'){
        slider.style.transition="none";
        counter=images.length-counter;
        slider.style.transform= 'translateX('+(-size*counter)+'px)';
    }
});


window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }


  
