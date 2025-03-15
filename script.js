// Login System
function checkLogin() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    
    if (user === "admin" && pass === "4aPTaH110866") {
        window.location.href = "game.html";
    } else {
        document.getElementById("error-msg").innerText = "Incorrect login!";
    }
}

// Block Blast Game
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("game-board")) {
        initGame();
    }
});

function initGame() {
    const board = document.getElementById("game-board");
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        board.appendChild(cell);
    }

    document.getElementById("reset").addEventListener("click", () => {
        document.querySelectorAll(".cell").forEach(cell => cell.style.background = "");
    });
}
