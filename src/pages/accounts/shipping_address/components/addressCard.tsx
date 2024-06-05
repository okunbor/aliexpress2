

const AddressCard = ({ onAddNew }) => {
  return (
    <div className="bg-white shadow rounded p-4 border border-red-200">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-700">
          <i className="fas fa-user"></i> okunbor, <span className="text-gray-600">+234 8141562172</span>
        </h2>
        <span className="text-sm text-red-500">Default address</span>
      </div>
      <div className="mt-2">
        <p className="text-gray-700"><i className="fas fa-map-marker-alt"></i> ugbowo</p>
        <p className="text-gray-700">Ovia North-East, Edo state, Nigeria, 310021</p>
        <p className="text-gray-700">Default</p>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-blue-500 hover:underline">Edit</a>
        <a href="#" className="text-blue-500 hover:underline">Delete</a>
      </div>
      <button onClick={onAddNew} className="bg-red-500 text-white px-4 py-2 rounded mt-4">Add new</button>
    </div>
  );
};

export default AddressCard;
