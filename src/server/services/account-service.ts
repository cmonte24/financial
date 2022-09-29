import { prisma } from '../../db/client';

export class AccountService {
  async getBalance(userId: string) {
    const balance = await prisma.transaction.aggregate({
      where: {
        userId,
        createdAt: {
          lte: new Date(),
        },
      },
      _sum: { amount: true },
    });

    const expenses = await prisma.transaction.aggregate({
      where: {
        amount: { lt: 0 },
        userId,
        createdAt: {
          lte: new Date(),
        },
      },
      _sum: { amount: true },
    });

    const income = await prisma.transaction.aggregate({
      where: {
        amount: { gt: 0 },
        userId,
        createdAt: {
          lte: new Date(),
        },
      },
      _sum: { amount: true },
    });

    return {
      balance: balance._sum.amount || 0,
      expenses: expenses._sum.amount || 0,
      income: income._sum.amount || 0,
    };
  }

  async getUser(userId: string) {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true, image: true },
    });
  }
}
