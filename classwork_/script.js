function subscribeBtn () {
    const emptyInput = document.getElementById('empty-input');
    const wrongEmailFormat = document.getElementById('wrong-email-format')
    const emailBox = document.getElementById('email-box');
    const successMessage = document.getElementById('success-message');
    const generalContainer = document.getElementById('general-container')

    if (emailBox.value === '') {
        emptyInput.style.display = 'block';
        emailBox.style.borderColor = 'tomato';
        emailBox.style.backgroundColor = 'rgb(223, 167, 157)';
    } else {
        if (!emailBox.value.endsWith('@gmail.com' || '@outlook.com' || '@yahoo.com' || '@icloud.com' || '@hotmail.com')) {
            wrongEmailFormat.style.display = 'block';
            emailBox.style.borderColor = 'tomato';
            emailBox.style.backgroundColor = 'rgb(223, 167, 157)';
        } else {
            generalContainer.style.display = 'none';
            successMessage.style.display = 'block';
        };
    }
    
    
};
