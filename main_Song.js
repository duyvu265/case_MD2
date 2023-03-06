"use strict";
exports.__esModule = true;
exports.showallMenu = void 0;
var SONG_1 = require("./SONG");
var ALBUM_1 = require("./ALBUM");
var songmanager = new SONG_1.SongManager();
var input = require('readline-sync');
var albumManager = new ALBUM_1.AlbumManager();
function showallMenu() {
    var choise = -1;
    do {
        console.log("-------MENU SONG-------\n          1.Them bai hat vao trong Album\n          2.Sua ten bai hat \n          3.Xoa bai hat\n          4.Tim kiem bai hat\n          5.Hien thi danh sach bai hat\n          0.Thoat khoi chuong trinh");
        choise = +input.question("Nhap vao lua chon :");
        switch (choise) {
            case 1:
                addSong();
                break;
            case 2:
                editSong();
                break;
            case 3:
                deleteSong();
                break;
            case 4:
                searchSong();
                break;
            case 5:
                showSong();
                break;
        }
    } while (choise != 0);
}
exports.showallMenu = showallMenu;
function addSong() {
    console.log(albumManager.showAlbum());
    var albumNumber = +input.question("Nhap vao Alnum muon them bai hat :");
    var name = input.question("Nhap vao ten bai hat :");
    var id = songmanager.getID();
    var song = new SONG_1.SONG(name, id);
    if (albumNumber < albumManager.album.length) {
        if (songmanager.checkName(name) === true) {
            albumManager.album[albumNumber].arrSong.push(song);
        }
        else
            console.log("Ten bai hat da ton tai trong Album ");
    }
    else {
        console.log("Album khong ton tai ");
    }
}
function editSong() {
    console.log("----------MENU SONG---------\n        ");
    var albumName = input.question("Nhap ten vao Alnum muon sua bai hat :");
    var name = input.question("Nhap vao ten bai hat muon thay doi :");
    var name1 = input.question("Nhap vao ten bai hat moi :");
    var albumIndex = albumManager.findByName(albumName);
    var songIndex = albumManager.album[albumIndex].findByName(name);
    albumManager.album[albumIndex].arrSong[songIndex].name = name1;
    console.log(name1);
    console.log("Doi ten  bai hat thanh cong ");
}
function deleteSong() {
    console.log("----------MENU SONG---------\n        ");
    var albumName = input.question("Nhap ten vao Alnum muon sua bai hat :");
    var name = input.question("nhap ten bai hat muon xoa : ");
    var albumIndex = albumManager.findByName(albumName);
    var deleteIndext = albumManager.album[albumIndex].findByName(name);
    albumManager.deleteAlbum(deleteIndext);
}
function searchSong() {
    console.log("----------MENU SONG---------\n        ");
    var name = input.question("nhap ten bai hat muon tim : ");
    songmanager.searchSongByNameInAlbum(name);
}
function showSong() {
    console.log(albumManager.showAlbum());
    var showAlbum = +input.question("Nhap vao Album muon show :");
    if (showAlbum < albumManager.album.length) {
        return console.log(albumManager.album[showAlbum].arrSong);
    }
    songmanager.showSong();
}
// showallMenu()
