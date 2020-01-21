var recognition = false;
console.log('new website')

const init = () => {

  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onspeechstart = event => console.log("speech started");
  // recognition.onspeechend = event => recognition.stop();


  recognition.onresult = event => {
   let last = event.results.length - 1;

   let interim_transcript = '';
   let final_transcript = '';

   for (var i = event.resultIndex; i < event.results.length; ++i) {
       // Verify if the recognized text is the last with the isFinal property
     if (event.results[i].isFinal) {
       final_transcript += event.results[i][0].transcript;
     } else {
       interim_transcript += event.results[i][0].transcript;
     }
   }
   console.log(interim_transcript)

   var video = document.getElementsByTagName("video")[0];

   // if (video) {
     // -1 returned if play isn't in sentence
     if (interim_transcript.search("play video") != -1){  //loop works if 'play video' is said
       console.log('play video was said')
       video.play()
     }
     if (interim_transcript.search("pause video") != -1){
       console.log('pause video was said')
       video.pause()
     }
     if (final_transcript.search("skip video") != -1){
      // console.log('skip video was said')
      video.currentTime = video.currentTime + 10  //currentTime is incremented by 10
     }
     if (final_transcript.search("rewind video") != -1){
      // console.log('rewind video was said')
      video.currentTime = video.currentTime - 10 //currentTime is decremented by 10
    }
  // }
 }


}
init()


chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  if(request.data === "start"){
    recognition.start()
    console.log('recognition started')

  } else if(request.data === "stop") {
    recognition.stop()
    console.log('recognition stopped')
  } else if(request.data == "checkVideo"){
    console.log('checkVideo')
  }
});
