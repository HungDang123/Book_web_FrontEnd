import React from "react";
import Coupon from "./Component/Coupon";
import Carousel from "./Component/Carousel";
import Category from "./Component/Category";
import FlashSale from "./Component/FlashSale";
import List from "../Product/List";

const HomePage: React.FC = () => {
    return (
        <div className="center_center_row">
            <Carousel></Carousel>
            <Coupon></Coupon>
            <Category></Category>
            <FlashSale></FlashSale>
            <List></List>
        </div>
    )
}
export default HomePage