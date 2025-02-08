// Chart.js Example: Sales Overview Chart (Bar Chart)
var ctx = document.getElementById('salesChart').getContext('2d');
var salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Sales ($)',
            data: [5000, 7000, 6000, 12000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// JavaScript function to handle sending messages in the chat
function sendMessage() {
    const message = document.getElementById('chatMessage').value;
    if (message.trim()) {
        const messageBox = document.createElement('div');
        messageBox.classList.add('p-3', 'mb-2', 'bg-blue-100', 'rounded-lg');
        messageBox.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
        document.querySelector('.h-72').appendChild(messageBox);
        document.getElementById('chatMessage').value = ''; // clear input field
        // Scroll to the latest message
        document.querySelector('.h-72').scrollTop = document.querySelector('.h-72').scrollHeight;
    }
}