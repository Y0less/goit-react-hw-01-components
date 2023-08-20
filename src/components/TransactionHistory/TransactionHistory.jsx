export const TransactionHistory = props => {
console.log('props :>> ', props);
    return (
<table className="transaction-history">
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>
    <tbody>
        {props.items.map(({id, type, amount, currency}) =>
        <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>)}      
    </tbody>
</table>
)
}