function handleTabClick(e) {
  // console.log(e.target.className);
  // console.log(e.target.getAttribute('data-view'));
  $tabs.forEach(tab => {
    if (tab === e.target) {
      tab.className = 'tab active';
    } else (tab.className = 'tab');
  });

  if (e.target.className !== 'tab active') { return; }

  var $dataView = e.target.getAttribute('data-view');
  $views.forEach(view => {
    if (view.getAttribute('data-view') === $dataView) {
      view.className = 'view';
    } else (view.className = 'view hidden');
  });
}

var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleTabClick);
