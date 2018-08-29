import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {  //当前组件可以通过props访问到dispatch，可以调用reducer或者effects
  function handleDelete( id ) {
    dispatch({       //触发事件后改变state
      type: 'products/delete',  //和models中的namespace和reducer名称对应(因为实在modle之外调用的reducer，需要把key值添上，说明哪个状态下的reducer)
      payload: id,
    });
  }
  function handleAdd( val ){
    dispatch({       //触发事件后改变state
    	type: 'products/add',  //和models中的namespace和reducer名称对应(因为实在modle之外调用的reducer，需要把key值添上，说明哪个状态下的reducer)
    	payload: val,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} onAdd={handleAdd} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products}) => ({  //链接视图和数据之后会将dispatch和数据一起通过props传递过来
  products:products.products
}))(Products);