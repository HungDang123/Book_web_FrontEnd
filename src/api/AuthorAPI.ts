import React from "react";
import Book from "../Models/Book";
import { my_request } from "./Request";
import { Image } from "../Models/Image";
import Author from "../Models/Author";

export async function getAllAuthor(BookId: string): Promise<Author[]> {
    const result: Author[] = [];
    // xác định endpoints 
    const url: string = `http://localhost:8080/books/${BookId}/Authors`
    const response = await my_request(url);

    const responseData = response._embedded.authors;
    for (const key in responseData) {
        result.push({
            authorId: responseData[key].authorId,
            authorName: responseData[key].authorName,
            dateOfBirth: responseData[key].dateOfBirth,
            gender: responseData[key].gender
        });
    }
    console.log(result);
    
    return result
}