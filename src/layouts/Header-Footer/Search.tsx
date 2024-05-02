import React, { useEffect, useState } from "react";
import Book from "../../Models/Book";
import { Image } from "../../Models/Image";
import { getAllImage } from "../../api/ImageAPI";

interface SearchProps {
    book: Book;
}
const SearchProps: React.FC<SearchProps> = (props) => {
    const BookId: string = props.book.id;
    const [list, setList] = useState<Book[]>([])
    const [listImage, setListImage] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getAllImage(BookId)
            .then(
                imageData => {
                    setListImage(imageData)
                    setLoading(false);
                }
            )
            .catch(
                error => {
                    setError(error);
                }
            )
    }, [] // chi goi 1 lan
    )
    
    if (loading) {
        return (
            <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            </div>
        )
    }
    if (error) {
        return (
            <div>
                <h1>Error: {error}</h1>
            </div>
        )
    }
    return (
        <div className="tu-khoa-hot-item col-md-4">
            <img src={listImage[0].url} alt={listImage[0].imageName} />
            <span>{props.book.bookName}</span>
        </div>
    )
}
export default SearchProps