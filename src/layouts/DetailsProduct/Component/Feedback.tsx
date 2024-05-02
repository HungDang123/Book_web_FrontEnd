import React, { useEffect } from "react";

const Feedback: React.FC = () => {

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

    // QUANTITY PRICE
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
                minusButton.removeEventListener('click', () => {});
                plusButton.removeEventListener('click', () => {});
            }
        };
    }, []); // Empty dependency array means this effect runs once after the first render
    
    return (
        <main className="product-same">
            <div className="container">
                <div className="voucher-content">
                    <div className="voucher-header vote-cl-icon">
                        <i className="fa-solid fa-star"></i>
                        <h2>Đánh giá sản phẩm</h2>
                    </div>

                    <div className="vote-header">
                        <div className="vote-data">
                            <div className="vote-number">
                                <div className="vote-number-content">
                                    <span>4.5</span>
                                    <span>/ 5</span>
                                </div>
                                <ul className="vote-star">
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
                                        <i className="fa-solid fa-star-half-stroke"></i>
                                    </li>
                                </ul>
                                <span className="number-vote">(3 đánh giá)</span>
                            </div>

                            <div className="vote-process">
                                <div className="vote-process-item">
                                    <span>5 sao</span>
                                    <div className="progress-bar">
                                        <div className="progress"></div>
                                    </div>
                                    <span>90%</span>
                                </div>
                                <div className="vote-process-item">
                                    <span>4 sao</span>
                                    <div className="progress-bar">
                                        <div className="progress pro-10"></div>
                                    </div>
                                    <span>10%</span>
                                </div>
                                <div className="vote-process-item">
                                    <span>3 sao</span>
                                    <div className="progress-bar">
                                        <div className="progress pro-0"></div>
                                    </div>
                                    <span>0%</span>
                                </div>
                                <div className="vote-process-item">
                                    <span>2 sao</span>
                                    <div className="progress-bar">
                                        <div className="progress pro-0"></div>
                                    </div>
                                    <span>0%</span>
                                </div>
                                <div className="vote-process-item">
                                    <span>1 sao</span>
                                    <div className="progress-bar">
                                        <div className="progress pro-0"></div>
                                    </div>
                                    <span>0%</span>
                                </div>
                            </div>
                        </div>
                        <span className="vote-label">
                            Chỉ có thành viên mới có thể viết nhận xét. Vui lòng
                            <a href="">đăng nhập</a> hoặc <a href="">đăng ký</a>.
                        </span>
                    </div>

                    <div className="vote-body">
                        <nav className="voucher-nav">
                            <ul>
                                <li>
                                    <button>Mới nhất</button>
                                </li>
                                <li>
                                    <button>Cũ nhất</button>
                                </li>
                                <li>
                                    <button>Yêu thích nhất</button>
                                </li>
                            </ul>
                        </nav>

                        <div className="vote-list">
                            <div className="vote-item pt-0">
                                <div className="vote-user">
                                    <img src="../../img/Detail/Vote/avt 1.jpg" alt="" />

                                    <div className="vote name">
                                        <b>Bùi Minh Phượng</b>
                                        <div className="vote-time">
                                            <i>04/09/2020</i>
                                            <i>09:55</i>
                                        </div>
                                    </div>
                                </div>

                                <div className="vote-text">
                                    <ul className="vote-star fl-start">
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
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>

                                    <p>
                                        Đây là lần đầu mình đặt sách ở đây và đến lúc
                                        nhận hàng thì thấy khá ưng, gói hàng rất kĩ và
                                        không ngờ giao hàng nhanh đến vậy 😊 Sách rất
                                        đẹp và không bị loang chữ 👍
                                    </p>

                                    <ul className="vote-img">
                                        {/* <li>
                                            <img src="../../img/Detail/Deatail/img 1.jpg" alt=""  />
                                        </li>
                                        <li>
                                            <img src="../../img/Detail/Deatail/img 2.jpg" alt="" onClick="showImage(this.src)" />
                                        </li>
                                        <li>
                                            <img src="../../img/Detail/Deatail/img 3.jpg" alt="" onClick="showImage(this.src)" />
                                        </li>
                                        <li>
                                            <img src="../../img/Detail/Deatail/img 4.jpg" alt="" onClick="showImage(this.src)" />
                                        </li> */}
                                    </ul>

                                    <div id="fullscreen-image" className="fullscreen-image">
                                        <img id="fullscreen-image-src" className="fullscreen-image-src" src="" alt="" />
                                        <span className="close-button" onClick={closeFullscreenImage}>&times;</span>
                                        <div className="navigation-buttons">
                                            <button className="navigation-button" id="prev-button">
                                                &lt;
                                            </button>
                                            <button className="navigation-button" id="next-button" >
                                                &gt;
                                            </button>
                                        </div>
                                    </div>

                                    <div className="vote-interac">
                                        <button className="vote-like" tabIndex={0}>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                            <span>Thích</span>
                                            <span>(2)</span>
                                        </button>

                                        <button className="vote-report">
                                            <i className="fa-solid fa-circle-info"></i>
                                            <span>Báo cáo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="vote-item">
                                <div className="vote-user">
                                    <img src="../../img/Detail/Vote/avt 2.jpg" alt="" />

                                    <div className="vote name">
                                        <b>Hoa Nguyen</b>
                                        <div className="vote-time">
                                            <i>15/11/2022</i>
                                            <i>15:41</i>
                                        </div>
                                    </div>
                                </div>

                                <div className="vote-text">
                                    <ul className="vote-star fl-start">
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
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>

                                    <p>
                                        Giao hàng nhanh, gói đẹp còn cả túi nilong bọc
                                        ngoài. Có bookmark, chất lượng chữ in, giấy rất
                                        tốt. Nội dung thì mình chưa kịp thẩm hết nhưng
                                        đọc sơ qua cũng khá là hay.
                                    </p>

                                    <ul className="vote-img">
                                        {/* <li>
                                            <img src="../../img/Detail/Deatail/img 7.jpg" alt="" onClick="showImage(this.src)" />
                                        </li>
                                        <li>
                                            <img src="../../img/Detail/Deatail/img 8.jpg" alt="" onClick="showImage(this.src)" />
                                        </li>
                                        <li>
                                            <img src="../../img/Detail/Deatail/img 9.jpg" alt="" onClick="showImage(this.src)" />
                                        </li> */}
                                    </ul>

                                    <div id="fullscreen-image" className="fullscreen-image">
                                        <img id="fullscreen-image-src" className="fullscreen-image-src" src="" alt="" />
                                        <span className="close-button" onClick={closeFullscreenImage}>&times;</span>
                                        <div className="navigation-buttons">
                                            <button className="navigation-button" id="prev-button" >
                                                &lt;
                                            </button>
                                            <button className="navigation-button" id="next-button">
                                                &gt;
                                            </button>
                                        </div>
                                    </div>

                                    <div className="vote-interac">
                                        <button className="vote-like" tabIndex={0}>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                            <span>Thích</span>
                                            <span>(1)</span>
                                        </button>

                                        <button className="vote-report">
                                            <i className="fa-solid fa-circle-info"></i>
                                            <span>Báo cáo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="vote-item">
                                <div className="vote-user">
                                    <img src="../../img/Detail/Vote/avt 3.jpg" alt="" />

                                    <div className="vote name">
                                        <b>Anh Minh</b>
                                        <div className="vote-time">
                                            <i>03/05/2023</i>
                                            <i>22:14</i>
                                        </div>
                                    </div>
                                </div>

                                <div className="vote-text">
                                    <ul className="vote-star fl-start">
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
                                            <i className="fa-regular fa-star"></i>
                                        </li>
                                    </ul>

                                    <p>
                                        Sách đẹp chữ in đậm rõ nét. Đóng gói còn hơi sơ
                                        sài nên bị trầy nhẹ ở góc sách nhưng nói chung
                                        vẫn ổn 🙂
                                    </p>

                                    <ul className="vote-img">
                                        {/* <li>
                                            <img src="../../img/Detail/Deatail/img 10.jpg" alt="" onClick="showImage(this.src)" />
                                        </li>
                                        <li>
                                            <img src="../../img/Detail/Deatail/img 11.jpg" alt="" onClick="showImage(this.src)" />
                                        </li>
                                        <li>
                                            <img src="../../img/Detail/Deatail/img 12.jpg" alt="" onClick="showImage(this.src)" />
                                        </li> */}
                                    </ul>

                                    <div id="fullscreen-image" className="fullscreen-image">
                                        <img id="fullscreen-image-src" className="fullscreen-image-src" src="" alt="" />
                                        <span className="close-button" onClick={closeFullscreenImage}>&times;</span>
                                        <div className="navigation-buttons">
                                            <button className="navigation-button" id="prev-button" >
                                                &lt;
                                            </button>
                                            <button className="navigation-button" id="next-button" >
                                                &gt;
                                            </button>
                                        </div>
                                    </div>

                                    <div className="vote-interac">
                                        <button className="vote-like" tabIndex={0}>
                                            <i className="fa-solid fa-thumbs-up"></i>
                                            <span>Thích</span>
                                            <span>(0)</span>
                                        </button>

                                        <button className="vote-report">
                                            <i className="fa-solid fa-circle-info"></i>
                                            <span>Báo cáo</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Feedback;