import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Filter products based on the category
  const filteredProducts = all_product.filter((item) => props.category === item.category);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopCategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> Out of {all_product.length} Products
        </p>
      </div>
      <div className="shopCategory-products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          ))
        ) : (
          <p>No items found for the category: {props.category}</p>
        )}
      </div>
      <div className="shopCategory-loadmore">
      Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
