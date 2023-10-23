// Wait for the DOM to be fully loaded before executing the JavaScript
document.addEventListener('DOMContentLoaded', function () { 
    
    // Find the element with the id 'recipe_of_the_week' and assign it to the variable 'recipeOfWeek'
    const recipeOfWeek = document.querySelector('#recipe_of_the_week'); 
    // Add a 'mouseenter' event listener to 'recipeOfWeek'
    recipeOfWeek.addEventListener('mouseenter', function () { // When the user hovers over this element, the provided function will be executed.
        // Change the background color and text color when the user hovers over the recipe
        recipeOfWeek.style.backgroundColor = '#1A7F53'; 
        recipeOfWeek.style.color = 'white'; 
    });

    // Add a 'mouseleave' event listener to 'recipeOfWeek'
    recipeOfWeek.addEventListener('mouseleave', function () {
        // Revert the background color and text color when the user stops hovering
        recipeOfWeek.style.backgroundColor = 'transparent';
        recipeOfWeek.style.color = 'black'; // Change to the original text color
    });

});

// Wait for the DOM to be fully loaded before executing the JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Find all elements with the class 'accordion-button' and assign them to the variable 'accordionButtons'
    const accordionButtons = document.querySelectorAll('.accordion-button');

    // Add a click event listener to each button in 'accordionButtons'
    accordionButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the next sibling element of the clicked button and assign it to 'content'
            const content = this.nextElementSibling;
            // Toggle the 'active' class on the parent element of the button
            this.parentElement.classList.toggle('active');
            // Toggle the display style of 'content' between 'block' and 'none'
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

});

// Wait for the DOM to be fully loaded before executing the JavaScript
document.addEventListener('DOMContentLoaded', function () {

    // Find the 'form' element and assign it to the variable 'form'
    const form = document.querySelector('form');
    // Find the submit button within the form and assign it to 'submitButton'
    const submitButton = document.querySelector('button[type="submit"]');

    // Add a submit event listener to the 'form'
    form.addEventListener('submit', function (event) {
        let hasError = false;

        // Reset previous error messages by removing all elements with class 'error-message'
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(element => element.remove());

        // Validation for Recipe Name
        const recipeName = document.querySelector('#recipe_name');
        if (recipeName.value.trim() === '') {
            // Display an error message for Recipe Name
            displayError(recipeName, 'Recipe name is required');
            hasError = true;
        }

        // Validation for Preparation Time
        const prepTime = document.querySelector('#prep_time');
        if (isNaN(prepTime.value) || prepTime.value < 1) {
            // Display an error message for Preparation Time
            displayError(prepTime, 'Preparation time must be a positive number');
            hasError = true;
        }

        // Validation for Instructions
        const instructions = document.querySelector('#instructions');
        if (instructions.value.trim() === '') {
            // Display an error message for Instructions
            displayError(instructions, 'Instructions are required');
            hasError = true;
        }

        if (hasError) {
            event.preventDefault(); // Prevent form submission if there are errors
        }
    });

    // Function to display error messages next to input fields
    function displayError(inputElement, errorMessage) {
        const errorElement = document.createElement('p');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        inputElement.parentElement.appendChild(errorElement);
    }
});

