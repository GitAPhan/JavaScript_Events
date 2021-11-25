{
    // function to change innerText
    function first_message(title) {
        title.target.innerText = "Would you like to play a game?";
        title.target.style.color = "red";
    }

    // function to change text v2
    function second_message(msg) {
        msg.target.innerText = "too bad, you have no choice!";
    }

    // function to change element to random photo
    function change_image(image) {
        let image_source = ["http://loremflickr.com/150/150/plane", "http://loremflickr.com/150/150/table", "http://loremflickr.com/150/150/desk", "http://loremflickr.com/150/150/fridge", "http://loremflickr.com/150/150/bucket"];
        image.target.src = image_source[Math.floor(Math.random() * image_source.length)];
    }

    // function to toggle hidden message
    function hidden_message(event) {
        if (event.key === " ") {
            console.log(event);
            let hidden_message = document.getElementById('message');
            hidden_message.classList.toggle("visible");
        }
    }

    // function to change bg color of body
    function bg_color_change() {
        // array of colors 
        let array_of_colors = ['red', 'blue', 'green', 'purple', 'yellow', 'orange', 'pink'];
        // change color of bg
        document.body.style.backgroundColor = array_of_colors[Math.floor(Math.random() * array_of_colors.length)];
    }

    // function to move circle to a random location
    function circle_move() {
        let circle_item = document.getElementById('circle');
        // set left properties of circle to a random number
        circle_item.style.left = Math.floor(Math.random() * 100) + 'vw';
        // set top properties of circle to a random number
        circle_item.style.top = Math.floor(Math.random() * 100) + 'vh';

    }

    // function to log secret keys and display hidden message
    function secret_keys(key) {
        // conditional to log secret values
        if (key.key === 's') {
            letter.s++;
        } else if (key.key === 'e') {
            letter.e++;
        } else if (key.key === 'c') {
            letter.c++;
        } else if (key.key === 'r') {
            letter.r++;
        } else if (key.key === 't') {
            letter.t++;
        };
        // conditional to run if secret values are met
        if (letter.s > 0 && letter.e > 1 && letter.c > 0 && letter.r > 0 && letter.t > 0) {
            let secret_message = document.createElement('p');
            secret_message.innerText = "you found the secret";
            // place message at a random location on the screen
            secret_message.style.top = Math.floor(Math.random() * 90) + 'vh';
            secret_message.style.left = Math.floor(Math.random() * 90) + 'vw';
            document.body.appendChild(secret_message);
            // reset secret value counter
            letter = { s: 0, e: 0, c: 0, r: 0, t: 0 };
        };
    }

    // variables to store secret value
    let letter = { s: 0, e: 0, c: 0, r: 0, t: 0 };

    // add event listener to the body to listen for the secret values
    document.body.addEventListener('keypress', secret_keys);

    // set interval to call bg_color_change every 15s
    setInterval(bg_color_change, 15000);

    // set interval to call circle_move every 3 seconds
    setInterval(circle_move, 3000);

    // parent container
    let parent_container = document.getElementById('interactionCenter');

    // getting the elements to be manipulated
    let changing_img = parent_container.children[1];
    let title_name = parent_container.children[0];
    let message = document.getElementById('message');

    // hover mouse over and out title to change content
    title_name.addEventListener('mouseover', first_message);
    title_name.addEventListener('mouseout', second_message);

    // add event listener to image
    let main_image = document.getElementsByTagName('img');
    main_image[0].addEventListener('click', change_image);
    document.body.addEventListener('keypress', hidden_message);


    console.log('yay');
}