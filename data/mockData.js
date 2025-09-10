// CalAIM-compliant mock data for healthcare platform demo
export const calaimDataStructure = {
  patient: {
    memberId: "MCP ID",
    eligibility: "CalAIM eligibility status",
    riskTier: "High/Medium/Low",
    housingStatus: "Housing assessment"
  },
  services: {
    ect: "Enhanced Care Management",
    cs: "Community Supports",
    popHealth: "Population Health Management"
  },
  compliance: {
    dhcsReporting: "DHCS required fields",
    mcpRequirements: "MCP contract compliance",
    dataExchange: "HIE participation status"
  }
};

// Mock patient data
export const mockPatients = [
  {
    id: "H0043",
    name: "Maria Rodriguez",
    age: 34,
    riskTier: "High",
    housingStatus: "Unstable",
    serviceType: "Housing Support",
    lastVisit: "2024-01-15",
    nextVisit: "2024-01-22",
    compliance: 100,
    location: { lat: 37.7749, lng: -122.4194 },
    status: "Active"
  },
  {
    id: "H0044",
    name: "James Wilson",
    age: 28,
    riskTier: "Medium",
    housingStatus: "Stable",
    serviceType: "Enhanced Care Management",
    lastVisit: "2024-01-14",
    nextVisit: "2024-01-21",
    compliance: 98,
    location: { lat: 37.7849, lng: -122.4094 },
    status: "Active"
  },
  {
    id: "H0045",
    name: "Sarah Chen",
    age: 45,
    riskTier: "Low",
    housingStatus: "Stable",
    serviceType: "Community Supports",
    lastVisit: "2024-01-13",
    nextVisit: "2024-01-20",
    compliance: 100,
    location: { lat: 37.7649, lng: -122.4294 },
    status: "Active"
  }
];

// Mock team members
export const mockTeamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Field Worker",
    status: "Active",
    currentLocation: "Downtown Area",
    visitsToday: 8,
    complianceRate: 98,
    lastActivity: "2 min ago",
    avatar: "SC"
  },
  {
    id: 2,
    name: "Mike Torres",
    role: "Field Worker",
    status: "Active",
    currentLocation: "Mission District",
    visitsToday: 6,
    complianceRate: 100,
    lastActivity: "5 min ago",
    avatar: "MT"
  },
  {
    id: 3,
    name: "Lisa Park",
    role: "Field Worker",
    status: "Active",
    currentLocation: "SOMA",
    visitsToday: 7,
    complianceRate: 97,
    lastActivity: "8 min ago",
    avatar: "LP"
  }
];

// Mock dashboard metrics
export const mockMetrics = {
  activeRecordings: 12,
  complianceRate: 98.5,
  documentationCompletion: 94.2,
  staffUtilization: 87.3,
  totalVisits: 156,
  pendingReviews: 3,
  alerts: 2
};

// Mock activity feed
export const mockActivityFeed = [
  {
    id: 1,
    type: "visit_completed",
    user: "Sarah Chen",
    patient: "Maria Rodriguez",
    timestamp: "2 min ago",
    status: "success",
    details: "Housing assessment completed"
  },
  {
    id: 2,
    type: "documentation_started",
    user: "Mike Torres",
    patient: "James Wilson",
    timestamp: "5 min ago",
    status: "active",
    details: "Enhanced care management visit"
  },
  {
    id: 3,
    type: "photos_uploaded",
    user: "Lisa Park",
    patient: "Sarah Chen",
    timestamp: "8 min ago",
    status: "success",
    details: "Community supports documentation"
  },
  {
    id: 4,
    type: "compliance_alert",
    user: "System",
    patient: null,
    timestamp: "12 min ago",
    status: "warning",
    details: "2 visits pending documentation review"
  }
];

// Mock CalAIM compliance data
export const mockComplianceData = {
  dhcsReporting: {
    requiredFields: 15,
    completedFields: 15,
    complianceRate: 100
  },
  mcpRequirements: {
    contractCompliance: 98.5,
    dataQuality: 97.2,
    timeliness: 95.8
  },
  dataExchange: {
    hieParticipation: true,
    dataSharing: 94.3,
    interoperability: 96.1
  }
};

// Mock chart data for visualizations
export const mockChartData = {
  complianceTrend: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Compliance Rate (%)',
      data: [94.2, 95.1, 96.8, 97.3, 98.1, 98.5],
      borderColor: '#10B981',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4
    }]
  },
  visitVolume: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Visits Completed',
      data: [23, 28, 31, 26, 29, 18, 12],
      backgroundColor: '#2563EB',
      borderColor: '#1D4ED8',
      borderWidth: 1
    }]
  },
  teamPerformance: {
    labels: ['Sarah Chen', 'Mike Torres', 'Lisa Park', 'David Kim', 'Anna Lee'],
    datasets: [{
      label: 'Compliance Rate (%)',
      data: [98, 100, 97, 96, 99],
      backgroundColor: [
        '#10B981',
        '#059669',
        '#34D399',
        '#6EE7B7',
        '#A7F3D0'
      ]
    }]
  }
};

// Mock voice transcription data
export const mockTranscriptions = [
  "Patient reports improvement in housing stability since last visit.",
  "Housing condition assessment: Minor maintenance needed in bathroom.",
  "Client expressed satisfaction with current housing support services.",
  "Follow-up scheduled for next week to check on maintenance progress.",
  "All CalAIM documentation requirements completed successfully."
];

// Mock CalAIM service codes
export const calaimServiceCodes = {
  housingSupport: "H0043",
  enhancedCareManagement: "G9001",
  communitySupports: "H2017",
  careCoordination: "G9002",
  healthEducation: "G9003"
};
