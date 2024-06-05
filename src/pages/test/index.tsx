import { useState, useEffect } from 'react';
import axios from 'axios';

const Component = () => {
  const [categories, setCategories] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  useEffect(() => {
    // Fetch categories and subcategories from the mock API
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Category List */}
      <div className="w-full lg:w-1/4 bg-white p-4 rounded shadow-lg">
        {categories.map((category) => (
          <div
            key={category.id}
            onMouseEnter={() => setHoveredCategory(category.id)}
            onMouseLeave={() => setHoveredCategory(null)}
            className="p-2 border-b hover:bg-gray-200 cursor-pointer"
          >
            {category.name}
          </div>
        ))}
      </div>

      {/* Subcategory List */}
      <div className="w-full lg:w-3/4">
        {categories.map((category) => (
          category.id === hoveredCategory && (
            <div key={category.id} className="p-4 bg-white rounded shadow-lg">
              <h3 className="font-bold mb-2">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.id} className="p-2 bg-gray-100 rounded hover:bg-gray-200 cursor-pointer">
                    {subcategory.name}
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default Component;
