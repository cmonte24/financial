import React, { FC } from 'react';
import Table, { TableHeader } from '../Table/Table';
import { TransactionTable } from '../../types/transaction';
import { format } from 'date-fns';
import { trpc } from '../../utils/trpc';
import { formatNumberAsCurrency } from '../../utils/formatNumberAsCurrency';

const headers: TableHeader<TransactionTable>[] = [
  { label: 'Description', accessor: 'description' },
  { label: 'Date', accessor: 'createdAt' },
  { label: 'Amount', accessor: 'amount' },
];

const History: FC = () => {
  const { data, isLoading } = trpc.useQuery([
    'transactions.get-transaction-history',
    { limit: 3 },
  ]);

  const transactions = data?.map((item) => {
    return {
      ...item,
      amount: formatNumberAsCurrency(item.amount),
      createdAt: format(new Date(item.createdAt), 'dd.MM.yyyy'),
    };
  });

  // TODO: add food, drinks, rent, car, phone, internet, electricity, gas, clothes, shoes,free time, other icons
  return (
    <div className={'flex flex-col py-5'}>
      <h1 className={'font-bold text-2xl'}>History</h1>
      <h2 className={'text-gray-500'}>Last 3 transactions</h2>
        <Table
          data={transactions || []}
          isLoading={isLoading}
          headers={headers}
          showHeader={false}
          onRowClick={(item) => console.log(item)}
        />
    </div>
  );
};

export default History;
