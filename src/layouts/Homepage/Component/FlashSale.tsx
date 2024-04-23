import React from "react";
const FlashSale:React.FC = ()=>{
    return(
        <div>
            <div className="flashsale-header">
                <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/ico_flashsale@3x.png"
                     style={{width: '25px', height: '25px', marginLeft: '10px'}}/>

                <span className="flashsale-header-title" style={{marginRight: '5px'}}>FLASH SALE | </span>
                <span className="flashsale-page-countdown-label">Kết thúc trong</span>
                <div className="flashsale-header-countdown">
                    <span className="flashsale-header-countdown-item">00</span>
                    <span>:</span>
                    <span className="flashsale-header-countdown-item">40</span>
                    <span>:</span>
                    <span className="flashsale-header-countdown-item">26</span>
                </div>
            </div>
            <div className="flashsale-section">


                <div className="flashsale-container">
                    <div className="flashsale-container-item">
                        <div className="flashsale-container-item-image">
                            <img src={require('../../../images/books/flash1.jpg')} alt="flashsale1"/>
                            <div className="new-label-pro-sale">
                                <span>85%</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <span className="product-name">Bộ tô màu gỗ hình con voi - Star Kid</span>
                            <span className="flashsale-price-special">7.000</span>
                            <span className="flashsale-price-old">49.000</span>
                        </div>

                        <div className="progress">
                            <div className="progress-bar" style={{width: '85%'}}></div>
                            <span className="progress-label">Đã bán 12</span>
                        </div>

                    </div>

                    <div className="flashsale-container-item">
                        <div className="flashsale-container-item-image">
                            <img src={require('../../../images/books/flash2.jpg')} alt="flashsale2"/>
                            <div className="new-label-pro-sale">
                                <span>79%</span>
                            </div>
                        </div>

                        <div className="product-info">
                            <span className="product-name">Sáp nặn hộp giấy 10 màu cực xịn xuất khẩu Việt Nam</span>
                            <span className="flashsale-price-special">7.000</span>
                            <span className="flashsale-price-old">33.500</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '13%'}}></div>
                            <span className="progress-label">Đã bán 18</span>
                        </div>
                    </div>

                    <div className="flashsale-container-item">
                        <div className="flashsale-container-item-image">
                            <img src={require('../../../images/books/flash3.jpg')} alt="flashsale3"/>
                            <div className="new-label-pro-sale">
                                <span>78%</span>
                            </div>
                        </div>

                        <div className="product-info">
                            <span className="product-name">Ehon - Tu tu xình xịch, tu tu xình xịch</span>
                            <span className="flashsale-price-special">7.000</span>
                            <span className="flashsale-price-old">32.000</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '53%'}}></div>
                            <span className="progress-label">Đã bán 78</span>
                        </div>
                    </div>

                    <div className="flashsale-container-item">
                        <div className="flashsale-container-item-image">
                            <img src={require('../../../images/books/flash4.jpg')} alt="flashsale4"/>
                            <div className="new-label-pro-sale">
                                <span>77%</span>
                            </div>
                        </div>

                        <div className="product-info">
                            <span
                                className="product-name">Tranh tô màu A4 Paint Number cực tốt, chất liệu giấy cao cấp</span>
                            <span className="flashsale-price-special">20.000</span>
                            <span className="flashsale-price-old">88.000</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '33%'}}></div>
                            <span className="progress-label">Đã bán 57</span>
                        </div>
                    </div>

                    <div className="flashsale-container-item">
                        <div className="flashsale-container-item-image">
                            <img src={require('../../../images/books/flash5.jpg')} alt="flashsale5"/>
                            <div className="new-label-pro-sale">
                                <span>77%</span>
                            </div>
                        </div>

                        <div className="product-info">
                            <span
                                className="product-name">Hộp bút bi Thiên Long còn hạn sử dụng, cực mới, 20 bút 0.5mm</span>
                            <span className="flashsale-price-special">25.000</span>
                            <span className="flashsale-price-old">110.000</span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width: '74%'}}></div>
                            <span className="progress-label">Đã bán 78</span>
                        </div>
                    </div>
                </div>
                <div className="center_center">
                    <a className="flashsale-xemthem">Xem thêm</a>
                </div>
            </div>
        </div>
        //

    )
}
export default FlashSale