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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgc25hcHNob3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24jc25hcHNob3QnKSxcbiAgICAgICAgZmlsdGVyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbi5maWx0ZXInKSxcbiAgICAgICAgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2aWRlbycpLFxuICAgICAgICBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcblxuICAgIGNhbnZhcy53aWR0aCA9IDQ4MDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gMzIwO1xuXG4gICAgc25hcHNob3RCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5kcmF3SW1hZ2UodmlkZW8sIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIG9uRmlsdGVyQ2xpY2soKSB7XG4gICAgICAgIGNhbnZhcy5jbGFzc05hbWUgPSB0aGlzLmRhdGFzZXQuZmlsdGVyO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsdGVyQnV0dG9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYnV0dG9uID0gZmlsdGVyQnV0dG9uc1tpXTtcblxuICAgICAgICBidXR0b24ub25jbGljayA9IG9uRmlsdGVyQ2xpY2s7XG4gICAgfVxuXG4gICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYSA9IG5hdmlnYXRvci5nZXRVc2VyTWVkaWEgfHwgbmF2aWdhdG9yLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuYXZpZ2F0b3IubW96R2V0VXNlck1lZGlhO1xuXG4gICAgdmFyIGNvbnN0cmFpbnRzID0ge1xuICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgIHZpZGVvOiB0cnVlXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHN1Y2Nlc3NDYWxsYmFjayhzdHJlYW0pIHtcbiAgICAgICAgd2luZG93LnN0cmVhbSA9IHN0cmVhbTtcblxuICAgICAgICBpZiAod2luZG93LlVSTCkge1xuICAgICAgICAgICAgdmlkZW8uc3JjID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoc3RyZWFtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZGVvLnNyYyA9IHN0cmVhbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVycm9yQ2FsbGJhY2soZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRvci5nZXRVc2VyTWVkaWEgZXJyb3I6ICcsIGVycm9yKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0b3IuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzLCBzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=