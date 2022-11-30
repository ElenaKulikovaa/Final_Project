import { NavLink } from "react-router-dom"
import { observer } from "mobx-react-lite"
import cartStore from "../modules/Cart/CartStore"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"

export const Header = observer (() => {
    const {cartCount} = cartStore;
    const [nav, setNav] = useState(false);

    return (
        <header>
            <div className="container">
                <div className="nav_wrapper">
                    <div className={
                        nav ? 'active_burger' : 'nav_items'
                    } >
                        <NavLink className="nav_item" to='/'>Main</NavLink>
                        <NavLink className="nav_item" to='/catalog'>Catalog</NavLink>
                        <NavLink className="nav_item" to='/contacts'>Sign In</NavLink>
                        <NavLink className="nav_item" to='/cart'>Cart <sup className="nav_item_counter">{cartCount}</sup></NavLink>
                    </div>
                    <div onClick={() => setNav(!nav)} className="burger_menu">
                        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                </div>
            </div>
        </header>
    )
})