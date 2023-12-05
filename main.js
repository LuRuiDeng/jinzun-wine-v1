
// (function () {


//     var video, output;
//     var scale = 0.8;
//     var initialize = function () {
//         //output = document.getElementById("output");
//         video = document.getElementById("video1");
//         video.currentTime = 0; 
//         video.addEventListener('loadeddata', captureImage);
//     };
//     function captureImage() {
//         //setTimeout(function() {
//         var canvas = document.createElement("canvas");
//         console.log(video.videoWidth,'video.videoWidth')
//         canvas.width = video.videoWidth * scale;
//         canvas.height = video.videoHeight * scale;
//         canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//         var img = document.createElement("img");
//         console.log("aaaaaa")
//         document.getElementById('video1').setAttribute('poster', canvas.toDataURL("image/png"))
//         img.src = canvas.toDataURL("image/png");
//        // output.appendChild(img);
//         // },500)

//     };

//     initialize();
// })();
