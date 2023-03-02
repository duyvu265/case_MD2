import {SONG} from "./SONG";
import {ALBUM} from "./ALBUM";
import {AlbumManager} from "./ALBUM";

export
let input = require('readline-sync');
function showall() {
    let choise = -1;
    do {
        console.log(`
    --------MENU-------
    1:Hien thi Album da co
    2:Them 1 Album
    3:Doi ten Album
    4:Xoa album
    5:hien thi bai hat co trong album
    0:Thoat chuong trinh
    `);
        choise = input.question(`nhap lua chon : `);
        switch (choise) {
            case 1:
                showAllAlbum();
                break;
            case 2:
                addAlbum1();
                break;
            case 3:
                // editAlbum();
                break;
            case 4:
                // deleteAlbum();
                break;
            case 5:
                // showAAlbum();
                break;
        }
    } while (choise != 0)
}



function showAllAlbum() {
    console.table("hello");
}
function addAlbum1() {
    console.table("hi");
}
// function editAlbum() {
//    this.AlbumManager.reName();
//
// }
// function deleteAlbum() {
//     this.AlbumManager.deleteAlbum();
// }
//
// function showAAlbum() {
//     this.AlbumManager.showSong();
// }
showall()