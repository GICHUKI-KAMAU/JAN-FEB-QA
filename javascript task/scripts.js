document.addEventListener("DOMContentLoaded", () => {
    const userSelect = document.getElementById("userSelect");
   

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch data");
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
    };
    const loadUsers = async () => {
        const users = await fetchData("https://jsonplaceholder.typicode.com/users");
        userSelect.innerHTML = users
            .map(user => <option value="${user.id}">${user.name}</option>)
            .join("");
        userSelect.value = "1"; 
        updateProfile(users[0]); 
        loadPosts(1); 
    };


    
    loadUsers();
});
