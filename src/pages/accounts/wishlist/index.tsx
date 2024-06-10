import {  useSelector } from "react-redux";
import Header from "../../../component/header/header";
import Sidebar from "../../../component/sidebar/sidebar";
import RelatedProduct from "../../product/RelatedProduct";
import { RootState } from "../../../app/store";
import Navbar from "../../../component/navbar/navbar";
import WishListItems from "./wishlistItems";


const WishList = () => {



    const wishlistItems = useSelector((state: RootState) => state.wishlist.wishlist);


    const wishlistItemsCount = wishlistItems.length ;

    if (wishlistItems && wishlistItems.length < 1) {

        return (
            <>
                <Header />
                <Navbar />
                <div className="min-h-screen flex flex-col lg:flex-row">
                    {/* <!-- Sidebar --> */}
                    <Sidebar />

                    {/* <!-- Main content --> */}
                    <main className="flex-1 p-4">
                        {/* <!-- All items --> */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4">All items (0)</h2>
                            <br />
                            <p> no item(s) added to Wishlist</p>

                        </div>

                        {/* <!-- More to love --> */}
                        <RelatedProduct />
                    </main>
                </div>



            </>
        );
    }

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col lg:flex-row">
                {/* <!-- Sidebar --> */}
                <Sidebar />

                {/* <!-- Main content --> */}
                <main className="flex-1 p-4">
                    {/* <!-- All items --> */}
                    <div className="mb-8">
                 <h2 className="text-2xl font-bold mb-4">All items ({wishlistItemsCount})</h2>
                    {wishlistItems?.map((item) => (

                        <WishListItems key={item.id } product={item} />

                        )

                       )

                    }

                    </div>
                    {/* <!-- More to love --> */}
                    <RelatedProduct />
                </main>
            </div>



        </>
    )
}

export default WishList;