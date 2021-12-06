import { Fragment } from 'react'
import styles from  './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
import mealsImages from '../../assets/img/meals.jpg'

const Header = (props) => {
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onCartBtnClick={props.onCartButtonClick}/>
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImages} alt="A table full of delicious food!"/>
            </div>
        </Fragment>
    )
}

export default Header
