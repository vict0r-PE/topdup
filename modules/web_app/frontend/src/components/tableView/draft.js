// import React, { useState } from 'react';
// import { AgGridReact, AgGridColumn } from 'ag-grid-react';
// import { AllCommunityModules } from '@ag-grid-community/all-modules';
// import '@ag-grid-community/dist/styles/ag-grid.css';
// import '@ag-grid-community/dist/styles/ag-theme-alpine.css';

// const TableView = () => {
//   const [gridApi, setGridApi] = useState(null);
//   const [gridColumnApi, setGridColumnApi] = useState(null);

//   const onGridReady = (params) => {
//     setGridApi(params.api);
//     setGridColumnApi(params.columnApi);
//   };

//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <div
//         id="myGrid"
//         style={{
//           height: '100%',
//           width: '100%',
//         }}
//         className="ag-theme-alpine"
//       >
//         <AgGridReact
//           modules={AllCommunityModules}
//           rowData={[
//             {
//               localTime: '5:00am',
//               show: {
//                 name: 'Wake Up Dublin',
//                 presenter: 'Andrew Connell',
//               },
//               a: 0.231,
//               b: 0.523,
//               c: 0.423,
//               d: 0.527,
//               e: 0.342,
//             },
//             {
//               localTime: '5:15am',
//               a: 0.423,
//               b: 0.452,
//               c: 0.523,
//               d: 0.543,
//               e: 0.452,
//             },
//             {
//               localTime: '5:30am',
//               a: 0.537,
//               b: 0.246,
//               c: 0.426,
//               d: 0.421,
//               e: 0.523,
//             },
//             {
//               localTime: '5:45am',
//               a: 0.893,
//               b: 0.083,
//               c: 0.532,
//               d: 0.983,
//               e: 0.543,
//             },
//             {
//               localTime: '6:00am',
//               show: {
//                 name: 'Pure Back In The Day',
//                 presenter: 'Kevin Flanagan',
//               },
//               a: 0.231,
//               b: 0.523,
//               c: 0.423,
//               d: 0.527,
//               e: 0.342,
//             },
//             {
//               localTime: '6:15am',
//               a: 0.423,
//               b: 0.452,
//               c: 0.523,
//               d: 0.543,
//               e: 0.452,
//             },
//             {
//               localTime: '6:30am',
//               a: 0.537,
//               b: 0.246,
//               c: 0.426,
//               d: 0.421,
//               e: 0.523,
//             },
//             {
//               localTime: '6:45am',
//               a: 0.893,
//               b: 0.083,
//               c: 0.532,
//               d: 0.983,
//               e: 0.543,
//             },
//             {
//               localTime: '7:00am',
//               show: {
//                 name: 'The Queens Breakfast',
//                 presenter: 'Tony Smith',
//               },
//               a: 0.231,
//               b: 0.523,
//               c: 0.423,
//               d: 0.527,
//               e: 0.342,
//             },
//             {
//               localTime: '7:15am',
//               a: 0.423,
//               b: 0.452,
//               c: 0.523,
//               d: 0.543,
//               e: 0.452,
//             },
//             {
//               localTime: '7:30am',
//               a: 0.537,
//               b: 0.246,
//               c: 0.426,
//               d: 0.421,
//               e: 0.523,
//             },
//             {
//               localTime: '7:45am',
//               a: 0.893,
//               b: 0.083,
//               c: 0.532,
//               d: 0.983,
//               e: 0.543,
//             },
//             {
//               localTime: '8:00am',
//               show: {
//                 name: 'Cosmetic Surgery',
//                 presenter: 'Niall Crosby',
//               },
//               a: 0.231,
//               b: 0.523,
//               c: 0.423,
//               d: 0.527,
//               e: 0.342,
//             },
//             {
//               localTime: '8:15am',
//               a: 0.423,
//               b: 0.452,
//               c: 0.523,
//               d: 0.543,
//               e: 0.452,
//             },
//             {
//               localTime: '8:30am',
//               a: 0.537,
//               b: 0.246,
//               c: 0.426,
//               d: 0.421,
//               e: 0.523,
//             },
//             {
//               localTime: '8:45am',
//               a: 0.893,
//               b: 0.083,
//               c: 0.532,
//               d: 0.983,
//               e: 0.543,
//             },
//             {
//               localTime: '8:00am',
//               show: {
//                 name: 'Brickfield Park Sessions',
//                 presenter: 'Bricker McGee',
//               },
//               a: 0.231,
//               b: 0.523,
//               c: 0.423,
//               d: 0.527,
//               e: 0.342,
//             },
//             {
//               localTime: '8:15am',
//               a: 0.423,
//               b: 0.452,
//               c: 0.523,
//               d: 0.543,
//               e: 0.452,
//             },
//             {
//               localTime: '8:30am',
//               a: 0.537,
//               b: 0.246,
//               c: 0.426,
//               d: 0.421,
//               e: 0.523,
//             },
//             {
//               localTime: '8:45am',
//               a: 0.893,
//               b: 0.083,
//               c: 0.532,
//               d: 0.983,
//               e: 0.543,
//             },
//           ]}
//           defaultColDef={{
//             resizable: true,
//             width: 170,
//           }}
//           components={{ showCellRenderer: createShowCellRenderer() }}
//           suppressRowTransform={true}
//           onGridReady={onGridReady}
//         >
//           <AgGridColumn field="localTime" />
//           <AgGridColumn
//             field="show"
//             cellRenderer="showCellRenderer"
//             rowSpan={rowSpan}
//             cellClassRules={{ 'show-cell': 'value !== undefined' }}
//             width={200}
//           />
//           <AgGridColumn field="a" />
//           <AgGridColumn field="b" />
//           <AgGridColumn field="c" />
//           <AgGridColumn field="d" />
//           <AgGridColumn field="e" />
//         </AgGridReact>
//       </div>
//     </div>
//   );
// };

