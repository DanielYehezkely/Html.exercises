const bookObj = {
    name: 'galaxy',
    author: 'universe',
    published: '2023',
    price: 'free'    
}  

const bookInfo = (obj) => {
    return `The book ${obj.name} was written by ${obj.author} in the year ${obj.published}`;
};

console.log(bookInfo(bookObj));
