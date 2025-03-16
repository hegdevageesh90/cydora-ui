import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { format } from 'date-fns';
import { TimeSeriesData } from '../types';

interface FraudChartProps {
  data: TimeSeriesData[];
}

export function FraudChart({ data }: FraudChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="fraudGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            tickFormatter={(timestamp) => format(timestamp, 'HH:mm')}
          />
          <YAxis />
          <Tooltip
            labelFormatter={(timestamp) => format(timestamp, 'MMM d, yyyy HH:mm')}
            formatter={(value: number) => [`${value} events`, 'Fraud Events']}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#6366F1"
            fillOpacity={1}
            fill="url(#fraudGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}