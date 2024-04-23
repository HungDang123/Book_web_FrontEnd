import React from "react";
const tt1 = require('../../images/public/tt1.png');
const tt2 = require('../../images/public/tt2.png');
const tt3 = require('../../images/public/tt3.png');
const tt4 = require('../../images/public/tt4.png');
const tt5 = require('../../images/public/tt5.png');
const tt6 = require('../../images/public/tt6.png');
const tt7 = require('../../images/public/tt7.png');
const tt8 = require('../../images/public/tt8.png');
const tt9 = require('../../images/public/tt9.png');
const tt10 = require('../../images/public/tt10.jpg');

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="center_center_row">
                <div className="footer">
                    <div className="dangkynhanbantin">
                        <i className="fa-solid fa-envelope" style={{ fontSize: '20px', color: 'white' }}></i>
                        <span className="dangkynhanbantin-title">Đăng ký nhận bản tin</span>
                        <div className="nhapemail">
                            <input className="nhapemail-input" type="text" placeholder="Nhập email của bạn">
                            </input>
                            <button className="nhapemail-button">Đăng ký</button>
                        </div>
                    </div>
                    <div className="footer-container">
                        <div className="footer-container-left">
                            <div className="fahasa-logo">
                                <img alt="FAHASA.COM"
                                     src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo.png"/>
                            </div>

                            <div className="address-footer">Lầu 5, 387-389 Hai Bà
                                Trưng Quận 3 TP HCM
                            </div>
                            <div className="address-footer">Công Ty Cổ Phần Phát Hành
                                Sách TP HCM - FAHASA
                            </div>
                            <div className="address-footer">
                                60 - 62 Lê Lợi, Quận 1,
                                TP. HCM, Việt Nam

                            </div>
                            <div className="address-footer">Fahasa.com
                                nhận đặt hàng trực tuyến và giao hàng tận nơi. KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại
                                văn
                                phòng cũng như tất cả Hệ Thống Fahasa trên toàn quốc.
                            </div>

                            <div>
                                <a target="_blank" href="http://online.gov.vn/CustomWebsiteDisplay.aspx?DocId=19176">
                                    <img src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/logo-bo-cong-thuong-da-thong-bao1.png"
                                         style={{width: '100px'}} height="40px"/>
                                </a>
                            </div>

                            <div className="social-fahasa">
                                <a target="_blank" href="https://www.facebook.com/fahasa/" title="Facebook">
                                    <img alt="Facebook"
                                         src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/footer/Facebook-on.png"/>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/fahasa_official/" title="Instagram">
                                    <img alt="Instagram"
                                         src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Insta-on.png"/>
                                </a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCUZcVOLSxK1q6RfgzQ9-HYQ"
                                   title="Youtube">
                                    <img alt="Youtube"
                                         src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/Youtube-on.png"/>
                                </a>
                                <a target="_blank" href="https://fahasa-blog.tumblr.com/" title="Tumblr">
                                    <img alt="Tumblr"
                                         src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/tumblr-on.png"/>
                                </a>
                                <a target="_blank" href="https://twitter.com/Fahasa_com" title="Twitter">
                                    <img alt="Twitter"
                                         src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/twitter-on.png"/>
                                </a>
                                <a target="_blank" href="https://www.pinterest.com/fahasaVN/" title="Pinterest">
                                    <img alt="Pinterest"
                                         src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images//footer/pinterest-on.png"/>
                                </a>


                            </div>

                            <div className="download-fahasa">
                                <a href="https://play.google.com/store/apps/details?id=com.fahasa.android.fahasa">
                                    <img alt="FAHASA.COM" src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/android1.png"
                                         style={{ maxWidth: '110px' }}/>
                                </a>
                                <a href="https://itunes.apple.com/app/id1227597830?mt=8">
                                    <img alt="FAHASA.COM" src="https://cdn0.fahasa.com/media/wysiwyg/Logo-NCC/appstore1.png"
                                         style={{ maxWidth: '110px' }}/>
                                </a>
                            </div>

                        </div>

                        <div className="footer-container-right">
                            <div className="footer-menu-1">
                                <div className="footer-menu-1-1 col-md-4">
                                    <h2>Dịch vụ</h2>
                                    <a className="footer-link">Điều khoản sử dụng</a>
                                    <a className="footer-link">Chính sách bảo mật thông tin cá nhân</a>
                                    <a className="footer-link">Chính sách đổi trả và hoàn tiền</a>
                                    <a className="footer-link">Giới thiệu Fahasa</a>
                                    <a className="footer-link">Hệ thống cửa hàng</a>
                                </div>
                                <div className="footer-menu-1-1 col-md-4">
                                    <h2>Hỗ trợ khách hàng</h2>
                                    <a className="footer-link">Chính sách đổi trả - hoàn tiền</a>
                                    <a className="footer-link">Chính sách bảo hành</a>
                                    <a className="footer-link">Chính sách giao hàng</a>
                                    <a className="footer-link">Hướng dẫn mua hàng khách sỉ</a>
                                    <a className="footer-link">Hướng dẫn mua hàng trả góp</a>
                                </div>
                                <div className="footer-menu-1-1 col-md-4">
                                    <h2>Tài khoản của tôi</h2>
                                    <a className="footer-link">Đăng nhập/tạo mới tài khoản</a>
                                    <a className="footer-link">Quên mật khẩu</a>
                                    <a className="footer-link">Thông tin tài khoản</a>
                                    <a className="footer-link">Lịch sử mua hàng</a>
                                </div>
                            </div>
                            <h2>LIÊN HỆ</h2>
                            <div className="footer-menu-1" style={{marginTop:'10px'}}>
                                <div className="col-md-4"><em className="fa fa-map-marker" style={{fontSize:'12px'}}>&nbsp;</em>60-62 Lê
                                    Lợi, Q.1, TP. HCM</div>
                                <div className="col-md-4"><em className="fa fa-envelope"
                                                          style={{fontSize:'12px'}}>&nbsp;</em>cskh@fahasa.com.vn</div>
                                <div className="col-md-4"><em className="fa fa-phone" style={{fontSize:'12px'}}>&nbsp;</em>1900636467</div>
                            </div>
                            <div className="footer-menu-1">
                                <div className="col-md-5">
                                    <img src={tt1} alt="tt1"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt2} alt="tt2"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt3} alt="tt3"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt4} alt="tt4"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt5} alt="tt5"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt6} alt="tt6"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt7} alt="tt7"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt8} alt="tt8"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt9} alt="tt9"/>
                                </div>
                                <div className="col-md-5">
                                    <img src={tt10} alt="tt10"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
}
export default Footer