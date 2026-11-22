const test = require('node:test');
const assert = require('node:assert/strict');
const { totalSales, averageOrderValue, monthlySales } = require('../src/sales.js');
test('totalSales adds all order amounts', () => {
  assert.equal(totalSales([{ amount: 100 }, { amount: 250 }]), 350);
});
test('averageOrderValue calculates the mean', () => {
  assert.equal(averageOrderValue([{ amount: 100 }, { amount: 300 }]), 200);
});
test('averageOrderValue handles an empty list', () => {
  assert.equal(averageOrderValue([]), 0);
});
test('monthlySales groups orders and includes months with no sales', () => {
  assert.deepEqual(monthlySales([{ month: 'Jan', amount: 50 }, { month: 'Jan', amount: 25 }], ['Jan', 'Feb']), [
    { month: 'Jan', total: 75 }, { month: 'Feb', total: 0 }
  ]);
});
