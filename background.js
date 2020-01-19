// print color is green to console when extension is installed
chrome.runtime.onInstalled.addListener(function() {

  // TODO: save initial websites urls inside storage (i.e netflix, youtube)
   chrome.storage.sync.set( {color: '#3aa757'}, function() {
     console.log("The color is green.");
   });

   // enable page action when user is on developer.chrome.com
   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          // TODO: get correct websites from storage
          // pageUrl: {hostEquals: 'youtube.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
 });
