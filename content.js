var recognition = false;

const init = () => {

  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";

  recognition.onspeechstart = event => console.log("speech started");
  recognition.onspeechend = event => recognition.stop();


  recognition.onresult = event => {
   let last = event.results.length - 1;
   // let lastTranscript = event.results[last][0].transcript;

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

   if (interim_transcript.search("play") != -1){
     console.log('play video was said')
     $('video').play()

   }

   if (interim_transcript.search("pause") != -1){
     console.log('pause video')
     $('video').pause()
   }
 }
}

init()

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  if(request.data === "start"){
    recognition.start()
    console.log('recognition started')
  } else if(request.data === "stop") {
    recognition.stop()
  } else {
  }
});
