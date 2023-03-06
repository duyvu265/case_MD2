export class SONG {

    private _name: string;
    private _ID: number;

    constructor(songOfName: string, ID: number) {
        this._name = songOfName;
        this._ID = ID;
    }

    get ID(): number {
        return this._ID;
    }

    setID(value: number) {
        this._ID = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

  export class  SongManager {
    arr: Array<SONG> = [];

    count: number = 5;
    constructor() {
        let song1=new SONG("song1",0);
        let song2=new SONG("song2",1);
        let song3=new SONG("song3",2);
        let song4=new SONG("song4",3);
        this.arr.push(song1);
        this.arr.push(song2);
        this.arr.push(song3);
        this.arr.push(song4);

    }

    addSong(name: SONG): any {
        this.arr.push(name)
    }

    getID() {
        return this.count++
    }
    checkName(name:string):boolean{
        let booleand:boolean=true;
        for (let i = 0; i <this.arr.length ; i++) {
            if (name===this.arr[i].name){
                booleand=false;
            }else booleand=true;
        } return booleand;


    }

    findByName(name: string): any {
         this.arr.filter((value, index, array) => {
            if (name == array[index].name) {
                console.log( value);
            }return -1;
        })

    }showSonginAlbum(name:string){
          return this.arr.toString().includes(name)
      }

    editName(name: string, name1: string): void {
        for (let i = 0; i <this.arr.length ; i++) {
            if (name==this.arr[i].name){
                this.arr[i].name=name1
            }
        }
    }
    showSong(){
        console.table(this.arr)

    }
      searchSongByNameInAlbum(nameSong: string): void {
          let arrSong: SONG[] = this.arr;
          let result: SONG[] = arrSong.filter(element => element.name.includes(nameSong));
          if (result.length === 0) {
              console.log('Eror - Khong tim thay bai hat nao co cung ten');
          } else {
              console.table(result);
          }
      }
}

// let arr = new SongManager();
// let song1 = new SONG("i do", 5)
// let song2 = new SONG("hello", 6)
// let song3 = new SONG("can i help you", 7)
// let song4 = new SONG("can xoa", 8)
// let song5 = new SONG("hhhhi", 9)
// arr.addSong(song1);
// arr.addSong(song2);
// arr.addSong(song3);
// arr.addSong(song4);
// arr.addSong(song5);
// arr.findID("hhhhi")


// // arr.finByID(8);
// arr.deleteSong(8);
//
//
// console.log( arr)
// console.log(arr);
// arr.editName("i do", "phong");
// console.table(arr);
// arr.findByName("hi")
//



