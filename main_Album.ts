import {ALBUM} from "./ALBUM";
import {AlbumManager} from "./ALBUM";
import {SONG} from "./SONG";
import {SongManager} from "./SONG";
import {showallMenu} from "./main_Song";

let albummanager = new AlbumManager();


let song=new SongManager();

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
        choise = +input.question(`nhap lua chon : `);
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
    } while (choise != 0)
}


 export function showAllAlbum() {
    console.log(
        `----------MENU ALBUM---------
        `);
    let album = albummanager.getAlbum();
    let menu = "";
    for (let i = 0; i < album.length; i++) {
        menu += `${i + 1 }  : ${album[ i].name }\n`;
    }
    menu += `0.thoat`;
    console.log(menu);


}

function addAlbum1() {
    console.log(
        `----------MENU ALBUM---------
        `);
    let name = input.question(`nhap vao ten Album :`);
    let id = albummanager.getCount();
    let albums: ALBUM = new ALBUM(name, id);
    albums.arrAlbum.push(albums);
    console.log("Them thanh cong");


}

function editAlbum() {
    console.log(
        `----------MENU ALBUM---------
        `);
    let nameAbum = input.question(`nhap vao ten Album muon thay doi :`);
    let name1 = input.question(`nhap vao ten moi   :`);
   albummanager.editNameAlbum(nameAbum,name1);
   console.log("thay doi thanh cong");
}
function deleteAlbum() {
    console.log(
        `----------MENU ALBUM---------
        `);
    let name=input.question(`nhap ten muon xoa :`);

    albummanager.deleteAlbum(albummanager.findIDByName(name));
    console.log("xoa thanh cong ")

}
function showAAlbum() {

    song.showSong();
    showallMenu()

}
showall();
