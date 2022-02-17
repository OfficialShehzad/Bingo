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



//insert first number to computer generated array;
var firstRandomNumber = Math.ceil(Math.random() * 25)
computerBingoTable.push(firstRandomNumber);



//create random array for the computer's Bingo table
for (var i = 1; i < 25; i++) {
    var randomNumber = Math.ceil(Math.random() * 25);
    var checkedNumber = ifRandomNumberExists(randomNumber);
    computerBingoTable.push(checkedNumber);
}
console.log(computerBingoTable);



//for checking if the number to be inserted already exists
function ifRandomNumberExists(number) {
    if(computerBingoTable.includes(number)){
        return ifRandomNumberExists(Math.ceil(Math.random() * 25))
    }
    else {
        return number;
    }
}





// for inserting into each columns
// var i = 0
// $("." + i).text(randomNumber)