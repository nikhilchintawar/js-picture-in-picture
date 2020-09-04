const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//prompt to select media scream, pass to video element, then play
async function selectMediaScreen(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error here
        console.log(`Error here buddy: ${error}`);        
    }
}

button.addEventListener("click", async() => {
    //disable button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //reset button
    button.disabled = false;
})

//on load
selectMediaScreen();