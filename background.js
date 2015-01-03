var dbName = 'todos-vanillajs'; 

function launch() { 
  chrome.app.window.create('index.html', {
    id: 'main', 
    bounds: { width: 620, height: 500 }
  });
}

chrome.app.runtime.onLaunched.addListener(launch);

chrome.runtime.onInstalled.addListener(function() {
	var date = new Date(2015, 5, 1);
	chrome.storage.local.set({countdowndate: date});
});

chrome.runtime.onSuspend.addListener(function() {

});

chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.storage.local.get(dbName, showNotification);
});

function showNotification(storedData) {
  var openTodos = 0; 
  if (storedData[dbName].todos) {
    storedData[dbName].todos.forEach(function(todo) {
      if ( !todo.completed ) {
        openTodos++;
      }
    });
  }
  if ( openTodos > 0 ) {
    // Now create the notification
    chrome.notifications.create('reminder', {
      type: 'basic', 
      iconUrl: 'icon-128.jpg', 
      title: "Don\'t forget!", 
      message: 'You have '+openTodos+' things to do. Wake up, dude!'
    }, function(notificationId) {});
  }
}

chrome.notifications.onClicked.addListener(function() { 
launch(); 
});