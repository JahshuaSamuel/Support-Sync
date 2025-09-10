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

// Mock chart data for visualizations (Recharts format)
export const mockChartData = {
  complianceTrend: [
    { month: 'Jan', compliance: 94.2 },
    { month: 'Feb', compliance: 95.1 },
    { month: 'Mar', compliance: 96.8 },
    { month: 'Apr', compliance: 97.3 },
    { month: 'May', compliance: 98.1 },
    { month: 'Jun', compliance: 98.5 }
  ],
  visitVolume: [
    { day: 'Mon', visits: 23 },
    { day: 'Tue', visits: 28 },
    { day: 'Wed', visits: 31 },
    { day: 'Thu', visits: 26 },
    { day: 'Fri', visits: 29 },
    { day: 'Sat', visits: 18 },
    { day: 'Sun', visits: 12 }
  ],
  teamPerformance: [
    { name: 'Sarah Chen', compliance: 98, color: '#10B981' },
    { name: 'Mike Torres', compliance: 100, color: '#059669' },
    { name: 'Lisa Park', compliance: 97, color: '#34D399' },
    { name: 'David Kim', compliance: 96, color: '#6EE7B7' },
    { name: 'Anna Lee', compliance: 99, color: '#A7F3D0' }
  ]
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
