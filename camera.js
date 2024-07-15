// Access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        var video = document.getElementById('video');
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred: " + err);
    });

// Capture the photo
document.getElementById('capture').addEventListener('click', function() {
    var canvas = document.getElementById('canvas');
    var video = document.getElementById('video');
    var photo = document.getElementById('photo');
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    var dataURL = canvas.toDataURL('image/jpeg');
    photo.setAttribute('src', dataURL);

    // Send the captured image to the server
    fetch('/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: dataURL })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            photo.setAttribute('src', data.image);
        } else {
            console.error('Error:', data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
