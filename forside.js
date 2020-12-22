document.querySelector("#menuknap").addEventListener("click", toggleMenu)

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu1").classList.toggle("hidden")

    let erSkjult = document.querySelector("#menu1").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
