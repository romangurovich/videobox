(function() {
    'use strict';

    var snapshotButton = document.querySelector('button#snapshot'),
        filterButtons = document.querySelectorAll('button.filter'),
        video = document.querySelector('video'),
        canvas = document.querySelector('canvas');

    canvas.width = 480;
    canvas.height = 320;

    snapshotButton.onclick = function() {
        canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    };

    function onFilterClick() {
        canvas.className = this.dataset.filter;
    }

    for (var i = 0; i < filterButtons.length; ++i) {
        var button = filterButtons[i];

        button.onclick = onFilterClick;
    }

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    var constraints = {
        audio: false,
        video: true
    };

    function successCallback(stream) {
        window.stream = stream;

        if (window.URL) {
            video.src = window.URL.createObjectURL(stream);
        } else {
            video.src = stream;
        }
    }

    function errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
    }

    navigator.getUserMedia(constraints, successCallback, errorCallback);
})();