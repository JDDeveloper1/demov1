"use client"; // for nextjs 13.4 user
import Link from "next/link";
import React from "react";
import Styles from "./TrendingSlider.module.css";

const TrendingSlider = () => {
    const filteredItems = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "camera",
            price: 200,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Phone",
            price: 100,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/12753820/pexels-photo-12753820.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Laptop",
            price: 500,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Headephone",
            price: 40,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/163117/keyboard-white-computer-keyboard-desktop-163117.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Keyboard",
            price: 140,
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=600",
            description: "Gaming Mouse",
            price: 140,
        },
    ];

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (
        <>
            <div className={Styles["body-component"]}>

            </div>
            <div className={Styles["trending"]}>
                <div className={Styles["container"]}>
                    <div className={Styles["title-btns"]}>
                        <h3></h3>
                        <div className={Styles["btns"]}>
                            <button title="scroll left" onClick={slideLeft}>

                            </button>
                            <button title="scroll right" onClick={slideRight}>

                            </button>
                        </div>
                    </div>
                    <div className={Styles["row-container"]} id="slider">
                        {filteredItems.map((item) => (
                            <div key={item.id} className={Styles["row-item"]}>
                                <Link href={`/`} className={Styles["link"]}>
                                    <div className={Styles["item-header"]}>
                                        <img src={item.img} alt="product" />
                                    </div>
                                    <div className={Styles["item-description"]}>
                                        <p>{item.description}</p>
                                        <p className={Styles["item-price"]}>{item.price}$</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default TrendingSlider;