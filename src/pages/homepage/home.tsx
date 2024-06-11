import Header from "../../component/header/header";
import Navbar from "../../component/navbar/navbar";
import Ads from "../../component/ads";
import Banner from "./component/banner";
import Categories from "../../component/categories";
import Arrival from "./component/arrival";
import Features from "./component/features";
import Copyright from "../../component/footers/copyright";
import Footer from "../../component/footers/footer";
import ProductList from "../homepage/component/productList";




const Home = () => {
    
    return (
        <>
            <Header />
            <Navbar />
            <Banner />
            <Features />
            <Categories />
            <Arrival />
            <Ads />
            <ProductList />
            <Footer />
            <Copyright/>
            
        
        
        </>

    )
}

export default Home;






