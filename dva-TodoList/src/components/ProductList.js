import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

class ProductList extends Component {
//   constructor(props){
//     super(props)
//   }
  render() {
    const columns = [{
    	title: 'Name',
    	dataIndex: 'name',
    }, {
    	title: 'Actions',
    	render: (text, record) => {
    		return (
    			<Popconfirm title="Delete?" onConfirm={() => this.props.onDelete(record.id)}>
    				<Button>Delete</Button>
    			</Popconfirm>
    		);
    	},
    }];
    // console.log(products);
    return (
    	<div>
    		<div>
    			name:<input ref="name" />
    			<button type="button" onClick={() => this.props.onAdd( this.refs.name.value )}>Add</button>
    		</div>
    		<Table
    			dataSource={this.props.products}
    			columns={columns}
    		/>
    	</div>
    	
    );
  }
}

// const ProductList = ({ onClick, onDelete, products }) => {//products是index.js初始化的数据，它的优先级比action要高
//   const columns = [{
//     title: 'Name',
//     dataIndex: 'name',
//   }, {
//     title: 'Actions',
//     render: (text, record) => {
//       console.log(record)
//       return (
//         <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
//           <Button>Delete</Button>
//         </Popconfirm>
//       );
//     },
//   }];
//   // console.log(products);
//   return (
//     <div>
//       <div>
//         name:<input ref="name" />  //在函数式组件中不能为元素添加ref属性，会报错，需要把函数式组件转成类形式的组件
//         <button type="button" >Add</button>
//       </div>
//       <Table
//       	dataSource={products}
//       	columns={columns}
//       />
//     </div>
//     
//   );
// };

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;