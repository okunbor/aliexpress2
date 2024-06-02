
import { Link } from "react-router-dom";
import offer from "../assets/images/offer.jpg"
const Ads = () => {
    
    return (
        // < !--ads -- >
        <div className="container pb-16">
            <Link to="/shop">
                <img src={offer} alt="ads" className="w-full"/>
            </Link>
        </div>)
}

export default Ads;