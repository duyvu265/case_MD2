import {SONG} from "./SONG";

export class ALBUM {
    private _name: string;
    private _ID: number;

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

    set ID(value: number) {
        this._ID = value;
    }
}

export class AlbumManager {
    album: ALBUM[]=[];

    constructor() {
    }

    addAlbum(name: ALBUM): void {
        this.album.push(name);
    }

    findByID(ID: number): any {
        this.album.forEach((value, index, array) => {
            if (ID === value.ID) {
                return index
            } else return -1;
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


    showSong(ID:number){
        this.album.forEach((value, index, array)=>{
            if (ID==value.ID){
                console.log( array[index]);
            }
            return -1
        })
    }

    reName(name: string) {


    }

}

let album1 = new ALBUM("album1", 1)
let album2 = new ALBUM("album2", 2)
let album3 = new ALBUM("album3", 3)
let album4 = new ALBUM("album4", 4);
let albummanager = new AlbumManager();
albummanager.addAlbum(album1);
albummanager.addAlbum(album2);
albummanager.addAlbum(album3);
albummanager.addAlbum(album4);
albummanager.deleteAlbum(1);
albummanager.findByID(1);
console.log(albummanager)
albummanager.showSong(1);

