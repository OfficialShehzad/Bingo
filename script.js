bingoTiles = $(".bingo-tile")

bingoTiles.on("click", (e) => {
    selectedTile = $(e.target)

    // highlight all tiles except for the row with BINGO
    if(!(selectedTile.attr("class").includes("borderless"))){
        selectedTile.toggleClass("active")
    }
})