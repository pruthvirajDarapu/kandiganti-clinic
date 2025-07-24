// WhatsApp form submission
document.addEventListener('DOMContentLoaded', function() {

    // Handler for Quote form
    var quoteBtn = document.getElementById('sendWhatsapp');
    if (quoteBtn) {
        quoteBtn.onclick = function () {
            var form = document.getElementById('whatsappForm');
            var name = form.querySelector('input[placeholder="Your Name"]').value.trim();
            var email = form.querySelector('input[placeholder="Your Email"]').value.trim();
            var mobile = form.querySelector('input[placeholder="Your Mobile"]').value.trim();
            var service = form.querySelector('select').value;
            var note = form.querySelector('textarea').value.trim();

            // Validations
            if (!validateEmail(email) || !validateMobile(mobile)) return;

            var msg = "New Quote Request:%0A";
            if (name) msg += "Name: " + name + "%0A";
            if (email) msg += "Email: " + email + "%0A";
            if (mobile) msg += "Mobile: " + mobile + "%0A";
            if (service && service !== "Select A Service") msg += "Service: " + service + "%0A";
            if (note) msg += "Note: " + note + "%0A";

            var url = "https://wa.me/919493393059?text=" + msg;
            window.open(url, '_blank');
        };
    }

    // Handler for Appointment form
    var appointmentBtn = document.getElementById('sendWhatsappAppointment');
    if (appointmentBtn) {
        appointmentBtn.onclick = function () {
            var form = document.getElementById('appointment-form');
            var name = form.querySelector('#name').value.trim();
            var email = form.querySelector('#email').value.trim();
            var date = form.querySelector('input[name="date"]').value.trim();
            var doctor = form.querySelector('select').value;
            var phone = form.querySelector('#phone').value.trim();
            var message = form.querySelector('#message').value.trim();

            // Validations
            if (!validateEmail(email) || !validateMobile(phone)) return;

            var msg = "New Appointment Request:%0A";
            if (name) msg += "Name: " + name + "%0A";
            if (email) msg += "Email: " + email + "%0A";
            if (phone) msg += "Phone: " + phone + "%0A";
            if (date) msg += "Date: " + date + "%0A";
            if (doctor) msg += "Doctor: " + doctor + "%0A";
            if (message) msg += "Message: " + message + "%0A";

            var url = "https://wa.me/919063490684?text=" + msg;
            window.open(url, '_blank');
        };
    }

    // Shared validation functions
    function validateEmail(email) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        return true;
    }

    function validateMobile(mobile) {
        var mobilePattern = /^\d{10}$/;
        if (!mobilePattern.test(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return false;
        }
        return true;
    }

});
