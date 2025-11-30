// 1. Initialize the Async Function
async function fetchUserData() {
    
    // 2. Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // 3. Select the Data Container Element
    const dataContainer = document.getElementById('api-data');
    
    // 4. Fetch Data Using try-catch
    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Check for HTTP errors (e.g., 404, 500)
        if (!response.ok) {
            // Throw an error if the response status is not successful
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response body to JSON
        const users = await response.json();
        
        // 5. Clear the Loading Message
        dataContainer.innerHTML = '';
        
        // 6. Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the array of users
        users.forEach(user => {
            const listItem = document.createElement('li');
            
            // Set the text content to the user's name
            listItem.textContent = user.name;
            
            // Append the list item to the <ul>
            userList.appendChild(listItem);
        });

        // Append the completed <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 7. Error Handling
        console.error('Fetching user data failed:', error);
        
        // Clear any previous content and display the error message
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
                dataContainer.style.color = '#dc3545';
        dataContainer.style.fontWeight = 'bold';
    }
}

// 8. Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);