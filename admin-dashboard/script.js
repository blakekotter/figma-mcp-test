// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Demo functionality for buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`You clicked: ${this.textContent}`);
        });
    });

    // View All functionality
    const viewAll = document.querySelector('.view-all');
    viewAll.addEventListener('click', function() {
        alert('View all uploads');
    });

    // Simulate loading data
    // In a real application, this would fetch data from an API
    simulateDataLoading();
});

function simulateDataLoading() {
    // Simulate loading stats after a delay
    setTimeout(() => {
        document.querySelectorAll('.stat-value')[0].textContent = '42';
        document.querySelectorAll('.stat-value')[1].textContent = '7';
        document.querySelectorAll('.stat-value')[2].textContent = '3';
    }, 1000);

    // Sample upload data
    const sampleUploads = [
        { name: 'Company Logo', date: '04/10/2024' },
        { name: 'Product Banner', date: '04/08/2024' },
        { name: 'Team Photo', date: '04/05/2024' }
    ];

    // Wait a moment, then populate table with sample data
    setTimeout(() => {
        const tableBody = document.querySelector('.uploads-table tbody');
        tableBody.innerHTML = ''; // Clear existing content
        
        sampleUploads.forEach(upload => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="image-cell">
                    <img src="assets/placeholder.png" alt="${upload.name}">
                </td>
                <td>${upload.name}</td>
                <td>${upload.date}</td>
            `;
            tableBody.appendChild(row);
        });
    }, 1500);
}