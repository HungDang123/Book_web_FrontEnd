import React from "react";
import Book from "../Models/Book";
import { my_request } from "./Request";
import { Image } from "../Models/Image";

export async function getAllImage(BookId:string): Promise<Image[]> {
    const result: Image[] = [];
    // xác định endpoints 
    const url: string =`http://localhost:8080/books/${BookId}/Images`
    const response = await my_request(url);

    const responseData = response._embedded.images;
    for (const key in responseData) {
        result.push({
            id: responseData[key].imageID,
            imageName: responseData[key].imageName,
            link: responseData[key].link,
            icon: responseData[key].icon,
            url: responseData[key].dataImage
        });
    }    
    return result
}