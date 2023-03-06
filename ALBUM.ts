import {SONG} from "./SONG";
import {SongManager} from "./SONG";

export class ALBUM {
    private _name: string;
    private _ID: number;
    arrSong: Array<SONG> = [];
    arrAlbum: Array<ALBUM> = [];

    constructor(name: string, ID: number) {
        this._name = name;
        this._ID = ID;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get ID(): number {
        return this._ID;
    }

    set_ID(value: number) {
        this._ID = value;
    }

    findByName(name: string): any {
        return this.arrSong.findIndex(function (value, index, obj) {
            return name == value.name
        })
    }
    findByID(ID: number): any {
        this.arrSong.forEach((value, index, array) => {
            if (ID === value.ID) {
                console.log(index);
            } else return -1;
        })
    }
}

export class AlbumManager {
    album: Array<ALBUM> = [];
    arrSong: Array<SONG> = [];
    countAlbum: number = 5;


    constructor() {
        let album1 = new ALBUM("album1", 0)
        let album2 = new ALBUM("album2", 1)
        let album3 = new ALBUM("album3", 2)
        let album4 = new ALBUM("album4", 3)
        this.album.push(album1);
        this.album.push(album2);
        this.album.push(album3);
        this.album.push(album4);
    }

    getAlbum() {
        return this.album
    }

    addAlbum(name: ALBUM): void {
        this.album.push(name);
    }

    findByID(ID: number): any {
        this.album.forEach((value, index, array) => {
            if (ID === value.ID) {
                console.log(index);
            } else return -1;
        })
    }

    findByName(name: string): any {
        return this.album.findIndex(function (value, index, obj) {
            return name==value.name
        })
    }

    deleteAlbum(ID: number): void {
        let deleteIndext = this.findByID(ID);
        if (deleteIndext == -1) {
            console.log("khong tim duoc vi tri can xoa");

        } else {
            this.album.splice(deleteIndext, 1);
        }
    }


    showSong(ID: number) {
        this.album.forEach((value, index, array) => {
            if (ID == value.ID) {
                console.log(array[index]);
            }
            return -1
        })
    }

    editNameAlbum(name: string, name1: string): void {
        for (let i = 0; i < this.album.length; i++) {
            if (name == this.album[i].name) {
                this.album[i].name = name1
            }
        }
    }

    showAlbum() {
        return this.album
    }

    getCount(): number {
        return this.countAlbum++
    }

    findIDByName(name: string): any {
        this.album.forEach((value, index, array) => {
            if (name == value.name) {
                return value.ID;
            } else -1;
        })

    }





}


// albummanager.findByID(4);
// console.table(albummanager)

// albummanager.showSong(3);


// albummanager.editNameAlbum("album3","phong");
// console.table(albummanager);
// albummanager.showAlbum();


