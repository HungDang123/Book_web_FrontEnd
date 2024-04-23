import React from "react";

const Category: React.FC = () => {
    return(
        <div className="container-category">
            <div className="container-category-child">
                <img src={require('../../../images/public/cate1.png')} alt="category1"/>
                    <a>Flash Sale</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate2.png')} alt="category2"/>
                    <a>Mã Giảm Giá</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate3.png')} alt="category3"/>
                    <a>Xu hướng</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate4.png')} alt="category4"/>
                    <a>Sản Phẩm Mới</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate5.png')} alt="category5"/>
                    <a>Sale Thứ 3</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate6.png')} alt="category6"/>
                    <a>Văn Phòng Phẩm</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate7.png')} alt="category7"/>
                    <a>Manga Week</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate8.png')} alt="category8"/>
                    <a>Phiên Chợ Sách cũ</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate9.png')} alt="category9"/>
                    <a>Kinh Tế</a>
            </div>
            <div className="container-category-child">
                <img src={require('../../../images/public/cate10.png')} alt="category10"/>
                    <a>Văn Học</a>
            </div>
        </div>
);
}
export default Category