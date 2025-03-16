import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
}

export function DashboardCard({ title, value, change, icon }: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-indigo-50 rounded-lg">
            {icon}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
          </div>
        </div>
        {change !== undefined && (
          <div className={`flex items-center ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {change >= 0 ? (
              <ArrowUpIcon className="w-4 h-4" />
            ) : (
              <ArrowDownIcon className="w-4 h-4" />
            )}
            <span className="text-sm font-medium ml-1">{Math.abs(change)}%</span>
          </div>
        )}
      </div>
    </div>
  );
}