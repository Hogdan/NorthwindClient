document.addEventListener('DOMContentLoaded', function () {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    autoHide: true,
    format: 'MM-dd'
  });
});