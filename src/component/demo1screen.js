// import React from 'react'
// import { Table } from 'antd';
// import { Demo1data } from '../data/MockData';


// export default function Demo1screen() {
//     const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//   },
//   {
//     title: 'Chinese Score',
//     dataIndex: 'chinese',
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//   },
//   {
//     title: 'Math Score',
//     dataIndex: 'math',
//     sorter: {
//       compare: (a, b) => a.math - b.math,
//       multiple: 2,
//     },
//   },
//   {
//     title: 'English Score',
//     dataIndex: 'english',
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
// ];
// const onChange = (pagination, filters, sorter, extra) => {
//   console.log('params', pagination, filters, sorter, extra);
// };
//   return (
//     <Table columns={columns} dataSource={Demo1data} onChange={onChange} />
//   )
    
// }

import React from 'react';
import { Divider, Table } from 'antd';
import { data } from 'react-router-dom';
import { Demo4data } from '../data/MockData';
export  default function Demo1screen(){
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
return(
<>
    <Divider>Middle size table</Divider>
    <Table columns={columns} dataSource={Demo4data} size="middle" />
    <Divider>Small size table</Divider>
    <Table columns={columns} dataSource={Demo4data} size="small" />
</>
);
}