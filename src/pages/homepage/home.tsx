import Header from "../../component/header/header";
import Navbar from "../../component/navbar/navbar";
import Ads from "../../component/ads";
import Banner from "./banner";
import Categories from "../../component/categories";
import Arrival from "./arrival";
import Features from "./features";
import Copyright from "../../component/footers/copyright";
import Footer from "../../component/footers/footer";
import ProductList from "./productList";




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






