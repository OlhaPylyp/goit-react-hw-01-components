import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => (
    items.map(({id, type, amount, currency}) =>(
    <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr key={id}>
      <td>{ type}</td>
       <td>{ amount}</td>
       <td>{currency }</td>
    </tr>
 
  </tbody>
        </table>))
    
)
TransactionHistory.prototype = {

}
TransactionHistory.propTypes ={
  items:PropTypes.shape({
    type:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired,
    currency:PropTypes.string.isRequired,
  })
}
 

export default TransactionHistory;