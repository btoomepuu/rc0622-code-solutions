function handleClick(event) {
  console.log('button clicked');
  console.log('event object: ', event);
  console.log('target prop of event object: ', event.target);
}

const $clickButton = document.getElementsByClassName('click-button')[0];
$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event object: ', event);
  console.log('target prop of event object: ', event.target);
}

const $mouseover = document.getElementsByClassName('hover-button')[0];
$mouseover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event object: ', event);
  console.log('target prop of event object: ', event.target);
}

const $dblClick = document.getElementsByClassName('double-click-button')[0];
$dblClick.addEventListener('dblclick', handleDoubleClick);
