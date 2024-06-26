document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.container p'); // Select all paragraphs within the container
    const overlay = document.getElementById('overlay'); // Select the overlay element
    const enlargedText = document.getElementById('enlargedText'); // Select the element to display the enlarged text
    const closeBtn = document.getElementById('closeBtn'); // Select the close button

    paragraphs.forEach(p => {
        p.addEventListener('click', () => { // Add click event listener to each paragraph
            enlargedText.textContent = p.textContent; // Set the enlarged text content to the clicked paragraph's text
            overlay.classList.remove('hidden'); // Show the overlay
            document.body.style.overflow = 'hidden'; // Disable background scroll
            enlargedText.style.fontSize = '1.3rem'; // Increase font size of enlarged text
        });
    });

    closeBtn.addEventListener('click', () => { // Add click event listener to the close button
        overlay.classList.add('hidden'); // Hide the overlay
        document.body.style.overflow = ''; // Enable background scroll
    });
});