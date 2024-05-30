import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An eCommerce website is an online platform where users can buy and sell goods or services over the internet. 
                    These websites facilitate transactions between buyers and sellers, allowing users to browse through products, add items to their virtual shopping carts, 
                    and securely complete purchases using various payment methods. 
                    eCommerce websites often feature a wide range of products from multiple vendors, 
                    offering customers a convenient and accessible way to shop from the comfort of their homes.
                </p>
                <p>eCommerce website typically showcases a variety of items with detailed descriptions, prices, and images. Users can easily search for specific items, 
                    add them to their shopping carts, and securely complete transactions through various payment options during the checkout process. 
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox