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

    // Add the click listener
    notification_bubble.addEventListener("click", function() {

        // Remove the error message
        notification_bubble.style.animation = "animation_error_out 1s ease 0s 1 normal forwards";

        // Remove the error message after the animation is done
        setTimeout(function() {

            // Remove the error message
            notification_bubble.style.display = "none";

        }, 500);

    });

    // Append the notification as a child to the notification container
    document.getElementById("notif_container").appendChild(notification_bubble);
}


// 
// Menu & Module loading
// 

// Function to hide unused module
function hideModules() {

    // Get all modules
    const module_containers = document.getElementsByClassName("module_container");

    // Loop through the modules
    for (let j = 0; j < module_containers.length; j++) {

        // Get module container
        const module_container = module_containers[j];

        // Hide module
        module_container.style.display = "none";

    }
}

// Function to load the modules
function loadModule(module_name) {

    // Get the module
    const module_container = document.getElementById("module_container_" + module_name);

    // Display the module
    module_container.style.display = "block";
}


// Get all menu button elements
const menu_buttons = document.getElementsByClassName("menu_item");

// Loop through the menu buttons
for (let i = 0; i < menu_buttons.length; i++) {
    const menu_button = menu_buttons[i];

    // Add the event listener
    menu_button.addEventListener("click", function() {

        // Hide all modules
        hideModules();

        // Run the loadModule function with the button as a param
        loadModule(menu_button.id.replace("menu_button_load_module_", ""));
    });
}