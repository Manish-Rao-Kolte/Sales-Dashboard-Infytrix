import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const ComparisonTable = ({
  firstDateData,
  secondDateData,
  firstDate,
  secondDate,
}) => {
  // Check if data is provided and not empty
  if (
    !firstDateData ||
    !firstDateData.length ||
    !secondDateData ||
    !secondDateData.length
  ) {
    return (
      <div className='p-5 justify-center items-center bg-gray-700'>
        <h1 className='font-bold text-white text-lg'>Today's sales</h1>
        <p className='text-white text-lg text-center font-semibold'>
          No data available
        </p>
      </div>
    );
  }
  //set column headers
  const columnDefs = [
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
    },
    { headerName: "Category", field: "category", sortable: true, filter: true },
    {
      headerName: `Sales ${firstDate}`,
      field: "date1Sales",
      sortable: true,
      filter: true,
      valueFormatter: (params) => `₹ ${params.value}`,
    },
    {
      headerName: `Sales ${secondDate}`,
      field: "date2Sales",
      sortable: true,
      filter: true,
      valueFormatter: (params) => `₹ ${params.value}`,
    },
    {
      headerName: "Difference",
      field: "difference",
      sortable: true,
      filter: true,
      valueFormatter: (params) => `₹ ${params.value}`,
    },
  ];

  //set data in formate
  const data = firstDateData?.map((item, index) => {
    return {
      id: index + 1,
      productName: item.product_name,
      category: item.category,
      date1Sales: item.total_sales_amount,
      date2Sales: secondDateData[index]?.total_sales_amount,
      difference:
        item.total_sales_amount - secondDateData[index]?.total_sales_amount,
    };
  });

  return (
    <div className='ag-theme-alpine' style={{ height: 400, width: "100%" }}>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        pagination
        paginationPageSize={10}
        paginationPageSizeSelector={[5, 10, 20, 50]}
        sortable
        filter
      />
    </div>
  );
};

export default ComparisonTable;
