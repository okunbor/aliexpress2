
const Orders = () => {
  return (
    <div className="flex-grow bg-white p-6">
    <div>
        <h3 className="text-2xl font-semibold">My Orders</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#" className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-filled/50/000000/wallet--v1.png" alt="Unpaid"/>
                <span className="mt-2">Unpaid</span>
            </a>
            <a href="#" className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-filled/50/000000/shipped.png" alt="To be shipped"/>
                <span className="mt-2">To be shipped</span>
            </a>
            <a href="#" className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-filled/50/000000/packaging.png" alt="Shipped"/>
                <span className="mt-2">Shipped</span>
            </a>
            <a href="#" className="flex flex-col items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-filled/50/000000/review.png" alt="To be reviewed"/>
                <span className="mt-2">To be reviewed</span>
            </a>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="flex items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-filled/50/000000/appeal.png" alt="My appeal"/>
                <span className="ml-2">My appeal</span>
            </a>
            <a href="#" className="flex items-center text-center p-4 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="https://img.icons8.com/ios-filled/50/000000/dispute.png" alt="In dispute"/>
                <span className="ml-2">In dispute</span>
            </a>
        </div>
    </div>
</div>
  );
}

export default Orders;
