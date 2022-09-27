import imageEmpty from "../assets/img/empty-cart.png";
import { Link } from "react-router-dom";

export const CartEmpty = () => (
    <div className="cart cart--empty">
        <h2>
            Кошик порожній
            <i>😕</i>
        </h2>
        <p>
            Найімовірніше, ви не замовляли ще піцу.
            <br />
            Щоб замовити піцу, перейди на головну сторінку.
        </p>
        <img src={imageEmpty} alt="Empty cart" />
        <Link to="/" className="button button--black">
            <span>Повернутися назад</span>
        </Link>
    </div>
);
