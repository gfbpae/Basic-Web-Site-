// main.js
document.getElementById("loginButton").addEventListener("click", function() {
    // Giriş sayfasını dinamik olarak çağır ve içeriği göster
    loadContent("login.html");
});

document.getElementById("registerButton").addEventListener("click", function() {
    // Kayıt sayfasını dinamik olarak çağır ve içeriği göster
    loadContent("register.html");
});

function loadContent(page) {
    // content div'ine seçilen sayfanın içeriğini yükle
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error('Content loading error:', error));
}
