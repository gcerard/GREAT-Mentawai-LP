document.addEventListener("DOMContentLoaded", function() {
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                document.getElementById("content").innerHTML = data;
            })
            .catch(error => console.log("Error loading page: ", error));
    }

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const page = this.getAttribute("data-page");
            loadPage(page);
        });
    });

    loadPage("dashboard.html");
});
