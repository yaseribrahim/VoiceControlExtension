chrome.runtime.onInstalled.addListener(function() {
  console.log('extension installed')

 });

 chrome.commands.onCommand.addListener(function(command) {
  if (command === 'toggle-recognition'){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {data: "toggle"}, function(response) {});
    })
  }
});
