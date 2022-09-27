// import React, { useState } from "react";
export const Categories = ({ value, onClickCategory }) => {
    const categories = [
        "Всі",
        "М'ясні",
        "Вегетаріанські",
        "Гриль",
        "Гострі",
        "Закариті",
    ];
    return (
        <div className="categories">
            <ul>
                {categories.map((cat, index) => (
                    <li
                        className={index === value ? "active" : ""}
                        key={index}
                        onClick={() => onClickCategory(index)}
                    >
                        {cat}
                    </li>
                ))}
            </ul>
        </div>
    );
};
