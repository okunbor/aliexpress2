
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClasses = "py-4 px-1 border-b-2 font-medium text-sm";
  const activeLinkClasses = "text-red-600 border-red-500";
  const inactiveLinkClasses = "text-gray-500 hover:text-gray-700 hover:border-gray-300";

  return (
    <nav className="flex space-x-4">
      <NavLink 
        to="/orders" 
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
        }
      >
        View All
      </NavLink>
      <NavLink 
        to="/to_pay" 
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
        }
      >
        To Pay (0)
      </NavLink>
      <NavLink 
        to="/to_ship" 
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
        }
      >
        To Ship (0)
      </NavLink>
      <NavLink 
        to="/shipped" 
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
        }
      >
        Shipped (0)
      </NavLink>
      <NavLink 
        to="/processed" 
        className={({ isActive }) => 
          `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`
        }
      >
        Processed
      </NavLink>
    </nav>
  );
};

export default Navbar;
