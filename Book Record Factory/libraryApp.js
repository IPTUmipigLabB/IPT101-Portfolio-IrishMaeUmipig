import { book, bookRecord, createBookRecord } from "./book.js";

const result = createBookRecord (book, "Available");

console.log("======= Book Record Factory =======");
console.log(result + "\n");

console.log(bookRecord.getbookLabel());