// function rowSpan(params) {
//     if (params.data.show) {
//       return 4;
//     } else {
//       return 1;
//     }
//   }
// function createShowCellRenderer() {
// function ShowCellRenderer() {}
// ShowCellRenderer.prototype.init = function (params) {
//     var cellBlank = !params.value;
//     if (cellBlank) {
//     return null;
//     }
//     this.ui = document.createElement('div');
//     this.ui.innerHTML =
//     '<div class="show-name">' +
//     params.value.name +
//     '' +
//     '</div>' +
//     '<div class="show-presenter">' +
//     params.value.presenter +
//     '</div>';
// };
// ShowCellRenderer.prototype.getGui = function () {
//     return this.ui;
// };
// return ShowCellRenderer;
// }

// export default TableView;

// // rowData={[
// //     {
// //         show: {stt: '1'},
// //         BaiViet: '',
// //         TenMien: 0.231,
// //         NgayVaoHeThong: 0.523,
// //         SimScore: 0.423,
// //         DupCom: 0.527,
// //         BieuQuyetBaiGoc: 0.342,
// //         },
// //         {
// //         BaiViet: '',
// //         TenMien: 0.231,
// //         NgayVaoHeThong: 0.523,
// //         SimScore: 0.423,
// //         DupCom: 0.527,
// //         BieuQuyetBaiGoc: 0.342,
// //         },
// // ]}

// import React, { useState } from 'react';
// import { AgGridColumn, AgGridReact } from 'ag-grid-react';
// import { AllCommunityModules } from '@ag-grid-community/all-modules';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// const TableView = () => {
//     const [gridApi, setGridApi] = useState(null);
//     const [gridColumnApi, setGridColumnApi] = useState(null);

//     const [rowData, setRowData] = useState([
//         { make: "Toyota", model: "Celica", price: 35000 },
//         { make: "Ford", model: "Mondeo", price: 32000 },
//         { make: "Porsche", model: "Boxter", price: 72000 }
//     ]);

//     return (
//         <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
//             <AgGridReact
//                 rowData={rowData}>
//                 <AgGridColumn field="make"></AgGridColumn>
//                 <AgGridColumn field="model"></AgGridColumn>
//                 <AgGridColumn field="price"></AgGridColumn>
//             </AgGridReact>
//         </div>
//     );
// };

// export default TableView;