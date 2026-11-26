const book ={
    title: "Our Yesterday Escape",
    author: "Gwy Saludes",
    year: 2026
};

function createBookRecord (book, status) {
     return `Title: ${book.title} Author: ${book.author} Year: ${book.year} Status: ${status}`;
}

const bookRecord = {
    title: book.title,
    author: book.author,
    year: book.year,

    getbookLabel: function() {
        return `${this.title} by ${this.author} (${this.year})`;
    }
}

export { book, createBookRecord, bookRecord };