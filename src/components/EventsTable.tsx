import React from 'react';
import { format } from 'date-fns';
import { AdEvent } from '../types';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface EventsTableProps {
  events: AdEvent[];
}

export function EventsTable({ events }: EventsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Advertiser ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fraud Score</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                {event.fraudScore > 0.7 ? (
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap capitalize">{event.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.advertiserId}</td>
              <td className="px-6 py-4 whitespace-nowrap">{event.ipAddress}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(event.timestamp, 'MMM d, yyyy HH:mm:ss')}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        event.fraudScore > 0.7 ? 'bg-red-500' : 
                        event.fraudScore > 0.3 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${event.fraudScore * 100}%` }}
                    />
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {(event.fraudScore * 100).toFixed(0)}%
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a
                  href={`https://etherscan.io/tx/${event.transactionHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  {`${event.transactionHash.slice(0, 6)}...${event.transactionHash.slice(-4)}`}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}