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





//to select and unselect a tile
function playerBingoTilesSelectable() {
    playerBingoTiles.on("click", (e) => {
        var selectedTile = $(e.target)

        // highlight all tiles except for the row with BINGO
        if($(".active").length === 0){
    
            selectTile(selectedTile)

        } else if ($(".active").length === 1) {

            unselectTile(selectedTile)

        }

    })
}



//function to make tile selectable
function selectTile(selectedTile) {
    if(!(selectedTile.attr("class").includes("borderless"))){
        selectedTile.addClass("active")
        console.log("selected");

        var input = $(".input-box")
        var inputButton = $(".input-button")
                                
        inputButton.on("click", () => {
            playerBingoTable.push(input.val())
            input.val("")
            console.log(playerBingoTable);
        })
    }
}



//function to deselect tile
function unselectTile(selectedTile) {
    if(!(selectedTile.attr("class").includes("borderless"))){
        selectedTile.removeClass("active")
        console.log("unselected");
    }
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