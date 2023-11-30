import React from "react";

import ProductsOnSale from "../components/ProductsOnSale";
import MainPageProductsDisplay from '../components/MainPageProductsDisplay';
import './MainPage.css';

const MainPage = () => {

    const responseData = [
        { id: '123123',name: 'banana', price: '10.00', offerPrice: '5.00',offerPercentage: '50%' , image: 'https://th-thumbnailer.cdn-si-edu.com/qwdFU8TzPixEtFzRLC2V_Ezr2tw=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2Fd5%2F24%2Fd5243019-e0fc-4b3c-8cdb-48e22f38bff2%2Fistock-183380744.jpg' },
        { id: '387487329',name: 'banana', price: '10.00', offerPrice: '5.00',offerPercentage: '50%' ,  image: 'https://th-thumbnailer.cdn-si-edu.com/qwdFU8TzPixEtFzRLC2V_Ezr2tw=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2Fd5%2F24%2Fd5243019-e0fc-4b3c-8cdb-48e22f38bff2%2Fistock-183380744.jpg' },
        { id: '3874865',name: 'banana', price: '10.00', offerPrice: '5.00',offerPercentage: '50%' , image: 'https://th-thumbnailer.cdn-si-edu.com/qwdFU8TzPixEtFzRLC2V_Ezr2tw=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2Fd5%2F24%2Fd5243019-e0fc-4b3c-8cdb-48e22f38bff2%2Fistock-183380744.jpg' },
        { id: '09829',name: 'banana', price: '10.00', offerPrice: '5.00',offerPercentage: '50%' , image: 'https://th-thumbnailer.cdn-si-edu.com/qwdFU8TzPixEtFzRLC2V_Ezr2tw=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2Fd5%2F24%2Fd5243019-e0fc-4b3c-8cdb-48e22f38bff2%2Fistock-183380744.jpg' },
        { id: '982329',name: 'banana', price: '10.00', offerPrice: '5.00',offerPercentage: '50%' , image: 'https://th-thumbnailer.cdn-si-edu.com/qwdFU8TzPixEtFzRLC2V_Ezr2tw=/fit-in/1600x0/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2Fd5%2F24%2Fd5243019-e0fc-4b3c-8cdb-48e22f38bff2%2Fistock-183380744.jpg' },];

    return(
        <React.Fragment>
            <ProductsOnSale
            responseData = { responseData }
            />
            <div className="main-page__best-seller__container">
            <label className="main-page__best-seller__label">
                Best Seller
            </label>
            </div>
            <MainPageProductsDisplay
            responseData = { responseData }
            />
            <div className="main-page__best-seller__container">
            <label className="main-page__best-seller__label">
                Trend Products
            </label>
            </div>
            <MainPageProductsDisplay
            responseData = { responseData }
            />
        </React.Fragment>
    );
};

export default MainPage;
