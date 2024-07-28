document.addEventListener('DOMContentLoaded', function() {
    const greetingElement = document.getElementById('greeting');
    const datetimeElement = document.getElementById('datetime');
  
    function updateGreeting() {
        const now = new Date();
        const hours = now.getHours();
        let greeting;
  
        if (hours < 12) {
            greeting = 'Good morning!';
        } else if (hours < 18) {
            greeting = 'Good afternoon!';
        } else {
            greeting = 'Good evening!';
        }
  
        greetingElement.textContent = greeting;
    }
  
    function updateDateTime() {
        const now = new Date();
        const formattedDateTime = now.toLocaleString();
        datetimeElement.textContent = `Current Date and Time: ${formattedDateTime}`;
    }
  
    updateGreeting();
    updateDateTime();
    setInterval(updateDateTime, 1000); 
  });