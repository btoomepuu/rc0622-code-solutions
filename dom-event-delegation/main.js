function removeTask(e) {
  if (e.target.nodeName === 'BUTTON') {
    console.log(e.target.closest('.task-list-item'));
    e.target.closest('.task-list-item').remove();
  }
}

var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', removeTask);
