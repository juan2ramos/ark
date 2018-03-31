import numeral from 'numeral'
const Money = {}
function convertToMoney (val) {
  return numeral(val).format('$0,0.00')
}
Money.install = function (Vue) {
  Vue.filter('money', (val) => convertToMoney(val))
}
export default Money
