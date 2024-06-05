

const AddressForm = ({ onCancel }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-medium text-gray-700 mb-4">Add New Address</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700">Country/region</label>
          <select id="country" className="w-full mt-1 border-gray-300 rounded">
            <option value="Nigeria">Nigeria</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="contactName" className="block text-gray-700">Contact name*</label>
          <input type="text" id="contactName" className="w-full mt-1 border-gray-300 rounded" placeholder="Contact name*" />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label htmlFor="countryCode" className="block text-gray-700">Country code</label>
            <input type="text" id="countryCode" className="w-full mt-1 border-gray-300 rounded" value="+234" readOnly />
          </div>
          <div className="flex-1">
            <label htmlFor="mobileNumber" className="block text-gray-700">Mobile number*</label>
            <input type="text" id="mobileNumber" className="w-full mt-1 border-gray-300 rounded" placeholder="Mobile number*" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="street" className="block text-gray-700">Street, house/apartment/unit*</label>
          <input type="text" id="street" className="w-full mt-1 border-gray-300 rounded" placeholder="Street, house/apartment/unit*" />
        </div>
        <div className="mb-4">
          <label htmlFor="apt" className="block text-gray-700">Apt, suite, unit, etc (optional)</label>
          <input type="text" id="apt" className="w-full mt-1 border-gray-300 rounded" placeholder="Apt, suite, unit, etc (optional)" />
        </div>
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label htmlFor="state" className="block text-gray-700">State</label>
            <select id="state" className="w-full mt-1 border-gray-300 rounded">
              <option value="Edo state">Edo state</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="city" className="block text-gray-700">City</label>
            <select id="city" className="w-full mt-1 border-gray-300 rounded">
              <option value="Ovia North-East">Ovia North-East</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="zipCode" className="block text-gray-700">ZIP code*</label>
            <input type="text" id="zipCode" className="w-full mt-1 border-gray-300 rounded" placeholder="ZIP code*" />
          </div>
        </div>
        <div className="flex items-center mb-4">
          <input type="checkbox" id="defaultAddress" className="mr-2" />
          <label htmlFor="defaultAddress" className="text-gray-700">Set as default shipping address</label>
        </div>
        <div className="flex space-x-4">
          <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">Confirm</button>
          <button type="button" onClick={onCancel} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
