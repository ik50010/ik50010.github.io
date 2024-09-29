var postBox = document.getElementById("user-post");
postBox.contentEditable=true;

function submitPost() {
    document.getElementById("submit-button").remove();
    var message = postBox.innerHTML;
    // insert send data to my backend
    location.reload(); 
}

function deletePost(postToDelete) {
    var deleteKey = prompt("Delete Token: ") // this will be sent to the backend 
}
