const bookObj1 = {
    name:'Book1',
    author:'Daniel',
    year: 1998
} 
const bookObj2 = {
    name:'Book2',
    author:'Yehezkely',
    year: 1996
} 

// getFirstPublished : (book1,book2) =>  book1.year > book2.year ? book2 : book1 ,
const bookUtils = {}


bookUtils.getFirstPublished = function (book1,book2) {
return  book1.year > book2.year ? book2 : book1 ;
} 

bookUtils.setNewEdition = function (book, edition ) {
    book.latestEdition = edition;
}

bookUtils.setLanguage = function (book, language) {
    book.language = language;
}
bookUtils.setLanguage(bookObj1, 'german');


bookUtils.setTranslation = function (book, language, translator){
    book.translation = {language , translator};
}

bookUtils.setPublisher = function(book, name, location){
    book.publisher = {name, location};
}
bookUtils.setPublisher(bookObj1, 'a' , 'b');
bookUtils.setPublisher(bookObj2, 'a' , 'b');


bookUtils.isSamePublisher = function(book1, book2){
    return book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location;
}
console.log(bookUtils.isSamePublisher(bookObj1, bookObj2));


