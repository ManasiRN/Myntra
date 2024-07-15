document.addEventListener('DOMContentLoaded', () => {
    // Function to add event listeners to existing reels
    const addReelEventListeners = (newReel) => {
        newReel.querySelectorAll('.reel-interactions .material-icons').forEach(icon => {
            icon.addEventListener('click', (e) => {
                let count = e.target.nextElementSibling;
                count.textContent = parseInt(count.textContent) + 1;
            });
        });

        newReel.querySelectorAll('.comments-section button').forEach(button => {
            button.addEventListener('click', (e) => {
                let input = e.target.previousElementSibling;
                if (input.value.trim() !== '') {
                    let comment = document.createElement('p');
                    comment.innerHTML = `<b>@you:</b> ${input.value}`;
                    e.target.nextElementSibling.appendChild(comment);
                    input.value = '';
                }
            });
        });
    };

    // Initial event listeners for existing reels
    document.querySelectorAll('.reel-interactions .material-icons').forEach(icon => {
        icon.addEventListener('click', (e) => {
            let count = e.target.nextElementSibling;
            count.textContent = parseInt(count.textContent) + 1;
        });
    });

    document.querySelectorAll('.comments-section button').forEach(button => {
        button.addEventListener('click', (e) => {
            let input = e.target.previousElementSibling;
            if (input.value.trim() !== '') {
                let comment = document.createElement('p');
                comment.innerHTML = `<b>@you:</b> ${input.value}`;
                e.target.nextElementSibling.appendChild(comment);
                input.value = '';
            }
        });
    });

    // Handle file upload
    document.getElementById('upload-button').addEventListener('click', () => {
        const fileInput = document.getElementById('upload-input');
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            if (file.type.startsWith('video/')) { // Ensure it's a video file
                const url = URL.createObjectURL(file);

                const newReel = document.createElement('div');
                newReel.className = 'reel';
                newReel.innerHTML = `
                    <video src="${url}" controls></video>
                    <div class="reel-info">
                        <h2>@newuser</h2>
                        <div class="reel-interactions">
                            <span class="material-icons">favorite</span> <span class="count">0</span>
                            <span class="material-icons">comment</span> <span class="count">0</span>
                        </div>
                    </div>
                    <div class="comments-section">
                        <input type="text" placeholder="Add a comment">
                        <button>Add</button>
                        <div class="comments"></div>
                    </div>
                `;
                document.getElementById('reels-container').appendChild(newReel);

                // Play the video automatically
                const videoElement = newReel.querySelector('video');
                videoElement.play();

                // Stop video when it ends
                videoElement.addEventListener('ended', () => {
                    videoElement.pause();
                });

                // Add event listeners for the new elements
                addReelEventListeners(newReel);
            } else {
                alert('Please upload a valid video file.');
            }
        }
    });
});
