let boxes = document.querySelectorAll(".box");
let gameOver = false;

// Winning Patterns
let patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
// Check input after each entry
boxes.forEach((box) => {
    box.addEventListener("input", checkWinner);
});
function checkWinner() {
    if (gameOver) return;

    for (let pattern of patterns) {
        let [a, b, c] = pattern;

        let box1 = boxes[a].value.toUpperCase();
        let box2 = boxes[b].value.toUpperCase();
        let box3 = boxes[c].value.toUpperCase();

        if (box1 !== "" && box1 === box2 && box2 === box3) {
            alert(box1 + " Jeet Gaya!");
            gameOver = true;
            return;
        }
    }
}
function resetGame() {
    boxes.forEach((box) => {
        box.value = "";
    });
    gameOver = false;
}
