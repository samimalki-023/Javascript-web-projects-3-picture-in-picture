const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stram , pass to video element , then play
async function selectMediaStream() {
    try {
     const mediaStream = await navigator.mediaDevices.getDisplayMedia();
     videoElement.srcObject = mediaStream;
     videoElement.onloadedmetadata = () => {
         videoElement.play();
     } 
    }catch (error) {

    }
}

button.addEventListener('click' , async () => {
  // Disable the button
  button.disabled = true ; 
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset the button 
  button.disabled = false;
});
//on load
selectMediaStream();