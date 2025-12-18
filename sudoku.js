const solution = [
    [1,2,3,4,5,6,7,8,9],
    [4,5,6,7,8,9,1,2,3],
    [7,8,9,1,2,3,4,5,6],
    [2,3,4,5,6,7,8,9,1],
    [5,6,7,8,9,1,2,3,4],
    [8,9,1,2,3,4,5,6,7],
    [3,4,5,6,7,8,9,1,2],
    [6,7,8,9,1,2,3,4,5],
    [9,1,2,3,4,5,6,7,8]
];

let selectedCell = null;

function buildSudoku() {
    const game = $(".sudoku-game");

    for (let r = 0; r < 9; r++) {
        const row = $("<div class='row'></div>");
        for (let c = 0; c < 9; c++) {

            const cell = $("<div class='cell'></div>");
            cell.data("row", r);
            cell.data("col", c);

            // RANDOM BLANKS
            if (Math.random() < 0.5) {
                cell.addClass("fixed");
                cell.text(solution[r][c]);
            }

            row.append(cell);
        }
        game.append(row);
    }
}

$(document).on("click", ".cell", function () {
    if ($(this).hasClass("fixed")) return;

    $(".cell").removeClass("selected");
    $(this).addClass("selected");
    selectedCell = $(this);
});

$(".num").click(function () {
    if (!selectedCell) return;

    const num = parseInt($(this).text());
    const r = selectedCell.data("row");
    const c = selectedCell.data("col");

    if (solution[r][c] === num) {
        selectedCell.text(num);
        selectedCell.addClass("fixed");
        selectedCell.removeClass("selected");
        selectedCell = null;
    }
});

buildSudoku();
