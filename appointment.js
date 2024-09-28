function sendMail() {
    
    const form = document.getElementById('appointmentForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Construct the email body
    const emailBody = `
        Appointment Booking Details:

        Full Name : ${data.fullName}
        Email :  ${data.email}
        Phone Number : ${data.phone}
        Preferred Date: ${data.date}
        Preferred Time: ${data.time}
        Reason for Visit: ${data.reason}
        Additional Information: ${data.notes}
    `;
    // Send email via EmailJS
    emailjs.send('service_1aric3n', 'template_0vdf7ft', {
        to_email: 'myselfpriyankv@gmail.com', // Replace with your email address
        reply_to: data.email,
        subject: 'New Appointment Booking Request',
        message: emailBody
    })
        .then(response => {
            console.log('Email sent successfully:', response);
            alert('Your appointment request has been sent successfully.');
            
        })
        .catch(error => {
            console.error('Error sending email:', error);
            alert('There was an error sending your request. Please try again.');
        });
}

