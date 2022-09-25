import { ReactNode } from 'react';

export interface TransactionTable {
  displayName: string;
  amount: string;
  createdAt: string;
}

export interface Transaction {
  id: string;
  displayName: string;
  amount: number;
  category: string;
  createdAt: Date;
}

export interface UpcomingPayment {
  icon: ReactNode;
  displayName: string;
  amount: number;
  createdAt?: Date;
}

export interface YearlyReportTable {
  month: string;
  income: string;
  expenses: string;
  balance: string;
  transactions: number;
}
