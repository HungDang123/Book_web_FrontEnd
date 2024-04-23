import React from "react";

const Coupon: React.FC = () =>{
    return(
        <div className="header-coupon ">
            <div className="header-coupon-child">
                <img src={require('../../../images/public/coupon1.png')} alt="coupon1"/>
            </div>
            <div className="header-coupon-child">
                <img src={require('../../../images/public/coupon2.png')} alt="coupon2"/>
            </div>
            <div className="header-coupon-child">
                <img src={require('../../../images/public/coupon3.png')} alt="coupon3"/>
            </div>
            <div className="header-coupon-child">
                <img src={require('../../../images/public/coupon4.png')} alt="coupon4"/>
            </div>

        </div>    );
}
export default Coupon