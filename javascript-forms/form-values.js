function handleSubmit(event) {
  event.preventDefault();
  var elements = document.getElementById('contact-form').elements;
  var formValues = {};
  for (var i = 0; i < elements.length; i++) {
    var item = elements.item(i);
    formValues[item.name] = item.value;
  }
  console.log('formValues:', formValues);
  document.getElementById('contact-form').reset();
}

var $contactForm = document.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleSubmit);
