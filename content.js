// URL of the new default profile picture
const newProfilePic = 'https://images.pexels.com/photos/11008562/pexels-photo-11008562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';  // Replace with your chosen image URL

// Function to change profile pictures
function changeProfilePictures() {
    // Use more specific selectors to accurately target profile pictures
    const profileImages = document.querySelectorAll('.EntityPhoto-circle-3, .profile-displayphoto');
    profileImages.forEach(img => {
        img.src = newProfilePic;
    });
}

// Create a MutationObserver to handle dynamically loaded content
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            changeProfilePictures();  // Reapply the image change on new nodes
        }
    });
});

// Start observing the document body for DOM changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial application of the image change
changeProfilePictures();
