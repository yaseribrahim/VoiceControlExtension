## What it does
Chrome extension to control Netflix and YouTube videos through speech commands. Download it [here](https://chrome.google.com/webstore/detail/voice-control-for-video/chlidlijeeodennooemopellplaflomd). 

<p align="middle" float="left">
  <img src="ScreenShot.png" alt="Screenshot_1573543334" width="325" hspace="20"/>



## How to use it

Press Start Recording from pop down (or ctrl/cmd + E) then say the any of the following commands:

"Play Video"
"Pause Video"
"Skip Video"
"Rewind Video"

## How we built it
We used [Google's Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) for recognizing speech and then controlled the playback using the [HTMLMediaElement interface](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement). This was the implementation for YouTube. 

In the case of Netflix, we had to inject script tags into the DOM of the page to control the player. 
