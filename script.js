document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // CTA button hover effect
    const ctaButton = document.querySelector('.cta');
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Handle Petition Form Submission
    const petitionForm = document.getElementById('petition-form');
    const formResponse = document.getElementById('form-response');

    petitionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Form validation
        const title = document.getElementById('petition-title').value;
        const description = document.getElementById('petition-description').value;
        const type = document.getElementById('petition-type').value;
        const email = document.getElementById('user-email').value;

        if (title === "" || description === "" || type === "" || email === "") {
            formResponse.textContent = "Please fill in all fields.";
            formResponse.style.color = '#dc3545'; // Red color for error
            return;
        }

        // Simulate sending data to the backend
        const petitionData = {
            title,
            description,
            type,
            email
        };

        // You can replace this with an actual fetch request to a server API
        fetch('https://example.com/api/submit-petition', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(petitionData)
        })
        .then(response => response.json())
        .then(data => {
            // Simulate form submission success
            formResponse.textContent = "Petition submitted successfully!";
            formResponse.style.color = '#28a745'; // Green color for success
            petitionForm.reset();
        })
        .catch(error => {
            // Handle errors
            formResponse.textContent = "There was an error submitting your petition. Please try again.";
            formResponse.style.color = '#dc3545'; // Red color for error
        });
    });
});
