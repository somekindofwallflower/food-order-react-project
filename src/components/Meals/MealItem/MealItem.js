import MealItemForm from "./MealItemForm";
import styles from './MealItem.module.css'
import {useContext} from "react";
import CartContex from "../../../store/cart-contex";

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    const cartCtx = useContext(CartContex)
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }


    return (
        <li className={styles.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={styles.description}>{props.description}</div>
                <div className={styles.price}>{price}</div>
            </div>
            <div>
               <MealItemForm id={props.id} onAddToCard={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem
