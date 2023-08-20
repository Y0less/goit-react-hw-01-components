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

    {props.items.map((item) =>
                    <tr>
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
        </tr>)}      
        
   
    </tbody>
</table>
    )
}

// {props.items.map(() => )}