const $jokeContainer = document.querySelector('#joke-container');
const $flashImage = document.querySelector('#flash-image');
const $jokeForm = document.querySelector('#joke-form');

const jokester = {
  tellJoke: function (setup, punchline) {
    $jokeForm.classList.add('d-none');
    const $introStatement = renderJokePhrase('Hey Flash...');
    appendJokePhrase($introStatement);
    setTimeout(function () {
      const $jokeSetup = renderJokePhrase(setup);
      appendJokePhrase($jokeSetup);
      setTimeout(function () {
        const $jokePunchline = renderJokePhrase(punchline);
        appendJokePhrase($jokePunchline);
        flash();
      }, 2000);
    }, 2000);
  }
};

const renderJokePhrase = phrase => {
  const $phrase = document.createElement('h4');
  $phrase.textContent = phrase;
  $phrase.className = 'fade-in text-center mb-3 col-12';
  return $phrase;
};

const appendJokePhrase = $phrase => {
  $jokeContainer.append($phrase);
};

const flash = () => {
  const laughingUrl = 'images/flash-laugh.gif';
  laugh(laughingUrl);
};

const laugh = url => {
  setTimeout(function () {
    $flashImage.setAttribute('src', url);
  }, 3000);
};
function handleJokeSubmission(event) {
  event.preventDefault();
  const { setup, punchline } = event.target.elements;
  jokester.tellJoke(setup.value, punchline.value);
}

$jokeForm.addEventListener('submit', handleJokeSubmission);
