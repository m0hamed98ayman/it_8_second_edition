document.querySelector('.right').onsubmit = function(e) {
    e.preventDefault();
    const firstName = document.querySelector('input[placeholder="Enter first name"]').value;
    const phone = document.querySelector('input[type="number"]').value;
    const type = document.getElementById('booking-type').value;
    const vehicle = document.getElementById('select-vehicle').value;
    const date = document.getElementById('preferred-date').value;
    const time = document.getElementById('preferred-time').value;
    const notes = document.getElementById('additional-requirements').value;
    if (!firstName || !phone || !type || !vehicle || !date || !time) {
        alert('Please fill in all the required fields to complete your booking.');
    } else {
        localStorage.setItem("booking_firstName", firstName);
        localStorage.setItem("booking_phone", phone);
        localStorage.setItem("booking_type", type);
        localStorage.setItem("booking_vehicle", vehicle);
        localStorage.setItem("booking_date", date);
        localStorage.setItem("booking_time", time);
        localStorage.setItem("booking_notes", notes);
        alert(`Thank you, ${firstName}!\nYour booking for the ${vehicle} has been received.`);
        this.reset();
    }
};