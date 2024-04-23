import React from "react";

const tophead = require('../../images/public/tophead.jpg');
const search1 = require('../../images/books/search1.jpg');
const search2 = require('../../images/books/search2.jpg');
const search3 = require('../../images/books/search3.jpg');
const search4 = require('../../images/books/search4.jpg');
const search5 = require('../../images/books/search5.jpg');
const search6 = require('../../images/books/search6.jpg');

const Navbar: React.FC = () => {
    function toggleLanguage(): void {
        let language = document.getElementById("top-language-dropdown") as HTMLElement;
        if (language.style.display === "block") {
            language.setAttribute("style", "display: none;");
        } else {
            language.setAttribute("style", "display: block;");
        }
    }

    return (
        <nav>
            <div className="top-bar-desktop">
                <div className="top-banner center_center">
                    <a>
                        <img src={tophead} alt="tophead"/>
                    </a>
                </div>
                <div className="top-bar mouse-hover">
                    <div className="top-bar-left">
                        <a href="/">
                            <div className="top-bar-logo"></div>
                        </a>
                    </div>

                    <div className="top-bar-category mouse-hover">
                        <span className="top-bar-category-menu"></span>
                        <span className="top-bar-category-seemore"></span>
                        <div className="top-bar-category-container">
                            <div className="top-bar-category-container-left">
                                <h1>Danh mục sản phẩm</h1>
                                <h2>Sách trong nước</h2>
                                <h2>Sách nước ngoài</h2>
                                <h2>Văn phòng phẩm</h2>
                                <h2>Đồ chơi</h2>
                                <a href="#" id="lamdepsuckhoe">Làm đẹp - sức khoẻ</a>
                                <h2>Hành trang đến trường</h2>
                                <h2>Văn phòng phẩm theo thương hiệu</h2>
                                <h2>Đồ chơi theo thương hiệu</h2>
                                <h2>Bách hoá phụ kiện</h2>
                            </div>

                            <div className="top-bar-category-container-right" id="top-bar-category-container-right">
                                <div className="top-bar-category-container-right-title">
                                    <i className="ico_lamdepsuckhoe"></i>
                                    <span>Làm đẹp sức khoẻ</span>
                                </div>
                                `
                                <div className="top-bar-category-container-right-menu">
                                    <h3>LÀM ĐẸP - SỨC KHOẺ</h3>
                                    <a href="#">Khẩu trang các loại</a>
                                    <a href="#">Nước rửa tay - xà phòng</a>
                                    <a href="#">Băng keo cá nhân</a>
                                    <a href="#">Khăn giấy - giấy ướt</a>
                                    <a href="#">Chăm sóc cá nhân khác</a>
                                    <a href="#">Chăm sóc làm đẹp</a>
                                    <a href="#" style={{color: 'blue'}}>Xem tất cả</a>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="top-bar-search-container">
                        <div className="top-bar-search">
                            <input type="text" placeholder="Tìm kiếm sản phẩm mong muốn..."/>
                            <span className="button"><span className="top-bar-search-icon"></span></span>

                        </div>
                        <div className="top-bar-search-info">
                            <div className="top-bar-search-info-headline">
                                <span className="top-bar-search-info-headline-label">Cặp sách mới - kiến thức mới</span>
                                <img className=" lazyloaded"
                                     src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Artboard_11.3.jpg"
                                     data-src="https://cdn0.fahasa.com/media/wysiwyg/Duy-VHDT/Artboard_11.3.jpg"/>
                            </div>

                            <div className="tu-khoa-hot">
              <span><img
                  src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_searchtrending_black.svg"/></span>
                                <span>Từ khoá Hot</span>
                            </div>

                            <div className="tu-khoa-hot-container">
                                <div className="tu-khoa-hot-item col-md-4">
                                    <img src={search1} alt="search1"/>
                                    <span>Muôn kiếp nhân sinh</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-4">
                                    <img src={search2} alt="search2"/>
                                    <span>Giải tích cực chill</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-4">
                                    <img src={search3} alt="search3"/>
                                    <span>Cây cam chanh của tôi</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-4">
                                    <img src={search4} alt="search4"/>
                                    <span>Thỏ tám màu</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-4">
                                    <img src={search5} alt="search5"/>
                                    <span>Bói tarot cực chuẩn</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-4">
                                    <img src={search6} alt="search6"/>
                                    <span>Sách tâm lý cực cuốn</span>
                                </div>
                            </div>
                            <div className="block_line" style={{marginTop: '10px'}}>
                                <div></div>
                            </div>

                            <div className="tu-khoa-hot" style={{marginTop: '10px'}}>
              <span><img width="20px" height="20px"
                         src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/ico_menu.svg"/></span>
                                <span>Chuyên mục nổi bật</span>
                            </div>

                            <div className="tu-khoa-hot-container" style={{marginTop: '20px', marginBottom: '20px'}}>
                                <div className="tu-khoa-hot-item col-md-3">
                                    <img src={search3} alt="search3"/>
                                    <span>Cây cam chanh của tôi</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-3">
                                    <img src={search4} alt="search4"/>
                                    <span>Thỏ tám màu</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-3">
                                    <img src={search5} alt="search5"/>
                                    <span>Bói tarot cực chuẩn</span>
                                </div>
                                <div className="tu-khoa-hot-item col-md-3">
                                    <img src={search6} alt="search6"/>
                                    <span>Sách tâm lý cực cuốn</span>
                                </div>
                            </div>

                        </div>


                    </div>


                    <div className="center_center mouse-hover top-notif ">
                        <a className="top-button-icon">
                            <div className="center_center" style={{marginBottom: '3px'}}>
                                <div className="icon_nofi_gray"></div>
                            </div>
                            <div className="center_center">
                                <div className="top_menu_label">Thông Báo</div>
                            </div>
                        </a>
                        <div className="top-dropdown">
                            <div className="dropdown-pad">
                                <div className="center_center" style={{fontSize: '1.23em', color: '#0D0E0F'}}>
                                    <span className="icon_nofi_black" style={{marginRight: '5px'}}></span>
                                    <span>Thông báo</span>
                                </div>
                            </div>
                            <div className="center_center">
                                <span className="ico_notlogin"></span>
                            </div>
                            <div className="center_center"
                                 style={{color: '#0D0E0F', fontSize: '1.23em', marginTop: '10px'}}>Vui
                                lòng
                                đăng nhập để
                            </div>
                            <div className="center_center"
                                 style={{color: '#0D0E0F', fontSize: '1.23em', paddingBottom: '24px'}}>xem
                                thông báo
                            </div>
                            <button style={{marginTop: '5px'}} type="button" className="button-default active">
                                <span>Đăng nhập</span>
                            </button>
                            <button style={{marginTop: '10px'}} type="button" className="button-default">
                                <span>Đăng ký</span>
                            </button>
                        </div>
                    </div>
                    <div className="center_center mouse-hover">
                        <a className="top-button-icon">
                            <div className="center_center" style={{marginBottom: '3px'}}>
                                <div className="icon_cart_gray"></div>
                            </div>
                            <div className="center_center">
                                <div className="top_menu_label">Giỏ hàng</div>
                            </div>
                        </a>
                    </div>
                    <div className="center_center mouse-hover top-account">
                        <a className="top-button-icon">
                            <div className="center_center" style={{marginBottom: '3px'}}>
                                <div className="icon_account_gray"></div>
                            </div>
                            <div className="center_center">
                                <div className="top_menu_label">Tài khoản</div>
                            </div>
                        </a>
                        <div className="top-dropdown"
                             style={{padding: '5px 10px 15px 10px', marginTop: '60px', width: '16%'}}>
                            <button style={{marginTop: '5px'}} type="button" className="button-default active">
                                <span>Đăng nhập</span>
                            </button>
                            <button style={{marginTop: '5px'}} type="button" className="button-default">
                                <span>Đăng ký</span>
                            </button>
                            <button style={{marginTop: '5px'}} type="button" className="button-facebook center_center">
                                <span className="icon_facebook"></span>
                                <span>Đăng nhập bằng Facebook</span>
                            </button>

                        </div>
                    </div>

                    <div className="center_center top-language mouse-hover" onClick={toggleLanguage}>
                        <div className="top-language-flag center_center">
                            <span className="top-language-flag-icon"></span>
                            <span className="top-language-flag-seemore"></span>
                        </div>
                        <div className="top-language-dropdown" style={{display: 'none'}} id="top-language-dropdown">
                            <div className="top-language-dropdown-item center_center">
                                <span className="top-language-flag-icon"></span>
                                <span className="top-language-dropdown-item-label">VN</span>
                            </div>
                            <div className="top-language-dropdown-item center_center">
                                <span className="top-language-flag-icon-eng"></span>
                                <span className="top-language-dropdown-item-label">EN</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="top-bar-mobile">
                <div className="top-banner-mobile">
                    <a>
                        <img src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/fahasa-logo.png"
                             alt="FAHASA.COM"/>
                    </a>
                </div>

                <div className="top-bar-child-mobile">
                    <div className="top-bar-category-mobile mouse-hover">
                        <span className="ico_menu_white"></span>
                    </div>

                    <div className="top-bar-search-mobile">
                        <input type="text" placeholder="Tìm kiếm sản phẩm mong muốn..."/>
                    </div>

                    <div className="top-bar-mobile-icon center_center">
                        <span className="icon_cart_white"></span>
                    </div>

                    <div className="top-bar-mobile-icon center_center">
                        <span className="login-cutomer-icon"></span>
                    </div>

                </div>


            </div>

        </nav>
    );
}
export default Navbar;

