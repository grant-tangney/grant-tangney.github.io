document.getElementById('contact-subject').addEventListener('change', displayRestOfForm);

function displayRestOfForm() {
    const subject = document.getElementById('contact-subject').value;

    const quoteSection = document.getElementById('contact-quote');
    const msgSection = document.getElementById('contact-message');

    if (subject === 'Choose a subject') {
        quoteSection.style = "display: none";
        msgSection.style = "display: none";
    } else if (subject === 'Quote Request') {
        quoteSection.style = "display: block";
        msgSection.style = "display: none";
    } else {
        msgSection.style = "display: block";
        quoteSection.style = "display: none";
    };
};

const pickupLocation = document.getElementById('pickup-location').value;
const pickupTime = document.getElementById('pickup-time');
const dropoffLocation = document.getElementById('dropoff-location').value;
const dropoffTime = document.getElementById('dropoff-time');
