// 1. Start with DOMContentLoaded Event:
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Form Selection:
    const form = document.getElementById('registration-form');

    // 2. Feedback Division Selection:
    const feedbackDiv = document.getElementById('form-feedback');

    // 3. Form Submission Event Listener:
    form.addEventListener('submit', function(event) {
        
        // 3. Event Prevention:
        event.preventDefault();

        // 4. Input Retrieval and Trimming
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 5. Initialize Validation Variables:
        let isValid = true;
        const messages = []; // Array to store all error messages

        // 6. Validation Logic
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address (must contain '@' and '.').");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 7. Displaying Feedback

        feedbackDiv.style.display = "block";

        if (isValid) {
            // Success State
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; 
            feedbackDiv.style.backgroundColor = "#d4edda"; 
        
            form.reset(); 
        } else {
            // Failure State
            
            feedbackDiv.innerHTML = messages.join('<br>'); 
            feedbackDiv.style.color = "#dc3545"; 
            feedbackDiv.style.backgroundColor = "#ffbaba";
        }
    });
});