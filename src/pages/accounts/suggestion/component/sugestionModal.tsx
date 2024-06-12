

const SuggestionModal = () =>{


    return (

        <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Add new suggestion</h2>
                <button className="text-gray-500 hover:text-gray-700">&times;</button>
            </div>
            <form>
                <div className="mb-4">
                    <label htmlFor="feedback-type" className="block text-gray-700 mb-2">Please first let us know what you'd like to do:</label>
                    <select id="feedback-type" className="w-full p-2 border border-gray-300 rounded">
                        <option>Report a bug</option>
                        <option>Give a suggestion</option>
                        <option>Report a problem</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 mb-2">Description:</label>
                    <textarea id="description" className="w-full p-2 border border-gray-300 rounded" rows={4 }disabled>We take your feedback seriously and even though we may not be able to respond personally, consideration is given to any submission. If you do wish to give us a suggestion or report a problem, please be sure to include any relevant details including order numbers and product links.</textarea>
                </div>
                <div className="mb-4 flex items-center">
                    <img src="path/to/screenshot.png" alt="Screenshot" className="w-24 h-24 object-cover rounded mr-4"/>
                    <div className="flex items-center">
                        <input type="checkbox" id="use-screenshot" className="mr-2" checked/>
                        <label htmlFor="use-screenshot" className="text-gray-700">Use the current screenshot</label>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="upload" className="block text-gray-700 mb-2">Upload:</label>
                    <div className="border border-dashed border-gray-300 p-4 rounded flex items-center justify-center">
                        <div className="text-center">
                            <button className="bg-gray-200 p-2 rounded">Upload a file</button>
                            <p className="text-gray-500 mt-2">You can upload a maximum of 5 files, individual image size should not exceed 1MB and supported file formats are PNG and JPG.</p>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" value="mosesokunbor480@gmail.com"/>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SuggestionModal