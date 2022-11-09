import { NavLink } from "react-router-dom"
import { observer } from "mobx-react-lite"

export const Header = observer (() => {
    return (
        <header>
            <div className="container">
                <div className="nav_wrapper">
                    <div className="nav_items">
                        <NavLink className="nav_item" to='/'>Main</NavLink>
                        <NavLink className="nav_item" to='/catalog'>Catalog</NavLink>
                        <NavLink className="nav_item" to='/cart'>Cart</NavLink>
                        <NavLink className="nav_item" to='/contacts'>Contacts</NavLink>
                    </div>
                </div>
            </div>
        </header>
    )
})