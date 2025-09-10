'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, FileText, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Support Sync</span>
            </Link>
            <Link 
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Lock className="w-4 h-4 mr-2" />
              HIPAA Compliant Privacy Policy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities. Learn how we protect your information in compliance with HIPAA and CalAIM regulations.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: September 10, 2025
            </div>
          </div>

          {/* Privacy Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">HIPAA Compliant</h3>
              <p className="text-gray-600 text-sm">Full compliance with healthcare privacy regulations</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Encryption</h3>
              <p className="text-gray-600 text-sm">All data encrypted in transit and at rest</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Minimization</h3>
              <p className="text-gray-600 text-sm">We only collect data necessary for service delivery</p>
            </div>
          </div>

          {/* Main Privacy Policy Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-8 space-y-8">
              
              {/* Information We Collect */}
              <section>
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    Support Sync collects and processes information necessary to provide CalAIM-compliant healthcare documentation services:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Voice Data:</strong> Audio recordings for transcription purposes, processed in real-time and immediately encrypted</li>
                    <li><strong>User Information:</strong> Name, role, organization details for authentication and access control</li>
                    <li><strong>Location Data:</strong> GPS coordinates for field visit verification and compliance tracking</li>
                    <li><strong>Device Information:</strong> Device identifiers and technical specifications for security and optimization</li>
                    <li><strong>Usage Analytics:</strong> Anonymized usage patterns to improve service quality</li>
                  </ul>
                </div>
              </section>

              {/* How We Use Information */}
              <section>
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    Your information is used exclusively for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing voice-to-text transcription services for healthcare documentation</li>
                    <li>Ensuring CalAIM compliance and DHCS reporting requirements</li>
                    <li>Real-time monitoring and quality assurance for field operations</li>
                    <li>Generating compliance reports and analytics for supervisors</li>
                    <li>Maintaining security and preventing unauthorized access</li>
                    <li>Improving service quality through anonymized usage analysis</li>
                  </ul>
                </div>
              </section>

              {/* Data Protection */}
              <section>
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Protection & Security</h2>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    We implement industry-leading security measures to protect your data:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Encryption:</strong> AES-256 encryption for data at rest and TLS 1.3 for data in transit</li>
                    <li><strong>Access Controls:</strong> Role-based access with multi-factor authentication</li>
                    <li><strong>Data Centers:</strong> SOC 2 Type II certified facilities with 24/7 monitoring</li>
                    <li><strong>Regular Audits:</strong> Quarterly security assessments and penetration testing</li>
                    <li><strong>Staff Training:</strong> Regular HIPAA and security training for all personnel</li>
                    <li><strong>Incident Response:</strong> Comprehensive breach notification and response procedures</li>
                  </ul>
                </div>
              </section>

              {/* Data Sharing */}
              <section>
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Sharing & Disclosure</h2>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    We do not sell, rent, or trade your personal information. Data may only be shared in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>With Your Organization:</strong> Supervisors and authorized personnel within your healthcare organization</li>
                    <li><strong>Service Providers:</strong> Trusted third-party vendors under strict data processing agreements</li>
                    <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order</li>
                    <li><strong>Emergency Situations:</strong> To protect health, safety, or prevent harm</li>
                    <li><strong>DHCS Reporting:</strong> Aggregated, de-identified data for CalAIM compliance reporting</li>
                  </ul>
                </div>
              </section>

              {/* Data Retention */}
              <section>
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-red-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Data Retention</h2>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    We retain your information only as long as necessary for service delivery and compliance:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Voice Recordings:</strong> Processed immediately and deleted within 24 hours unless required for compliance</li>
                    <li><strong>Documentation:</strong> Retained according to CalAIM requirements (typically 7 years)</li>
                    <li><strong>User Data:</strong> Maintained during active service period plus 30 days</li>
                    <li><strong>Analytics:</strong> Anonymized data may be retained indefinitely for service improvement</li>
                    <li><strong>Compliance Records:</strong> Retained as required by HIPAA and state regulations</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section>
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-indigo-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request copies of your personal data</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
                    <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
                    <li><strong>Restriction:</strong> Request limitation of processing activities</li>
                    <li><strong>Objection:</strong> Object to certain types of data processing</li>
                  </ul>
                </div>
              </section>

              {/* Contact Information */}
              <section className="bg-gray-50 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                  </p>
                  <div className="space-y-2">
                    <p><strong>Privacy Officer:</strong> privacy@supportsync.com</p>
                    <p><strong>Phone:</strong> 1-800-SUPPORT (1-800-787-7678)</p>
                    <p><strong>Mail:</strong> Support Sync Privacy Team<br />
                    123 Healthcare Plaza, Suite 400<br />
                    Los Angeles, CA 90210</p>
                  </div>
                  <p className="mt-4 text-sm">
                    We will respond to your request within 30 days as required by applicable privacy laws.
                  </p>
                </div>
              </section>

            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
            <p className="text-sm text-yellow-800">
              <strong>Demo Notice:</strong> This is a placeholder privacy policy for demonstration purposes. 
              In a production environment, this policy should be reviewed by legal counsel and tailored 
              to your specific business practices and applicable regulations.
            </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
