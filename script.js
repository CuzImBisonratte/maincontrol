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