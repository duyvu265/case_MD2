"use strict";
exports.__esModule = true;
exports.AlbumManager = exports.ALBUM = void 0;
var ALBUM = /** @class */ (function () {
    function ALBUM(name, ID) {
        this.arrSong = [];
        this.arrAlbum = [];
        this._name = name;
        this._ID = ID;
    }
    Object.defineProperty(ALBUM.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ALBUM.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        enumerable: false,
        configurable: true
    });
    ALBUM.prototype.set_ID = function (value) {
        this._ID = value;
    };
    ALBUM.prototype.findByName = function (name) {
        return this.arrSong.findIndex(function (value, index, obj) {
            return name == value.name;
        });
    };
    ALBUM.prototype.findByID = function (ID) {
        this.arrSong.forEach(function (value, index, array) {
            if (ID === value.ID) {
                console.log(index);
            }
            else
                return -1;
        });
    };
    return ALBUM;
}());
exports.ALBUM = ALBUM;
var AlbumManager = /** @class */ (function () {
    function AlbumManager() {
        this.album = [];
        this.arrSong = [];
        this.countAlbum = 5;
        var album1 = new ALBUM("album1", 0);
        var album2 = new ALBUM("album2", 1);
        var album3 = new ALBUM("album3", 2);
        var album4 = new ALBUM("album4", 3);
        this.album.push(album1);
        this.album.push(album2);
        this.album.push(album3);
        this.album.push(album4);
    }
    AlbumManager.prototype.getAlbum = function () {
        return this.album;
    };
    AlbumManager.prototype.addAlbum = function (name) {
        this.album.push(name);
    };
    AlbumManager.prototype.findByID = function (ID) {
        this.album.forEach(function (value, index, array) {
            if (ID === value.ID) {
                console.log(index);
            }
            else
                return -1;
        });
    };
    AlbumManager.prototype.findByName = function (name) {
        return this.album.findIndex(function (value, index, obj) {
            return name == value.name;
        });
    };
    AlbumManager.prototype.deleteAlbum = function (ID) {
        var deleteIndext = this.findByID(ID);
        if (deleteIndext == -1) {
            console.log("khong tim duoc vi tri can xoa");
        }
        else {
            this.album.splice(deleteIndext, 1);
        }
    };
    AlbumManager.prototype.showSong = function (ID) {
        this.album.forEach(function (value, index, array) {
            if (ID == value.ID) {
                console.log(array[index]);
            }
            return -1;
        });
    };
    AlbumManager.prototype.editNameAlbum = function (name, name1) {
        for (var i = 0; i < this.album.length; i++) {
            if (name == this.album[i].name) {
                this.album[i].name = name1;
            }
        }
    };
    AlbumManager.prototype.showAlbum = function () {
        return this.album;
    };
    AlbumManager.prototype.getCount = function () {
        return this.countAlbum++;
    };
    AlbumManager.prototype.findIDByName = function (name) {
        this.album.forEach(function (value, index, array) {
            if (name == value.name) {
                return value.ID;
            }
            else
                -1;
        });
    };
    return AlbumManager;
}());
exports.AlbumManager = AlbumManager;
// albummanager.findByID(4);
// console.table(albummanager)
// albummanager.showSong(3);
// albummanager.editNameAlbum("album3","phong");
// console.table(albummanager);
// albummanager.showAlbum();
