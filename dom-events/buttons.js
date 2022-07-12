function handleClick(event) {
  console.log('button clicked');
  console.log('event object: ', event);
  console.log('target prop of event object: ', event.target);
}

const $clickButton = document.querySelector('.click-button');
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object: ', event);
  console.log('target prop of event object: ', event.target);
}

const $mouseover = document.querySelector('.hover-button');
$mouseover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object: ', event);
  console.log('target prop of event object: ', event.target);
}

const $dblClick = document.querySelector('.double-click-button');
$dblClick.addEventListener('dblclick', handleDoubleClick);
