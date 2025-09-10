import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function for combining class names
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// CalAIM compliance validation
export function validateCalAIMCompliance(data) {
  const requiredFields = [
    'memberId',
    'serviceType',
    'visitDate',
    'providerId',
    'assessmentData'
  ];
  
  const missingFields = requiredFields.filter(field => !data[field]);
  const complianceRate = ((requiredFields.length - missingFields.length) / requiredFields.length) * 100;
  
  return {
    isCompliant: missingFields.length === 0,
    complianceRate,
    missingFields
  };
}

// Format CalAIM service codes
export function formatServiceCode(serviceType) {
  const serviceCodes = {
    'Housing Support': 'H0043',
    'Enhanced Care Management': 'G9001',
    'Community Supports': 'H2017',
    'Care Coordination': 'G9002',
    'Health Education': 'G9003'
  };
  
  return serviceCodes[serviceType] || 'N/A';
}

// Generate realistic timestamps
export function generateTimestamp(minutesAgo = 0) {
  const now = new Date();
  const timestamp = new Date(now.getTime() - (minutesAgo * 60 * 1000));
  return timestamp.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });
}

// Simulate real-time data updates
export function simulateRealTimeUpdate(currentValue, variance = 0.1) {
  const change = (Math.random() - 0.5) * variance;
  return Math.max(0, Math.min(100, currentValue + change));
}

// Format compliance percentage
export function formatComplianceRate(rate) {
  return `${rate.toFixed(1)}%`;
}

// Generate patient risk assessment
export function assessPatientRisk(patientData) {
  const riskFactors = {
    housingInstability: patientData.housingStatus === 'Unstable' ? 0.3 : 0,
    ageRisk: patientData.age > 65 ? 0.2 : 0,
    serviceComplexity: patientData.serviceType === 'Enhanced Care Management' ? 0.3 : 0.1,
    complianceHistory: (100 - patientData.compliance) / 100 * 0.2
  };
  
  const totalRisk = Object.values(riskFactors).reduce((sum, risk) => sum + risk, 0);
  
  if (totalRisk > 0.6) return 'High';
  if (totalRisk > 0.3) return 'Medium';
  return 'Low';
}

// Generate mock GPS coordinates for team members
export function generateLocation() {
  return {
    lat: 37.7749 + (Math.random() - 0.5) * 0.1,
    lng: -122.4194 + (Math.random() - 0.5) * 0.1
  };
}

// Format time duration
export function formatDuration(minutes) {
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

// Generate voice recording simulation
export function simulateVoiceRecording() {
  return new Promise((resolve) => {
    const duration = 2000 + Math.random() * 3000; // 2-5 seconds
    setTimeout(() => {
      const transcriptions = [
        "Patient reports improvement in housing stability since last visit.",
        "Housing condition assessment: Minor maintenance needed in bathroom.",
        "Client expressed satisfaction with current housing support services.",
        "Follow-up scheduled for next week to check on maintenance progress.",
        "All CalAIM documentation requirements completed successfully."
      ];
      resolve(transcriptions[Math.floor(Math.random() * transcriptions.length)]);
    }, duration);
  });
}

// Validate HIPAA compliance
export function validateHIPAACompliance(data) {
  const hipaaFields = [
    'patientConsent',
    'dataEncryption',
    'accessLogging',
    'auditTrail'
  ];
  
  return hipaaFields.every(field => data[field] === true);
}

// Generate alert levels
export function generateAlertLevel(complianceRate, pendingItems) {
  if (complianceRate < 90 || pendingItems > 5) return 'critical';
  if (complianceRate < 95 || pendingItems > 3) return 'warning';
  return 'info';
}
