const form = document.getElementById("requestForm");
const requestsList = document.getElementById("requestsList");

// Display all requests
async function loadRequests() {
    const response = await fetch("/api/requests");
    const requests = await response.json();

    requestsList.innerHTML = "";

    requests.forEach(request => {
        const card = document.createElement("div");

        card.className = "request-card";

        card.innerHTML = `
            <h3>${request.studentName}</h3>

            <p><strong>Email:</strong> ${request.email}</p>

            <p><strong>Category:</strong> ${request.category}</p>

            <p><strong>Problem:</strong> ${request.description}</p>

            <span class="priority">
                ${request.priority} Priority
            </span>

            <br><br>

            <button onclick="updateRequest(${request.id})">
                Update
            </button>

            <button onclick="deleteRequest(${request.id})">
                Delete
            </button>
        `;

        requestsList.appendChild(card);
    });
}


// Submit a new request
form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const requestData = {
        studentName: document.getElementById("studentName").value,
        email: document.getElementById("email").value,
        category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        priority: document.getElementById("priority").value
    };

    await fetch("/api/requests", {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(requestData)
    });

    form.reset();

    loadRequests();
});


// Update request
async function updateRequest(id) {

    const newDescription = prompt(
        "Enter the new problem description:"
    );

    if (newDescription === null || newDescription.trim() === "") {
        return;
    }

    try {
        const response = await fetch(`/api/requests/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                description: newDescription
            })
        });

        if (!response.ok) {
            throw new Error("Failed to update request");
        }

        const updatedRequest = await response.json();

        console.log("Updated:", updatedRequest);

        await loadRequests();

        alert("Request updated successfully!");

    } catch (error) {
        console.error(error);
        alert("Unable to update the request.");
    }
}


// Delete request
async function deleteRequest(id) {

    const confirmDelete = confirm(
        "Are you sure you want to delete this request?"
    );

    if (!confirmDelete) {
        return;
    }

    await fetch(`/api/requests/${id}`, {
        method: "DELETE"
    });

    loadRequests();
}


// Load requests when page opens
loadRequests();