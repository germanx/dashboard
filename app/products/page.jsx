'use client';

import { motion } from 'framer-motion';
import StatCard from '../components/StatCard';
import {
  ChartBarStacked,
  DollarSign,
  ShoppingBag,
  SquareActivity,
} from 'lucide-react';

function ProductsPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard name="Total Products" icon={ShoppingBag} value={'4,352'} />
          <StatCard name="Total Stock" icon={SquareActivity} value={'18,450'} />
          <StatCard name="Total Sold" icon={DollarSign} value={8} />
          <StatCard
            name="Total Categories"
            icon={ChartBarStacked}
            value={'4,352'}
          />
        </div>
      </main>
    </div>
  );
}

export default ProductsPage;
