import styles from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import {useContext, useEffect, useState} from "react";
import CartContext from '../../store/cart-contex'

const HeaderCartButton = props => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx = useContext(CartContext)
    const numberOfCartItem = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const { items } = cartCtx
    const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump: ''}`

    useEffect(() => {
        if(items.length === 0) {
            return
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300)

        return() => {
            clearTimeout(timer)
        }
    }, [items]);


    return <button className={btnClasses} onClick={props.onCartBtnClick}>
        <span className={styles.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={styles.badge}>
            {numberOfCartItem}
        </span>
    </button>
}

export default HeaderCartButton
