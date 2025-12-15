// DATA LOGIN SEDERHANA
const USERNAME = "admin";
const PASSWORD = "123456";

function login() {
    if (username.value === USERNAME && password.value === PASSWORD) {
        loginPage.classList.add("hidden");
        homePage.classList.remove("hidden");
        loginError.innerText = "";
    } else {
        loginError.innerText = "Username atau password salah";
    }
}

function logout() {
    homePage.classList.add("hidden");
    loginPage.classList.remove("hidden");
}

function uploadImage() {
    const file = imageInput.files[0];
    if (!file) return;

    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    productGallery.appendChild(img);
}
