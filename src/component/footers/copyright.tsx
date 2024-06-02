
import methods from "../../assets/images/methods.png"
const Copyright = () => {
  return (
    // <!-- copyright -->
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
        <div>
          <img
            src={methods}
            alt="methods"
            className="h-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Copyright;
