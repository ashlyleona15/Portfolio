function validate(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const number = document.getElementById('number').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && number && email && subject && message) {
                alert("Thank you,\n" 
                    + name + "\n" 
                    + number + "\n" 
                    + email + "\n" 
                    + subject + "\n" 
                    + message + "\nYour message has been sent.");
            } else {
                alert("Please fill in all the fields.");
            }
        }