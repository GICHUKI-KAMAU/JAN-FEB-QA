document.addEventListener("DOMContentLoaded", () => {
    const userSelect = document.getElementById("userSelect");
    const profileName = document.querySelector(".profile-name");
    const profileUsername = document.querySelector(".profile-username");
    const profileWebsite = document.querySelector(".profile-website");
    const profileBio = document.querySelector(".profile-bio");
    const profileLocation = document.querySelector(".profile-location");
    const postsContainer = document.getElementById("posts");
    const commentsContainer = document.getElementById("comments");

    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error("Failed to fetch data");
            return await response.json();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    let Users = [];

    const loadUsers = async () => {
        Users = await fetchData("https://jsonplaceholder.typicode.com/users");
        userSelect.innerHTML = Users
            .map(user => `<option value="${user.id}">${user.name}</option>`)
            .join("");
        userSelect.value = "1";
        updateProfile(Users[0]);
        loadPosts(1);
    };

    const updateProfile = (user) => {
        profileName.textContent = user.name;
        profileUsername.textContent = `@${user.username}`;
        profileWebsite.textContent = user.website;
        profileBio.textContent = user.company.catchPhrase;
        profileLocation.textContent = `📌 ${user.address.city}`;
    };

    const createEngagementMetrics = (count = 200) => `
        <div class="engagement">
            <span>💬 ${count}</span>
            <span>🔄 ${count}</span>
            <span>❤️ ${count}</span>
        </div>
    `;

    const loadPosts = async (userId) => {
        const posts = await fetchData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        postsContainer.innerHTML = posts
            .map(post => `
                <div class="post" data-post-id="${post.id}">
                    <img src="./dp.png?height=50&width=50" alt="Avatar" class="post-avatar">
                    <div class="post-content">
                        <div class="post-header">
                            <strong>${post.title}</strong>
                            <span class="verified-badge"><img src="./ver.png?height=50&width=50" alt="verrified" class="verrified"></span>
                            <span class="twitter-icon"><img src="./bird.png?height=50&width=50" alt="twitter" class="twitter"></span>
                        </div>
                        <p>${post.body}</p>
                        ${createEngagementMetrics(200)}
                    </div>
                </div>
            `)
            .join("");
        if (posts.length > 0) {
            loadComments(posts[0].id);
        } else {
            commentsContainer.innerHTML = "<p>No comments available.</p>";
        }
        addPostClickListener();
    };

    const loadComments = async (postId) => {
        const comments = await fetchData(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        commentsContainer.innerHTML = `
            <div class="comments-header">Post ${postId} Comments</div>
            ${comments.map(comment => `
                <div class="comment">
                    <img src="./dp.png?height=50&width=50" alt="Avatar" class="comment-avatar">
                    <div class="comment-content">
                        <div class="comment-header">
                            <strong>${comment.name}</strong>
                             <span class="verified-badge"><img src="./ver.png?height=50&width=50" alt="verrified" class="verrified"></span>
                            <span class="twitter-icon"><img src="./bird.png?height=50&width=50" alt="twitter" class="twitter"></span>
                        </div>
                        <p>${comment.body}</p>
                        ${createEngagementMetrics(0)}
                    </div>
                </div>
            `).join("")}
        `;
    };

    const addPostClickListener = () => {
        const posts = document.querySelectorAll(".post");
        posts.forEach(post => {
            post.addEventListener("click", () => {
                const postId = post.getAttribute("data-post-id");
                loadComments(postId);
                posts.forEach(p => p.classList.remove("active"));
                post.classList.add("active");
            });
        });
    };


    userSelect.addEventListener("change", async (e) => {
        const userId = e.target.value;
        const selectedUser = Users.find(user => user.id == userId);
        updateProfile(selectedUser);
        loadPosts(userId);
    });

    loadUsers();
});