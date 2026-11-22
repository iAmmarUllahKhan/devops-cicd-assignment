const orders = [
  { month: 'Jan', amount: 1200 }, { month: 'Jan', amount: 800 },
  { month: 'Feb', amount: 2450 }, { month: 'Feb', amount: 1100 },
  { month: 'Mar', amount: 1900 }, { month: 'Mar', amount: 1550 },
  { month: 'Apr', amount: 3200 }, { month: 'Apr', amount: 1400 },
  { month: 'May', amount: 2800 }, { month: 'May', amount: 1700 },
  { month: 'Jun', amount: 3800 }, { month: 'Jun', amount: 2100 }
];
const currency = amount => '$' + amount.toLocaleString('en-US', { maximumFractionDigits: 0 });
const total = SalesAnalytics.totalSales(orders);
document.getElementById('revenue').textContent = currency(total);
document.getElementById('orders').textContent = String(orders.length);
document.getElementById('average').textContent = currency(SalesAnalytics.averageOrderValue(orders));
const data = SalesAnalytics.monthlySales(orders, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']);
const max = Math.max(...data.map(row => row.total));
const chart = document.getElementById('chart');
for (const row of data) {
  const column = document.createElement('div');
  column.className = 'chart-column';
  const bar = document.createElement('div');
  bar.className = 'bar';
  bar.style.height = `${(row.total / max) * 190}px`;
  bar.title = `${row.month}: ${currency(row.total)}`;
  const value = document.createElement('span');
  value.className = 'bar-value';
  value.textContent = currency(row.total);
  const label = document.createElement('span');
  label.className = 'month-label';
  label.textContent = row.month;
  column.append(value, bar, label);
  chart.appendChild(column);
}
