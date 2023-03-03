export class SONG {

    private _songOfName: string;
    private _ID: number;

    constructor(songOfName: string, ID: number) {
        this._songOfName = songOfName;
        this._ID = ID;
    }

    get ID(): number {
        return this._ID;
    }

    set ID(value: number) {
        this._ID = value;
    }

    get songOfName(): string {
        return this._songOfName;
    }

    set_songOfName(value: string) {
        this._songOfName = value;
    }
}

class SongManager {
    arr: SONG[] = [];

    // count: number = 0;

    constructor() {
    }

    addSong(name: SONG): void {
        this.arr.push(name);
    }

    // getID() {
    //     return this.count++
    // }

    findByName(name: string): void {
        let newarr = this.arr.filter((value, index, array) => {
            if (name === value.songOfName) {
                return true
            }
        })
        console.table(newarr)
    }

    finByID(ID: number): any {
        this.arr.forEach((value, index, array) => {
            if (ID === value.ID) {
                console.log(index);
            }
            return -1;
        })
    }

    deleteSong(ID: number): void {
        let deleteIndext = this.finByID(ID);
        if (deleteIndext == -1) {
            console.log("khong thay doi tuong");
        } else {
            this.arr.splice(deleteIndext, 1);
        }
    }
    editName(name: string, name1: string): void {
        this.arr.forEach((value, index, array) => {
            if (name === value.songOfName) {
                this.arr[index].set_songOfName(name1);
            }
        })
    }
}

let arr = new SongManager();
let song1 = new SONG("i do", 5)
let song2 = new SONG("hello", 6)
let song3 = new SONG("can i help you", 7)
let song4 = new SONG("hi", 8)
arr.addSong(song1);
arr.addSong(song2);
arr.addSong(song3);
arr.addSong(song4);
arr.deleteSong(5);
console.table(arr);
arr.editName("i do", "phong");
console.table(arr);
arr.findByName("hi")




