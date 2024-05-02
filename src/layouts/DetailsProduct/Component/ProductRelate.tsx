import React, { useEffect, useState } from "react";
import Book from "../../../Models/Book";
import { getAllBook } from "../../../api/BookAPI";
import RelatedProps from "./RelatedProps";

const ProductRelated: React.FC = () => {

    const [listBook, setListBook] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    let [size, setSize] = useState(5)
    useEffect(() => {
        getAllBook(size)
            .then(
                books => {
                    setListBook(books)
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
        <div>
            <main className="voucher">
                <div className="container">
                    <div className="voucher-content">
                        <div className="voucher-header">
                            <img
                                src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/event_cart_2/ico_coupon_red.svg?q=102306"
                                alt="" />
                            <h2>ƯU ĐÃI LIÊN QUAN</h2>
                        </div>

                        <nav className="voucher-nav">
                            <ul>
                                <li>
                                    <button>Tất cả</button>
                                </li>
                                <li>
                                    <button>Mã giảm giá</button>
                                </li>
                                <li>
                                    <button>Mã thanh toán</button>
                                </li>
                                <li>
                                    <button>Ưu đãi khác</button>
                                </li>
                            </ul>
                            <span>
                                Có thể áp dụng nhiều mã
                                <i className="fa-solid fa-circle-info"></i>
                            </span>
                        </nav>

                        <div className="voucher-list">
                            <div className="voucher-item">
                                <img src={require('../../../images/public/voucher.jpg')} alt="" />
                                <div className="voucher-item-text">
                                    <div className="voucher-item-header">
                                        <h3>MÃ GIẢM 10K - Đơn hàng từ 150K</h3>
                                        <button>Chi tiết</button>
                                    </div>
                                    <span>Không Áp Dụng Cho Phiếu Quà Tặng</span>
                                </div>
                            </div>

                            <div className="voucher-item">
                                <img src={require('../../../images/public/voucher.jpg')} alt="" />
                                <div className="voucher-item-text">
                                    <div className="voucher-item-header">
                                        <h3>MÃ GIẢM 10K - Đơn hàng từ 150K</h3>
                                        <button>Chi tiết</button>
                                    </div>
                                    <span>Không Áp Dụng Cho Phiếu Quà Tặng</span>
                                </div>
                            </div>
                            <div className="voucher-item">
                                <img src={require('../../../images/public/voucher.jpg')} alt="" />
                                <div className="voucher-item-text">
                                    <div className="voucher-item-header">
                                        <h3>MÃ GIẢM 10K - Đơn hàng từ 150K</h3>
                                        <button>Chi tiết</button>
                                    </div>
                                    <span>Không Áp Dụng Cho Phiếu Quà Tặng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            <main className="product-same">
                <div className="container">
                    <div className="voucher-content">
                        <div className="voucher-header">
                            <i className="fa-solid fa-book-open-reader"></i>
                            <h2>SẢN PHẨM LIÊN QUAN</h2>
                        </div>

                        <nav className="voucher-nav mb-0">
                            <ul>
                                <li>
                                    <button>Cùng tác giả</button>
                                </li>
                                <li>
                                    <button>Cùng nhà xuất bản</button>
                                </li>
                            </ul>
                        </nav>

                        <div className="sale-list pd mh-397">
                            {listBook.map((book) => (
                                <RelatedProps book={book} key={book.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ProductRelated