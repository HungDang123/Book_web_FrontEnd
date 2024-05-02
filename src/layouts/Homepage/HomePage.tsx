import React from "react";
import Coupon from "./Component/Coupon";
import Carousel from "./Component/Carousel";
import Category from "./Component/Category";
import FlashSale from "./Component/FlashSale";
import List from "../Product/List";

interface homePageProps {
    keySearch: string;
}

const HomePage: React.FC<homePageProps> = ({ keySearch }) => {
    return (
        <div className="center_center_row">
            <Carousel></Carousel>
            <Coupon></Coupon> 
            <Category></Category>
            <FlashSale></FlashSale>
            <List keySearch={keySearch}></List>
        </div>
    )
}

export default HomePage