/* global $ */

// BELOW Update the songs array with four of your favorites songs.
let names = ["BBiBBi", "Lemon", "You(=I)", "If", "womenjieshule", "Palette", "Loser"];
var songs = ["https://youtu.be/nM0xDI5R50E","https://youtu.be/SX_ViT4Ra7k", "https://youtu.be/oKalxTZwoyY", ""];
let lengths = ["3:28", "4:34", "2:50", "","3:39", "4:34"];
let artist = ["IU", "Kenshi Yonezu", "Bolbbalgan4", "mading", "maxundong", "IU", "kenshi Yonezu"];
let images = [];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
