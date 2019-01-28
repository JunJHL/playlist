/* global $ */

//let i=0;
let songName = ["BBiBBi", "Lemon", "You(=I)", "告白", "九万字", "Palette", "Loser"];
let linkUrl = ["https://youtu.be/nM0xDI5R50E","https://youtu.be/SX_ViT4Ra7k", "https://youtu.be/oKalxTZwoyY", "https://youtu.be/n6RG8UuAJLg", "https://youtu.be/u7S2-_Uk_9s","https://youtu.be/d9IxdwEFk1c", "https://youtu.be/Dx_fKPBPYUI" ];
let lengthTime = ["3:28", "4:34", "2:50", "4:19", "3:52", "3:38", "4:02"];
let artistName = ["IU", "Kenshi Yonezu", "Bolbbalgan4", "沈以誠", "黃詩扶", "IU", "kenshi Yonezu"];
let imageUrl = ["http://i.epochtimes.com/assets/uploads/2018/09/180914045434100707-600x400.jpg",
                "https://i.ytimg.com/vi/6JNqLNws_WA/maxresdefault.jpg",
                "https://i.ytimg.com/vi/h4ksuxswBxg/maxresdefault.jpg",
                "https://attractmenyouwant.com/wp-content/uploads/2015/07/%E5%8B%95%E6%BC%AB%E5%91%8A%E7%99%BD-1170x590.jpg",
                "https://i.ytimg.com/vi/_nBiUtS55k0/hqdefault.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQcujjEbjMa3waDZ8tHAUEwIsS41QROhjSXHrZXXLF2WaqhHwy",
                "https://mykindofjapan.files.wordpress.com/2017/03/2662b4d7-s.jpg?w=660"];
//let playButton= ["Play", "play", "Play", "Play", "Play", "Play", "Play"];            

displaySongInfo();

$("#add").click(function() {
    addSongInfo();
    emptySongInfo();
    displaySongInfo();
});

/*$("#a"+i).clcik(function() {
    $("#a"+i).hide();
    $("#links").empty();
    $("#links").html(linkUrl[i]);
});*/

function emptySongInfo(){
    $(".empty").val("");
    $(".column").empty();
}

function addSongInfo(){
    let song=$("#song").val();
    let link=$("#link").val();
    let length=$("#length").val();
    let artist=$("#artist").val();
    let image=$("#image").val();
    
    if(song==="" || link==="" || length==="" || artist==="" || image==="") {
        alert("Please Complete The Song Info");
    }/*else if(length.isNaN()) {
        alert("Please enter a valid number for time");
    }else if(!image.includes("http") || !link.includes("http")) {
        alert("Please enter a valid url");
    }*/else{ 
        songName.push(song);
        linkUrl.push(link);
        lengthTime.push(length);
        artistName.push(artist);  
        //playButton.push("Play");
        imageUrl.push(image);
    }
}

function displaySongInfo() {
    songName.forEach(function(name) {
        $("#songs").append(`<p>${name}</p>`);
    });

    /*playButton.forEach(function(button) {
        $("#plays").append("<p id=a"+i+">"+button+"</p>");
        i++;
    });*/

    lengthTime.forEach(function(time) {
        $("#lengths").append(`<p>${time}</p>`);
    });
    
    artistName.forEach(function(name) {
        $("#artists").append(`<p>${name}</p>`);
    });

    imageUrl.forEach(function(url) {
        $("#images").append(`<img src="${url}">`);
    }); 
    
    linkUrl.forEach(function(url) {
        $("#links").append(` <a href="${url}"> <button class="i"> > </button> </a> `);
    });
}



