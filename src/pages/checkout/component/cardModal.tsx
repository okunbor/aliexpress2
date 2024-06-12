


const CardModal = ({ onAddCard})=>{

    return(
        
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
         {/* <!-- Header --> */}
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Provide further information</h2>
            <button onClick={onAddCard} className="text-gray-500">&times;</button>
        </div>

        {/* // <!-- Subheader --> */}
        <p className="text-sm text-center text-green-500 mb-4">
            <svg className="inline-block w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414L8.586 11l-2.293 2.293a1 1 0 001.414 1.414L9 12.414l2.293 2.293a1 1 0 001.414-1.414L10.414 11l2.293-2.293z"></path></svg>
            Your payment information is safe with us
        </p>

        {/* // <!-- Card Information Form --> */}
        <form>
            <div className="mb-4">
                <h3 className="text-md font-semibold mb-2">Add a new card</h3>
                <div className="flex items-center space-x-2">
                    <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="w-8"/>
                    <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" className="w-8"/>
                    <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="w-8"/>
                    <img src="https://img.icons8.com/color/48/000000/discover.png" alt="Discover" className="w-8"/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="Card number" className="border p-2 rounded-lg w-full"/>
                <input type="text" placeholder="Cardholder name" className="border p-2 rounded-lg w-full"/>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
                <input type="text" placeholder="MM" className="border p-2 rounded-lg w-full"/>
                <input type="text" placeholder="YY" className="border p-2 rounded-lg w-full"/>
                <input type="text" placeholder="CVV" className="border p-2 rounded-lg w-full"/>
            </div>

            <div className="flex items-center mb-4">
                <input type="checkbox" className="mr-2"/>
                <span className="text-gray-600">Save card details</span>
            </div>

            <p className="text-gray-600 mb-4">Your order will be processed in USD</p>

            <button onClick={onAddCard} type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg">Save & confirm</button>
        </form>
    </div>

 


    )
}

export default CardModal