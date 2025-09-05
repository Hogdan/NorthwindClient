document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  // random animation for attention seeker
  const animations = ['animate__swing', 'animate__rubberBand', 'animate__tada', 'animate__wobble', 'animate__jello', 'animate__heartBeat'];
  const rndIndex = Math.floor(Math.random() * animations.length);
  document.querySelector('.greeting').classList.add('animate__animated', animations[rndIndex]);

  // alert toast
  document.getElementById('submit').addEventListener('click', function(e) {
    if (document.querySelectorAll('.form-check-input:checked').length < 1) {
      e.preventDefault();
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
    }
  });



  // h1 color changer
  document.querySelectorAll('.form-check-label').forEach(label => {
    label.addEventListener('mouseenter', function(e) {
      document.querySelector('h1').style.color = e.target.htmlFor;
    });
    label.addEventListener('mouseleave', function(e) {
      document.querySelector('h1').style.color = 'slategray';
    });
  });


  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });

  // all balloon selector
  document.getElementById('all').addEventListener('change', function(e) {
    if (e.target.checked) {
      document.querySelectorAll('.form-check-input').forEach(c => c.checked = true);
      document.querySelectorAll('.ball').forEach(b => {
        b.style.visibility = "visible";
        b.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        b.classList.add("animate__animated", "animate__bounceInDown");
      });
    } else {
      document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
      document.querySelectorAll('.ball').forEach(b => {
        b.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
        b.classList.add("animate__animated", "animate__bounceOutUp");
      });
    }
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);

});