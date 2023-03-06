import {SONG, SongManager} from "./SONG";
import {ALBUM, AlbumManager} from "./ALBUM";
import {showAllAlbum} from "./main_Album";

let songmanager = new SongManager();
let input = require('readline-sync');
let albumManager = new AlbumManager();


export function showallMenu() {
    let choise = -1;
    do {
        console.log(
            `-------MENU SONG-------
          1.Them bai hat vao trong Album
          2.Sua ten bai hat 
          3.Xoa bai hat
          4.Tim kiem bai hat
          5.Hien thi danh sach bai hat
          0.Thoat khoi chuong trinh`);
        choise = +input.question(`Nhap vao lua chon :`);
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

    } while (choise != 0)
}

function addSong() {
    console.log(albumManager.showAlbum());
    let albumNumber = +input.question(`Nhap vao Alnum muon them bai hat :`);
    let name = input.question(`Nhap vao ten bai hat :`);
    let id = songmanager.getID();
    let song = new SONG(name, id);
    if (albumNumber < albumManager.album.length) {
        if (songmanager.checkName(name) === true) {
            albumManager.album[albumNumber].arrSong.push(song)
        } else console.log(`Ten bai hat da ton tai trong Album `)

    } else {
        console.log("Album khong ton tai ")
    }


}

function editSong() {
    console.log(
        `----------MENU SONG---------
        `);
    let albumName = input.question(`Nhap ten vao Alnum muon sua bai hat :`);
    let name = input.question(`Nhap vao ten bai hat muon thay doi :`);
    let name1 = input.question(`Nhap vao ten bai hat moi :`);
    let albumIndex = albumManager.findByName(albumName);
    let songIndex = albumManager.album[albumIndex].findByName(name);
    albumManager.album[albumIndex].arrSong[songIndex].name = name1;
    console.log(name1);
    console.log("Doi ten  bai hat thanh cong ");

}

function deleteSong() {
    let choise = -1;
    console.log(
        `----------MENU SONG---------
        `);
    let albumName = input.question(`Nhap ten vao Alnum muon sua bai hat :`);
    let name = input.question(`nhap ten bai hat muon xoa : `);
    console.log(`
    1.YES
    2. NO`)
    choise=input.question(`nhap lua chon :`);
    switch (choise) {
        case 1:
            let albumIndex = albumManager.findByName(albumName);
            let deleteIndext = albumManager.album[albumIndex].findByName(name);
            albumManager.deleteAlbum(deleteIndext);
        case 2:
            showallMenu();


    }

}

function searchSong() {
    console.log(
        `----------MENU SONG---------
        `);
    let name = input.question(`nhap ten bai hat muon tim : `);
    songmanager.searchSongByNameInAlbum(name);
}

function showSong() {
    console.log(albumManager.showAlbum());

    let showAlbum = +input.question(`Nhap vao Album muon show :`);
    if (showAlbum < albumManager.album.length) {
        return console.log(albumManager.album[showAlbum].arrSong);
    }

    songmanager.showSong();

}

