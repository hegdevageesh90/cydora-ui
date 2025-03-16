import React from 'react';
import { DashboardCard } from './components/DashboardCard';
import { EventsTable } from './components/EventsTable';
import { FraudChart } from './components/FraudChart';
import {
  Shield,
  AlertTriangle,
  Activity,
  Globe,
  Menu,
  Search,
  Bell,
  User
} from 'lucide-react';

// Mock data
const mockMetrics = {
  totalEvents: 124567,
  fraudulentEvents: 423,
  suspiciousIPs: 89,
  averageFraudScore: 0.12
};

const mockEvents = Array.from({ length: 10 }, (_, i) => ({
  id: `evt-${i}`,
  type: ['impression', 'click', 'conversion'][Math.floor(Math.random() * 3)] as 'impression' | 'click' | 'conversion',
  advertiserId: `adv-${Math.random().toString(36).substr(2, 6)}`,
  publisherId: `pub-${Math.random().toString(36).substr(2, 6)}`,
  timestamp: Date.now() - Math.random() * 86400000,
  ipAddress: `${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`,
  fraudScore: Math.random(),
  transactionHash: `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join('')}`
}));

const mockTimeSeriesData = Array.from({ length: 24 }, (_, i) => ({
  timestamp: Date.now() - (23 - i) * 3600000,
  value: Math.floor(Math.random() * 50)
}));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <button className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="flex-shrink-0 flex items-center">
                <Shield className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">AdGuard</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Search className="h-6 w-6" />
                </button>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <Bell className="h-6 w-6" />
                </button>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <DashboardCard
            title="Total Events"
            value={mockMetrics.totalEvents.toLocaleString()}
            change={2.5}
            icon={<Activity className="h-6 w-6 text-indigo-600" />}
          />
          <DashboardCard
            title="Fraudulent Events"
            value={mockMetrics.fraudulentEvents.toLocaleString()}
            change={-1.2}
            icon={<AlertTriangle className="h-6 w-6 text-red-600" />}
          />
          <DashboardCard
            title="Suspicious IPs"
            value={mockMetrics.suspiciousIPs}
            change={0.8}
            icon={<Globe className="h-6 w-6 text-yellow-600" />}
          />
          <DashboardCard
            title="Avg Fraud Score"
            value={`${(mockMetrics.averageFraudScore * 100).toFixed(1)}%`}
            change={-0.5}
            icon={<Shield className="h-6 w-6 text-green-600" />}
          />
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Fraud Detection Trends</h2>
          <FraudChart data={mockTimeSeriesData} />
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Recent Events</h2>
          </div>
          <EventsTable events={mockEvents} />
        </div>
      </main>
    </div>
  );
}

export default App;