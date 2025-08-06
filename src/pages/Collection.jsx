import React from 'react'
import { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

function Collection() {
  const { products, showSearch,  search } = useContext(ShopContext);

  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubcategory = (e) => {
    const value = e.target.value;
    setSubcategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>  item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts([...fpCopy].sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts([...fpCopy].sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    applyFilters();
  }, [category, subcategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const wears = ['Topwear', 'Bottomwear', 'Winterwear'];
  const categoriesType = ['Men', 'Women', 'Kids'];

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter option */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* category filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilters ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>Categories</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {categoriesType.map((cat, index) => (
              <p className='flex gap-2' key={index}>
                <input
                  className='w-3'
                  type='checkbox'
                  value={cat}
                  onChange={toggleCategory}
                />
                {cat}
              </p>
            ))}
          </div>
        </div>

        {/* subcategory filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilters ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {wears.map((wear, index) => (
              <p className='flex gap-2' key={index}>
                <input
                  className='w-3'
                  type='checkbox'
                  value={wear}
                  id={wear}
                  onChange={toggleSubcategory}
                />
                <label htmlFor={wear}>{wear}</label>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relavent'>Sort By: Relevant</option>
            <option value='low-high'>Sort By: Low To High</option>
            <option value='high-low'>Sort By: High To Low</option>
          </select>
        </div>

        {/* product listing */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collection;
