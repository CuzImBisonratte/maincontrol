document.querySelectorAll(".notif_bubble").forEach(element => {

    element.addEventListener("click", function() {

        // Remove the error message
        element.style.animation = "animation_error_out 1s ease 0s 1 normal forwards";

        // Remove the error message after the animation is done
        setTimeout(function() {

            // Remove the error message
            element.style.display = "none";

        }, 500);

    });

});


function notify(title, text, type) {

    // New element
    var notification_bubble = document.createElement("div");
    var notification_bubble_title = document.createElement("div");
    var notification_bubble_text = document.createElement("div");

    // Add the needed classes to notification bubble
    notification_bubble.classList.add('notif_bubble');
    notification_bubble.classList.add('notif_bubble_' + type);

    // Add the needed classes to notification bubble title
    notification_bubble_title.classList.add('notif_bubble_title');
    notification_bubble_title.innerHTML = title;

    // Add the needed classes to notification bubble text
    notification_bubble_text.classList.add('notif_bubble_text');
    notification_bubble_text.innerHTML = text;

    // Append the two inners to the parent element 
    notification_bubble.appendChild(notification_bubble_title);
    notification_bubble.appendChild(notification_bubble_text);

    // Append the notification as a child to the notification container
    document.getElementById("notif_container").appendChild(notification_bubble);
}