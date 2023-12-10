
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

function slider() {
    const wrapper = document.querySelector('.sliderDiv');
    const images = document.querySelectorAll('.sliderDiv img');
    const dots = document.querySelectorAll('.dots ul li');
    const width = images[0].width;
    let currentIndex = 0;
    const total = images.length;
    dots[0].style.backgroundColor = 'white';
    dots[0].style.width = '8px';
    dots[0].style.height = '8px';
    setInterval(function () {
        currentIndex++;
        if (currentIndex > total - 1) {
            currentIndex = 0;            
            wrapper.style.transition = 'none';
            wrapper.style.transform = 'translateX(0px)';
            images[0].width;
        }
        for (let i = 0; i < total; i++) {
            if (i === currentIndex) {
                dots[i].style.backgroundColor = 'white';
                dots[i].style.width = '8px';
                dots[i].style.height = '8px';
                dots[i].style.borderRadius='8px';
            } else {
                dots[i].style.backgroundColor = 'transparent';
                dots[i].style.width = '6px';
                dots[i].style.height = '6px';
                dots[i].style.borderRadius='6px';
            }
        }        
        wrapper.style.transition = 'transform 1s ease';
        wrapper.style.transform = 'translateX(-' + width * currentIndex + 'px)';

    }, 3500);
}


window.onload = function(){
    var map = new AMap.Map('container1', {
        viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D'
        zoom:16, // 初始化地图层级
        center: [113.883498,22.553123] // 初始化地图中心点
    });

  // 自定义点标记内容
    var markerContent = document.createElement("div");
    // 点标记中的图标
    var markerImg = document.createElement("img");
    markerImg.className = "markerlnglat";
    markerImg.src = "images/poi-marker-red.png";
    markerImg.setAttribute('width', '25px');
    markerImg.setAttribute('height', '34px');
    markerContent.appendChild(markerImg);

    // 点标记中的文本
    var markerSpan = document.createElement("span");
    markerSpan.className = 'marker';
    markerSpan.innerHTML = "金樽英雄酒";
    markerContent.appendChild(markerSpan);

    var marker = new AMap.Marker({
        content: markerContent,  // 自定义点标记覆盖物内容
        position:  [113.883498,22.553130], // 基点位置
        offset: new AMap.Pixel(-17, -42) // 相对于基点的偏移位置
    });

    map.add(marker);
}

