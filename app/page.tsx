'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Mic, 
  BarChart3, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Award,
  Clock,
  MapPin,
  Zap
} from 'lucide-react';
import IPhoneMockup from '../components/IPhoneMockup';
import SupervisorDashboard from '../components/SupervisorDashboard';
import { mockMetrics } from '../data/mockData';

export default function SupportSyncPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              CalAIM Compliant Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Support Sync
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Revolutionary voice-powered documentation platform for CalAIM healthcare compliance
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                HIPAA Compliant
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                Real-time Monitoring
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                AI-Powered Transcription
              </div>
            </div>
          </motion.div>

          {/* Main Demo Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col lg:flex-row gap-12 items-start justify-center"
          >
            {/* iPhone Mockup */}
            <div className="flex-shrink-0">
              <IPhoneMockup />
            </div>

            {/* Supervisor Dashboard */}
            <div className="flex-1 w-full">
              <SupervisorDashboard />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              CalAIM Compliance Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solution designed specifically for CalAIM healthcare providers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Voice Documentation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voice Documentation</h3>
              <p className="text-gray-600 mb-6">
                AI-powered voice recognition for hands-free visit documentation, ensuring accurate CalAIM compliance records with 99.2% accuracy.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                +40% Efficiency Gain
              </div>
            </motion.div>

            {/* Real-time Monitoring */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-time Monitoring</h3>
              <p className="text-gray-600 mb-6">
                Live supervisor dashboard with team tracking, compliance metrics, and instant alerts for quality assurance and regulatory compliance.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <Clock className="w-4 h-4 mr-2" />
                Live Updates
              </div>
            </motion.div>

            {/* Team Management */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Team Management</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive team oversight with performance tracking, workload distribution, and compliance monitoring for optimal field operations.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <MapPin className="w-4 h-4 mr-2" />
                GPS Tracking
              </div>
            </motion.div>

            {/* Automated Compliance */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border border-orange-200"
            >
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Compliance</h3>
              <p className="text-gray-600 mb-6">
                Smart validation ensures all required CalAIM documentation elements are captured and properly formatted for DHCS reporting.
              </p>
              <div className="flex items-center text-orange-600 font-medium">
                <Award className="w-4 h-4 mr-2" />
                100% Compliance Rate
              </div>
            </motion.div>

            {/* Data Security */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200"
            >
              <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600 mb-6">
                Bank-level encryption, HIPAA compliance, and secure data transmission ensure patient privacy and regulatory compliance.
              </p>
              <div className="flex items-center text-gray-600 font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                HIPAA Compliant
              </div>
            </motion.div>

            {/* Analytics & Reporting */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border border-indigo-200"
            >
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive reporting dashboard with CalAIM metrics, performance analytics, and automated compliance reporting.
              </p>
              <div className="flex items-center text-indigo-600 font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Advanced Analytics
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CalAIM Compliance Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="py-20 bg-gradient-to-r from-blue-600 to-green-600"
      >
        <div className="container mx-auto px-4">
          <div className="text-center text-white mb-16">
            <h2 className="text-4xl font-bold mb-4">CalAIM Compliance Excellence</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Built specifically for CalAIM healthcare providers with full DHCS reporting compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">DHCS Reporting Compliance</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">98.5%</div>
              <div className="text-lg opacity-90">MCP Contract Compliance</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">96.1%</div>
              <div className="text-lg opacity-90">HIE Data Exchange</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Demo Mode Notice & Footer */}
      <div className="bg-yellow-50 border-t border-yellow-200 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <p className="text-sm text-yellow-800">
              <strong>Demo Mode:</strong> This is a demonstration of the Support Sync platform. 
              All data shown is simulated and no real patient information is used.
            </p>
          </div>
          <div className="text-center">
            <Link 
              href="/privacy" 
              className="text-sm text-gray-600 hover:text-gray-900 underline font-medium"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
