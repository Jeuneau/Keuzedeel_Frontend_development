// Save the rating when a radio button is selected
document.querySelectorAll('.star-rating').forEach(function(ratingDiv) {
    var ratingId = ratingDiv.id;
    ratingDiv.querySelectorAll('input').forEach(function(radio) {
        radio.addEventListener('change', function() {
            localStorage.setItem(ratingId, this.value);
        });
    });
});

// Load the rating from localStorage when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.star-rating').forEach(function(ratingDiv) {
        var ratingId = ratingDiv.id;
        var rating = localStorage.getItem(ratingId);
        if (rating) {
            ratingDiv.querySelector('input[value="' + rating + '"]').checked = true;
        }
    });
});

// Clear the rating when the clear button is clicked
document.querySelectorAll('.clear-rating').forEach(function(button) {
    button.addEventListener('click', function() {
        var ratingId = this.getAttribute('data-rating-id');
        localStorage.removeItem(ratingId);
        var checkedInput = document.querySelector('#' + ratingId + ' input:checked');
        if (checkedInput) {
            checkedInput.checked = false;
        }
        // Force a refresh of the star ratings
        document.querySelectorAll('#' + ratingId + ' input').forEach(function(input) {
            input.dispatchEvent(new Event('change'));
        });
    });
});