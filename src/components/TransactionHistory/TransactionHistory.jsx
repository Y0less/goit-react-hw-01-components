import { Table, TableData, TableHead } from './TransactionHistory.styled';

export const TransactionHistory = props => {
  return (
    <Table className="transaction-history">
      <thead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </thead>
      <tbody>
        {props.items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <TableData>{type}</TableData>
            <TableData>{amount}</TableData>
            <TableData>{currency}</TableData>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
