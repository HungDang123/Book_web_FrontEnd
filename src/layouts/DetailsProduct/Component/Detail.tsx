import React, { useEffect, useState } from "react";
import { Image } from "../../../Models/Image";
import { getAllImage } from "../../../api/ImageAPI";
import Book from "../../../Models/Book";
import { findByID } from "../../../api/BookAPI";
import Author from "../../../Models/Author";
const images: Record<string, string> = {
    i1: require('../../../images/Book/book1-1.jpg'),
    i2: require('../../../images/Book/book1-2.jpg'),
    i3: require('../../../images/Book/book1-3.jpg'),
    i4: require('../../../images/Book/book1-4.jpg'),
    i5: require('../../../images/Book/book1-5.jpg'),
    i6: require('../../../images/Book/book1-6.jpg'),
    flash_sale: ('../../../images/public/flash_sale.svg')
};
interface detailProps {
    book: Book,
    author: Author[]
}
const Detail: React.FC<detailProps> = ({ book, author }) => {
    const BookId: string = book.id;
    const [listImage, setListImage] = useState<Image[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [bookData, setBook] = useState<Book | null>();

    useEffect(() => {
        getAllImage(BookId)
            .then(
                imageData => {
                    setListImage(imageData);
                    console.log(imageData);
                    setLoading(false);

                })
            .catch(error => {
                setError(error);
            });
        findByID(BookId)
            .then(book => {
                setBook(book); console.log(book);
            })
            .catch(error => {
                setError(error);
            });
    }, [BookId]); // Thêm BookId vào mảng dependency



    useEffect(() => {
        const addEventListeners = () => {
            const minusButton = document.querySelector('.minus-btn') as HTMLElement;
            const plusButton = document.querySelector('.plus-btn') as HTMLElement;
            const quantityInput = document.querySelector("input[name='quantity']") as HTMLInputElement;

            if (minusButton && plusButton && quantityInput) {
                minusButton.addEventListener('click', function () {
                    const currentValue = parseInt(quantityInput.value);
                    if (currentValue > 1) {
                        quantityInput.value = (currentValue - 1).toString();
                    }
                });

                plusButton.addEventListener('click', function () {
                    const currentValue = parseInt(quantityInput.value);
                    quantityInput.value = (currentValue + 1).toString();
                });
            }
        };

        addEventListeners();

        // Cleanup function
        return () => {
            // Remove event listeners when component unmounts
            const minusButton = document.querySelector('.minus-btn') as HTMLElement;
            const plusButton = document.querySelector('.plus-btn') as HTMLElement;

            if (minusButton && plusButton) {
                minusButton.removeEventListener('click', () => { });
                plusButton.removeEventListener('click', () => { });
            }
        };
    }, []); // Empty dependency array means this effect runs once after the first render


    // SHOW IMG
    const showImage = (src: string) => {
        const fullscreenImage = document.getElementById('fullscreen-image') as HTMLElement;
        const fullscreenImageSrc = document.getElementById('fullscreen-image-src') as HTMLImageElement;

        fullscreenImageSrc.src = src;
        fullscreenImage.classList.add('show');
    };

    function closeFullscreenImage(): void {
        const fullscreenImage = document.getElementById('fullscreen-image') as HTMLElement;
        fullscreenImage.classList.remove('show');
    }

    if (loading) {
        return (
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Error: {error}</h1>
            </div>
        );
    }
    return (
        <main className="detail">
            <div className="container">
                <div className="detail-content">
                    <div className="detail-img">
                        <div className="detail-img-content">
                            <ul className="detail-img-list">
                                {
                                    listImage.map((img) => (
                                        <li>
                                            <img src={img.url} alt="" onClick={() => showImage(img.url)} />
                                        </li>
                                    ))
                                }
                            </ul>

                            <img className="detail-img-big" src={listImage[0].url} alt="" />

                            <div id="fullscreen-image" className="fullscreen-image">
                                <img id="fullscreen-image-src" className="fullscreen-image-src" src="" alt="" />
                                <span className="close-button" onClick={closeFullscreenImage}>&times;</span>
                                <div className="navigation-buttons">
                                    <button className="navigation-button" id="prev-button"
                                    >
                                        &lt;
                                    </button>
                                    <button className="navigation-button" id="next-button" >
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>

                        <ul className="detail-btn">
                            <li>
                                <button>
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span>Thêm vào giỏ hàng</span>
                                </button>
                            </li>
                            <li>
                                <button>Mua ngay</button>
                            </li>
                        </ul>
                    </div>

                    <div className="detail-text">
                        <h2>{bookData?.bookName}</h2>

                        <ul className="detail-info">
                            <li>Nhà cung cấp: <a href="">Minh Long</a></li>
                            <li>Tác giả: {" "}<a href="">{author.map((a,index) => (
                                <span key={a.authorName}>
                                {a.authorName}
                                {index !== author.length - 1 && ", "}
                                </span>
                            ))}</a></li>
                            <li>Nhà xuất bản: <span>Văn học</span></li>
                            <li>Hình thức bìa: <span>Bìa mềm</span></li>
                        </ul>

                        <div className="detail-vote">
                            <a className="sale-star row" href="">
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
                                <span>{bookData?.rating}</span>
                                <span>(204 đánh giá)</span>
                            </a>
                            <span className="cl-gray">Đã bán 412</span>
                        </div>

                        <div className="detail-fl-sale">
                            <div className="detail-time">
                                <img src={images.flash_sale} alt="" />

                                <div className="sale-time">
                                    <div className="hour">01</div>
                                    :
                                    <div className="minute">00</div>
                                    :
                                    <div className="second">00</div>
                                </div>
                            </div>

                            <div className="sale-process">
                                <span>Đã bán 37</span>
                                <span className="sale-value"></span>
                            </div>
                        </div>

                        <div className="detail-price">
                            <span>{bookData?.price} đ</span>
                            <span>{bookData?.originalPrice} đ</span>
                            {bookData && <span className="price-sale">-{Math.round((1 - (bookData?.price / bookData?.originalPrice)) * 100)}%</span>}
                        </div>

                        <ul className="detail-transport">
                            <li>Thời gian giao hàng</li>
                            <li>
                                Giao hàng đến
                                <span>
                                    <a href="">Thay đổi</a>
                                </span>
                            </li>
                            <li>Chính sách đổi trả</li>
                            <li>
                                Đổi trả sản phẩm trong 30 ngày
                                <span>
                                    <a href="">Xem thêm</a>
                                </span>
                            </li>
                        </ul>

                        <div className="detail-quantity">
                            <span>Số lượng:</span>

                            <div className="quantity">
                                <button className="minus-btn" type="button" name="button">
                                    -
                                </button>
                                <input type="text" name="quantity" value="1" />
                                <button className="plus-btn" type="button" name="button">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
export default Detail