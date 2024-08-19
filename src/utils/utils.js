export const getCategoryWiseSalesData = (data) => {
  const categoryData = data?.reduce((acc, sale) => {
    const { category, quantity_sold, total_sales_amount } = sale;

    if (!acc[category]) {
      acc[category] = {
        category,
        total_quantity_sold: 0,
        total_sales_amount: 0,
      };
    }

    acc[category].total_quantity_sold += quantity_sold;
    acc[category].total_sales_amount += total_sales_amount;

    return acc;
  }, {});
  return Object.values(categoryData);
};

export const formatDateToString = (date) => {
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
