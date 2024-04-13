class Media {
    constructor (title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(newCheckOut) {
        this.isCheckedOut = nexCheckOut;
    }

    get ratings() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut) {
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }

    getAverageRating() {
        const ratingsSum = (this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0))
        const averageRating = ratingsSum / this._ratings.length;
        return averageRating;
    }

    addRating(newRating) {
        if (newRating > 0 && newRating <= 5) {
            this._ratings.push(newRating);
        }
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;    
    }
}

class Movie extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }
    
    get director() {
        return this._director;
    }

    get runtime() {
        return this._runtime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History Of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(5);
speed.addRating(1);
speed.addRating(1);
console.log(speed.getAverageRating());