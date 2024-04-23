import React, { useEffect, useState } from "react";
import Book from "../../../Models/Book";
import { getAllImage } from "../../../api/ImageAPI";
import { Image } from "../../../Models/Image";

interface BookProps {
    book: Book;
}

const BookProps: React.FC<BookProps> = (props) => {
    const BookId: string = props.book.id;
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
    console.log(listImage[0]);
    
    if (loading) {
        return (
            <div>
                <h1>Loading.....</h1>
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
        <div className="xuhuongmuasam-container-item">
            <div className="xuhuongmuasam-container-item-image">
                {listImage[0].url && <img src={listImage[0].url} alt={props.book.bookName} />}
                <div className="new-label-pro-sale">
                    <span>{Math.round((1 - (props.book.price / props.book.originalPrice)) * 100)}%
                    </span>
                </div>
            </div>
            <div className="product-info">
                <span className="product-name">{props.book.bookName}</span>
                <span className="xuhuongmuasam-price-special">{props.book.price} VNĐ</span>
                <span className="xuhuongmuasam-price-old">{props.book.originalPrice} VNĐ</span>
            </div>
            <div className="ratingbox">
                <div className="rating">
                    <div style={{ width: '33%' }} className="rating-item"></div>
                </div>
                <span className="rating-count">(1)</span>
            </div>

            <div className="progress">
                <div className="progress-bar" style={{ width: '85%' }}></div>
                <span className="progress-label">Đã bán 12</span>
            </div>

        </div>
    )
}

export default BookProps