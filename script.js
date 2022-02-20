var computerBingoTable = [];
var playerBingoTable = [];


var started = false;


var playerBingoTiles = $(".player .bingo-tile");




// start the game 
$(".vscomputer").on("click", () => {
    started = true;
    if(started == true) {
        $(".start-container").css("min-height", "0")
        $(".btn").addClass("hidden")
        $(".game-area").removeClass("hidden")


        playerBingoTilesSelectable()
        createComputerBingoTable()
    }
})





//to select a tile
function playerBingoTilesSelectable() {
    playerBingoTiles.on("click", (e) => {
        var selectedTile = $(e.target)

        // highlight all tiles except for the row with BINGO
        if($(".active").length === 0){
            if(!(selectedTile.attr("class").includes("borderless"))){
                selectedTile.addClass("active")
                console.log("selected");
                
                enterPlayerBingoTable(selectedTile)
            }
        } else if($(".active").length === 1) {
            if(!(selectedTile.attr("class").includes("borderless"))){
                selectedTile.removeClass("active")
                console.log("unselected");
                $(".enter-number").text("")
            }
        }

    })
}

//to enter numbers in the user selected tile
function enterPlayerBingoTable(selectedTile) {

}


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
