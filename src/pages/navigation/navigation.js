import { Outlet, Link } from "react-router-dom";
import './navigation.scss';
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
const Navigation = () => {
    return (
        <>
            <div className="navigation">
                <Link to='/'>
                    <CrownLogo className="logo" />
                </Link>
                <div className="nav-links">
                    <Link className="nav-link-shop" to='/shop'>SHOP</Link>
                </div>
            </div>
            <Outlet />
        </>
    )
};

export default Navigation;