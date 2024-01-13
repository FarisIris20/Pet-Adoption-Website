function showThankYouMessage() {
            document.getElementById('volunteerForm').style.display = 'none';
            document.getElementById('thank-you-message').style.display = 'block';
        }

        function clearForm() {
            document.getElementById('volunteerForm').reset();
        }

function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Example of a debounced scroll event
window.addEventListener('scroll', debounce(function() {
    // Your scroll event code here
}, 250));