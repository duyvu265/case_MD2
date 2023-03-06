"use strict";
exports.__esModule = true;
exports.showAllAlbum = void 0;
var ALBUM_1 = require("./ALBUM");
var ALBUM_2 = require("./ALBUM");
var SONG_1 = require("./SONG");
var main_Song_1 = require("./main_Song");
var albummanager = new ALBUM_2.AlbumManager();
var song = new SONG_1.SongManager();
var input = require('readline-sync');
function showall() {
    var choise = -1;
    do {
        console.log("\n    --------MENU-------\n    1:Hien thi Album da co\n    2:Them 1 Album\n    3:Doi ten Album\n    4:Xoa album\n    5:hien thi bai hat co trong album\n    0:Thoat chuong trinh\n    ");
        choise = +input.question("nhap lua chon : ");
        switch (choise) {
            case 1:
                showAllAlbum();
                break;
            case 2:
                addAlbum1();
                break;
            case 3:
                editAlbum();
                break;
            case 4:
                deleteAlbum();
                break;
            case 5:
                showAAlbum();
                break;
        }
    } while (choise != 0);
}
function showAllAlbum() {
    console.log("----------MENU ALBUM---------\n        ");
    var album = albummanager.getAlbum();
    var menu = "";
    for (var i = 0; i < album.length; i++) {
        menu += "".concat(i + 1, "  : ").concat(album[i].name, "\n");
    }
    menu += "0.thoat";
    console.log(menu);
}
exports.showAllAlbum = showAllAlbum;
function addAlbum1() {
    console.log("----------MENU ALBUM---------\n        ");
    var name = input.question("nhap vao ten Album :");
    var id = albummanager.getCount();
    var albums = new ALBUM_1.ALBUM(name, id);
    albums.arrAlbum.push(albums);
    console.log("Them thanh cong");
}
function editAlbum() {
    console.log("----------MENU ALBUM---------\n        ");
    var nameAbum = input.question("nhap vao ten Album muon thay doi :");
    var name1 = input.question("nhap vao ten moi   :");
    albummanager.editNameAlbum(nameAbum, name1);
    console.log("thay doi thanh cong");
}
function deleteAlbum() {
    console.log("----------MENU ALBUM---------\n        ");
    var name = input.question("nhap ten muon xoa :");
    albummanager.deleteAlbum(albummanager.findIDByName(name));
    console.log("xoa thanh cong ");
}
function showAAlbum() {
    console.log(123);
    song.showSong();
    (0, main_Song_1.showallMenu)();
    // let choise = -1
    // console.log(
    //     `-------MENU SONG-------
    //       1.Them bai hat vao trong Album
    //       2.Sua ten bai hat
    //       3.Xoa bai
    //       4.Tim kiem bai hat
    //       5.Hien thi danh sach bai hat
    //       0.Thoat khoi chuong trinh`);
    // choise = +input.question(`Nhap vao lua chon :`);
    // switch (choise) {
    //     case 1:
    //         addSong();
    //         break;
    //     case 2:
    //         editSong();
    //         break;
    //     case 3:
    //         deleteSong();
    //         break;
    //     case 4:
    //         searchSong();
    //         break;
    //     case 5:
    //         showSong();
    //         break;
    //
    // }
}
showall();
