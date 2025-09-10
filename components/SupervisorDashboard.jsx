'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  Users, 
  CheckCircle, 
  AlertTriangle, 
  MapPin, 
  Clock,
  TrendingUp,
  Shield,
  BarChart3,
  RefreshCw
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { mockMetrics, mockActivityFeed, mockTeamMembers, mockChartData } from '../data/mockData';
import { simulateRealTimeUpdate, formatComplianceRate, generateTimestamp } from '../lib/utils';

export default function SupervisorDashboard() {
  const [metrics, setMetrics] = useState(mockMetrics);
  const [activityFeed, setActivityFeed] = useState(mockActivityFeed);
  const [teamMembers, setTeamMembers] = useState(mockTeamMembers);
  const [activeTab, setActiveTab] = useState('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        activeRecordings: Math.floor(Math.random() * 5) + 8,
        complianceRate: simulateRealTimeUpdate(prev.complianceRate, 0.5),
        documentationCompletion: simulateRealTimeUpdate(prev.documentationCompletion, 0.3)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Refresh data
  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  // Metric cards data
  const metricCards = [
    {
      title: 'Active Recordings',
      value: metrics.activeRecordings,
      icon: Activity,
      color: 'blue',
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'Compliance Rate',
      value: formatComplianceRate(metrics.complianceRate),
      icon: CheckCircle,
      color: 'green',
      change: '+2.1%',
      trend: 'up'
    },
    {
      title: 'Documentation',
      value: formatComplianceRate(metrics.documentationCompletion),
      icon: BarChart3,
      color: 'purple',
      change: '+1.8%',
      trend: 'up'
    },
    {
      title: 'Staff Utilization',
      value: formatComplianceRate(metrics.staffUtilization),
      icon: Users,
      color: 'orange',
      change: '+5.2%',
      trend: 'up'
    }
  ];

  // Team status indicators
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-500';
      case 'Busy': return 'bg-yellow-500';
      case 'Offline': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  // Alert level colors
  const getAlertColor = (type) => {
    switch (type) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'warning': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'info': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="hidden lg:flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-8 py-6 border-b border-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Supervisor Dashboard</h2>
            <p className="text-sm text-gray-600 mt-1">Live team monitoring & CalAIM compliance tracking</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live</span>
            </div>
            <motion.button
              onClick={handleRefresh}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors ${
                isRefreshing ? 'animate-spin' : ''
              }`}
            >
              <RefreshCw className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mt-6">
          {['overview', 'team', 'compliance', 'analytics'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Metrics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {metricCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{card.title}</p>
                        <p className="text-3xl font-bold text-gray-900 mt-2">{card.value}</p>
                        <div className="flex items-center mt-2">
                          <TrendingUp className={`w-4 h-4 mr-1 ${
                            card.trend === 'up' ? 'text-green-500' : 'text-red-500'
                          }`} />
                          <span className={`text-sm ${
                            card.trend === 'up' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {card.change}
                          </span>
                        </div>
                      </div>
                      <div className={`p-3 rounded-lg bg-${card.color}-50`}>
                        <card.icon className={`w-6 h-6 text-${card.color}-600`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Live Activity Feed */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Activity Feed</h3>
                <div className="space-y-3">
                  {activityFeed.map((activity, index) => (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        activity.status === 'success' ? 'bg-green-500' : 
                        activity.status === 'active' ? 'bg-blue-500' : 'bg-yellow-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                          {activity.user} {activity.action}
                        </div>
                        <div className="text-xs text-gray-600">{activity.details}</div>
                      </div>
                      <div className="text-xs text-gray-500">{activity.timestamp}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Compliance Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Trend</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={mockChartData.complianceTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="labels" />
                      <YAxis />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="data" 
                        stroke="#10B981" 
                        strokeWidth={3}
                        dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              key="team"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Team Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{member.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-sm text-gray-600">{member.role}</p>
                        <div className="flex items-center mt-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)} mr-2`}></div>
                          <span className="text-xs text-gray-500">{member.status}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Visits Today:</span>
                        <span className="font-medium">{member.visitsToday}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Compliance:</span>
                        <span className="font-medium text-green-600">{member.complianceRate}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{member.currentLocation}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Team Performance Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockChartData.teamPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="labels" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="data" fill="#2563EB" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'compliance' && (
            <motion.div
              key="compliance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* CalAIM Compliance Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-8 h-8 text-green-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">DHCS Reporting</h4>
                      <p className="text-2xl font-bold text-green-600 mt-1">100%</p>
                      <p className="text-sm text-gray-600">Required fields completed</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-8 h-8 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">MCP Requirements</h4>
                      <p className="text-2xl font-bold text-blue-600 mt-1">98.5%</p>
                      <p className="text-sm text-gray-600">Contract compliance</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <BarChart3 className="w-8 h-8 text-purple-600" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Data Exchange</h4>
                      <p className="text-2xl font-bold text-purple-600 mt-1">96.1%</p>
                      <p className="text-sm text-gray-600">HIE participation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Alerts and Notifications */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Compliance Alerts</h3>
                <div className="space-y-3">
                  <div className={`p-4 rounded-lg border ${getAlertColor('warning')}`}>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5" />
                      <span className="font-medium">2 visits pending documentation review</span>
                    </div>
                    <p className="text-sm mt-1">These visits require supervisor approval before submission to DHCS.</p>
                  </div>
                  <div className={`p-4 rounded-lg border ${getAlertColor('info')}`}>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span className="font-medium">Monthly compliance report due in 3 days</span>
                    </div>
                    <p className="text-sm mt-1">Ensure all team members have completed their required documentation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              key="analytics"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Visit Volume Chart */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Visit Volume</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={mockChartData.visitVolume}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="labels" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="data" fill="#2563EB" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Service Distribution */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: 'Housing Support', value: 35, color: '#10B981' },
                          { name: 'Enhanced Care Management', value: 25, color: '#2563EB' },
                          { name: 'Community Supports', value: 20, color: '#8B5CF6' },
                          { name: 'Care Coordination', value: 20, color: '#F59E0B' }
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {[
                          { name: 'Housing Support', value: 35, color: '#10B981' },
                          { name: 'Enhanced Care Management', value: 25, color: '#2563EB' },
                          { name: 'Community Supports', value: 20, color: '#8B5CF6' },
                          { name: 'Care Coordination', value: 20, color: '#F59E0B' }
                        ].map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
