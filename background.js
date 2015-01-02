chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'MyWindowID',
    bounds: {
      width: 100,
      height: 100,
      left: 100,
      top: 100
    },
    minWidth: 100,
    minHeight: 100
  });
});

chrome.runtime.onInstalled.addListener(function() {
	var date = new Date(2015, 5, 1);
	chrome.storage.local.set({countdowndate: date});
});

chrom.runtime.onSuspend.addListener(function() {

});