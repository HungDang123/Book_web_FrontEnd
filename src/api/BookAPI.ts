import React from "react";
import Book from "../Models/Book";
import { my_request } from "./Request";

export async function getAllBook(): Promise<Book[]> {
    const result: Book[] = [];
    // xác định endpoints 
    const url: string = "http://localhost:8080/books";
    const response = await my_request(url);

    const responseData = response._embedded.books;
    for (const key in responseData) {
        result.push({
            id: responseData[key].bookID,
            bookName: responseData[key].bookName,
            description: responseData[key].description,
            originalPrice: responseData[key].listedPrice,
            price: responseData[key].price,
            stock: responseData[key].stock,
            rating: responseData[key].rating
        });
    }
    return result
}