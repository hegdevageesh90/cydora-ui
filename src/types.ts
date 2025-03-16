export interface AdEvent {
  id: string;
  type: 'impression' | 'click' | 'conversion';
  advertiserId: string;
  publisherId: string;
  timestamp: number;
  ipAddress: string;
  fraudScore: number;
  transactionHash: string;
}

export interface FraudMetrics {
  totalEvents: number;
  fraudulentEvents: number;
  suspiciousIPs: number;
  averageFraudScore: number;
}

export interface TimeSeriesData {
  timestamp: number;
  value: number;
}