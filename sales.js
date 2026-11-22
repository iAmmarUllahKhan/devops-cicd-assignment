(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.SalesAnalytics = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  function totalSales(orders) {
    return orders.reduce((sum, order) => sum + order.amount, 0);
  }
  function averageOrderValue(orders) {
    return orders.length === 0 ? 0 : totalSales(orders) / orders.length;
  }
  function monthlySales(orders, months) {
    return months.map(month => ({
      month,
      total: totalSales(orders.filter(order => order.month === month))
    }));
  }
  return { totalSales, averageOrderValue, monthlySales };
});
