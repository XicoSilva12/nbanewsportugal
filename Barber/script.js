// script.js

function openTab(event, tabId) {
    // Remove active class from all tab links and contents
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => link.classList.remove("active"));
    tabContents.forEach(content => content.classList.remove("active"));

    // Add active class to the clicked tab link and corresponding tab content
    event.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}

// Set default tab to be "Notícias"
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-link").click();
});

