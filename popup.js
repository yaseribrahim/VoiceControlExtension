let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

recordButton.onclick = function(element) {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     chrome.tabs.sendMessage(tabs[0].id, {data: "start"}, function(response) {});
   });
 };


stopButton.onclick = function(element) {
   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     chrome.tabs.sendMessage(tabs[0].id, {data: "stop"}, function(response) {});
   });
 };
