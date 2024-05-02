import React, { useEffect, useState } from "react";
import Book from "../../../Models/Book";
import { Image } from "../../../Models/Image";
import { getAllImage } from "../../../api/ImageAPI";
interface BookProps {
    book: Book;
}
const RelatedProps: React.FC<BookProps> = (props) => {
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
    return (
        <div className="sale-item">
            <a href="">
                {listImage.length > 0 && listImage[0].url && <img src={listImage[0].url} alt={props.book.bookName} />}
                <h3>
                    {props.book.bookName}
                </h3>
            </a>

            <div className="trend-price fld-row">
                <div className="price-item">
                    <span>{props.book.price} đ</span>
                    <span>{props.book.originalPrice} đ</span>
                </div>
                <div className="price-sold">
                    <span className="price-sale">-{Math.round((1 - (props.book.price / props.book.originalPrice)) * 100)}%</span>
                    <span>Đã bán 432</span>
                </div>
            </div>

            <div className="trend-star">
                <ul>
                    <li>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-star"></i>
                    </li>
                    <li>
                        <i className="fa-regular fa-star-half-stroke"></i>
                    </li>
                </ul>
                <span>4.4</span>
            </div>
        </div>
    )
}
export default RelatedProps