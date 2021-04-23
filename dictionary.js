class Dictionary{
    constructor(){
        this.dictionary = {}
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();

phoneBook.add('Mahi', '01755522232');
phoneBook.add('Mrasel', '01700022232');
phoneBook.add('okhil', '01711122232');
phoneBook.add('sumi', '0175500032');

console.log(phoneBook.dictionary);

const mahi = phoneBook.get('Mahi');
console.log(mahi)