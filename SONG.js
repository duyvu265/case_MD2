"use strict";
exports.__esModule = true;
exports.SongManager = exports.SONG = void 0;
var SONG = /** @class */ (function () {
    function SONG(songOfName, ID) {
        this._name = songOfName;
        this._ID = ID;
    }
    Object.defineProperty(SONG.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        enumerable: false,
        configurable: true
    });
    SONG.prototype.setID = function (value) {
        this._ID = value;
    };
    Object.defineProperty(SONG.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return SONG;
}());
exports.SONG = SONG;
var SongManager = /** @class */ (function () {
    function SongManager() {
        this.arr = [];
        this.count = 5;
        var song1 = new SONG("song1", 0);
        var song2 = new SONG("song2", 1);
        var song3 = new SONG("song3", 2);
        var song4 = new SONG("song4", 3);
        this.arr.push(song1);
        this.arr.push(song2);
        this.arr.push(song3);
        this.arr.push(song4);
    }
    SongManager.prototype.addSong = function (name) {
        this.arr.push(name);
    };
    SongManager.prototype.getID = function () {
        return this.count++;
    };
    SongManager.prototype.checkName = function (name) {
        var booleand = true;
        for (var i = 0; i < this.arr.length; i++) {
            if (name === this.arr[i].name) {
                booleand = false;
            }
            else
                booleand = true;
        }
        return booleand;
    };
    SongManager.prototype.findByName = function (name) {
        this.arr.filter(function (value, index, array) {
            if (name == array[index].name) {
                console.log(value);
            }
            return -1;
        });
    };
    SongManager.prototype.showSonginAlbum = function (name) {
        return this.arr.toString().includes(name);
    };
    SongManager.prototype.editName = function (name, name1) {
        for (var i = 0; i < this.arr.length; i++) {
            if (name == this.arr[i].name) {
                this.arr[i].name = name1;
            }
        }
    };
    SongManager.prototype.showSong = function () {
        console.table(this.arr);
    };
    SongManager.prototype.searchSongByNameInAlbum = function (nameSong) {
        var arrSong = this.arr;
        var result = arrSong.filter(function (element) { return element.name.includes(nameSong); });
        if (result.length === 0) {
            console.log('Eror - Khong tim thay bai hat nao co cung ten');
        }
        else {
            console.table(result);
        }
    };
    return SongManager;
}());
exports.SongManager = SongManager;
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
