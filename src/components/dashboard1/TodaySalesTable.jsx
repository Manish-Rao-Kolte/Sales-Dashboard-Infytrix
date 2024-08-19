import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const TodaySalesTable = ({ data = [] }) => {
  // Check if data is provided and not empty
  if (!data || data.length === 0) {
    return (
      <div className='p-5 justify-center items-center bg-gray-700'>
        <h1 className='font-bold text-white text-lg'>Today's sales</h1>
        <p className='text-white text-lg text-center font-semibold'>
          No data available
        </p>
      </div>
    );
  }

  // Define columns for AG Grid
  const columns = [
    {
      headerName: "Index",
      field: "id",
      sortable: true,
      width: 75,
    },
    {
      headerName: "Product Name",
      field: "productName",
      sortable: true,
      filter: true,
      width: 200,
    },
    {
      headerName: "Category",
      field: "category",
      sortable: true,
      filter: true,
      width: 150,
    },
    {
      headerName: "Quantity Sold",
      field: "quantitySold",
      sortable: true,
      filter: true,
      width: 150,
    },
    {
      headerName: "Sales Amount",
      field: "salesAmount",
      sortable: true,
      filter: true,
      width: 150,
      valueFormatter: (params) => `₹ ${params.value}`,
    },
  ];

  // Convert data to AG Grid row format
  const rowData = data.map((item, index) => ({
    id: index + 1,
    productName: item.product_name,
    category: item.category,
    quantitySold: item.quantity_sold,
    salesAmount: item.total_sales_amount,
  }));

  return (
    <div className='flex flex-1 p-4 gap-5 bg-gray-700 flex-col'>
      <h1 className='font-bold text-white text-lg'>Sales Data- Tab</h1>
      <div className='ag-theme-alpine'>
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          pagination
          paginationPageSize={10}
          paginationPageSizeSelector={[5, 10, 20, 50]}
          domLayout='autoHeight'
        />
      </div>
    </div>
  );
};

export default TodaySalesTable;
