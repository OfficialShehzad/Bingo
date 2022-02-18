var computerBingoTable = [];


var bingoTiles = $(".bingo-tile");


//to select a tile
bingoTiles.on("click", (e) => {
    var selectedTile = $(e.target)

    // highlight all tiles except for the row with BINGO
    if(!(selectedTile.attr("class").includes("borderless"))){
        selectedTile.toggleClass("active")
    }
})


//function to create random array for the computer's Bingo table
//Call function to create computer's bingo table
function createComputerBingoTable(){

    for (var i = 0; i < 25; i++) {
        var randomNumber = Math.ceil(Math.random() * 25);
        var checkedNumber = ifRandomNumberExists(randomNumber);
        computerBingoTable.push(checkedNumber);
    }
    console.log(computerBingoTable);

    for(var i = 0; i < 25; i++) {
        $(".c" + i).text(computerBingoTable[i])
    }

}


//for checking if the number to be inserted already exists
function ifRandomNumberExists(number) {
    if(computerBingoTable.includes(number)){
        return ifRandomNumberExists(Math.ceil(Math.random() * 25))
    }
    else {
        return number;
    }
}
