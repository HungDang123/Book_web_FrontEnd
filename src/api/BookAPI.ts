import React from "react";
import Book from "../Models/Book";
import { my_request } from "./Request";

export async function getAllBook(size: number): Promise<Book[]> {
    const result: Book[] = [];
    // xác định endpoints 
    const url: string = `http://localhost:8080/books?page=0&size=${size}`;
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
export async function search(query: string): Promise<Book[]> {
    const result: Book[] = [];
    // xác định endpoints 
    const url: string = `http://localhost:8080/books/search/findByBookNameContaining?BookName=${query}`;
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
export async function getPriceDesc(): Promise<Book[]> {
    const result: Book[] = [];
    // xác định endpoints 
    const url: string = `http://localhost:8080/books/search/findTop10ByOrderByListedPriceDesc`;
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

export async function findByID(id: string): Promise<Book | null> {
    // xác định endpoints 
    const url: string = `http://localhost:8080/books/${id}`;
    let result: Book;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Gặp lỗi trong quá trình gọi API lấy sách');
        }

        const BookData = await response.json();
        if (BookData) {
            return {
                id : BookData.bookID,
                bookName: BookData.bookName,
                description: BookData.description,
                originalPrice: BookData.listedPrice,
                price: BookData.price,
                stock: BookData.stock,
                rating: BookData.rating
            };
        }else{
            throw new Error("Sách không tồn tại")
        }
    } catch (error) {
        console.log("Error: "+error);
        return null
    }
}
