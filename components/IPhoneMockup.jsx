'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, CheckCircle, Clock, MapPin, User } from 'lucide-react';
import { mockPatients, mockTranscriptions } from '../data/mockData';
import { simulateVoiceRecording, generateTimestamp } from '../lib/utils';

export default function IPhoneMockup() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState('');
  const [currentPatient, setCurrentPatient] = useState(mockPatients[0]);
  const [chatMessages, setChatMessages] = useState([
    { 
      id: 1, 
      type: 'ai', 
      text: `Starting visit with ${mockPatients[0].name} (${mockPatients[0].id})`, 
      time: generateTimestamp(5),
      serviceType: mockPatients[0].serviceType
    },
    { 
      id: 2, 
      type: 'user', 
      text: "I'm here for her housing support visit.", 
      time: generateTimestamp(4)
    },
    { 
      id: 3, 
      type: 'ai', 
      text: "Perfect! I'll help you document this visit for CalAIM compliance. How is the housing condition?", 
      time: generateTimestamp(3)
    }
  ]);

  // Auto-transition to success screen after voice recording
  useEffect(() => {
    if (currentScreen === 'chat' && transcription) {
      const timer = setTimeout(() => {
        setCurrentScreen('success');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen, transcription]);

  // Voice recording simulation
  const handleVoiceRecord = async () => {
    setIsRecording(true);
    const result = await simulateVoiceRecording();
    setTranscription(result);
    setIsRecording(false);
    
    // Add transcription to chat
    setChatMessages(prev => [...prev, {
      id: Date.now(),
      type: 'user',
      text: result,
      time: generateTimestamp(0)
    }]);
  };

  // Screen transition handlers
  const startActivity = () => {
    setCurrentScreen('chat');
  };

  const backToHome = () => {
    setCurrentScreen('home');
    setTranscription('');
    setChatMessages([
      { 
        id: 1, 
        type: 'ai', 
        text: `Starting visit with ${mockPatients[0].name} (${mockPatients[0].id})`, 
        time: generateTimestamp(5),
        serviceType: mockPatients[0].serviceType
      },
      { 
        id: 2, 
        type: 'user', 
        text: "I'm here for her housing support visit.", 
        time: generateTimestamp(4)
      },
      { 
        id: 3, 
        type: 'ai', 
        text: "Perfect! I'll help you document this visit for CalAIM compliance. How is the housing condition?", 
        time: generateTimestamp(3)
      }
    ]);
  };

  // Render iPhone Home Screen
  const renderHomeScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-50 to-white">
      {/* Status Bar with Dynamic Island */}
      <div className="flex justify-between items-center px-6 pt-12 pb-4">
        <div className="text-sm font-semibold text-gray-900">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
          <div className="w-6 h-3 border border-gray-900 rounded-sm">
            <div className="w-4 h-2 bg-gray-900 rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Support Sync</h1>
          <p className="text-gray-600">CalAIM Compliance Documentation</p>
        </motion.div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
            <div className="text-sm text-gray-600 mb-4">Visits Today</div>
            <div className="flex justify-between text-sm">
              <span className="text-orange-600">2 Pending</span>
              <span className="text-green-600 font-medium">100% Compliant</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Start Activity Button */}
      <div className="flex-1 flex items-center justify-center px-6">
        <motion.button
          onClick={startActivity}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-48 h-48 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <div className="text-center text-white">
            <div className="text-2xl font-bold mb-2">Start</div>
            <div className="text-lg">Activity</div>
          </div>
        </motion.button>
      </div>

      {/* Bottom Navigation */}
      <div className="px-6 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
        >
          <div className="flex justify-around">
            {['Home', 'Schedule', 'Members', 'Reports'].map((item, index) => (
              <button
                key={item}
                className={`flex flex-col items-center py-2 px-3 rounded-xl transition-colors ${
                  index === 0 ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="w-6 h-6 mb-1 bg-current rounded"></div>
                <span className="text-xs font-medium">{item}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  // Render iPhone Chat Screen
  const renderChatScreen = () => (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <button onClick={backToHome} className="text-blue-600 font-medium">← Back</button>
          <div className="text-center">
            <div className="font-semibold text-gray-900">{currentPatient.name}</div>
            <div className="text-sm text-gray-500">{currentPatient.serviceType} - {currentPatient.id}</div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        <AnimatePresence>
          {chatMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-900 border border-gray-200'
                }`}
              >
                <div className="text-sm">{message.text}</div>
                <div className={`text-xs mt-1 ${
                  message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {message.time}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 bg-white border-t border-gray-200">
        <div className="flex flex-wrap gap-2 mb-3">
          {['Safe & Clean', 'Minor Issues', 'Major Concerns', 'Add Photo'].map((action) => (
            <button
              key={action}
              className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Voice Input */}
        <div className="flex items-center space-x-3">
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-3 text-gray-500 text-sm">
            Type a message or use voice...
          </div>
          <motion.button
            onClick={handleVoiceRecord}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isRecording
                ? 'bg-red-500 text-white voice-pulse'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isRecording ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>
    </div>
  );

  // Render iPhone Success Screen
  const renderSuccessScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-b from-green-50 to-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-6 pt-12 pb-4">
        <div className="text-sm font-semibold text-gray-900">9:41</div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-2 bg-gray-900 rounded-sm"></div>
          <div className="w-6 h-3 border border-gray-900 rounded-sm">
            <div className="w-4 h-2 bg-gray-900 rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle className="w-12 h-12 text-white" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-3xl font-bold text-gray-900 mb-2"
        >
          Visit Documented!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-600 text-center mb-8"
        >
          CalAIM compliance requirements met
        </motion.p>

        {/* Visit Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full max-w-sm bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6"
        >
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Service Type:</span>
              <span className="font-medium">{currentPatient.serviceType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">45 mins</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Client ID:</span>
              <span className="font-medium">{currentPatient.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="font-medium text-green-600">Fully Compliant</span>
            </div>
          </div>
        </motion.div>

        {/* Next Visit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full max-w-sm bg-blue-50 rounded-2xl p-6 border border-blue-200"
        >
          <div className="text-center">
            <div className="text-sm text-blue-600 mb-1">Next Visit</div>
            <div className="font-semibold text-gray-900">{mockPatients[1].name}</div>
            <div className="text-sm text-gray-600">11:30 AM</div>
          </div>
        </motion.div>
      </div>

      {/* Back to Home Button */}
      <div className="px-6 pb-8">
        <motion.button
          onClick={backToHome}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-colors"
        >
          Back to Home
        </motion.button>
      </div>
    </div>
  );

  return (
    <div className="iphone-frame rounded-[3rem] p-2 mx-auto lg:mx-0">
      <div className="iphone-screen w-80 h-[700px] relative">
        {/* iPhone Notch/Dynamic Island */}
        <div className="iphone-notch w-32 h-6 mx-auto"></div>
        
        {/* Dynamic Content Area with Safe Area */}
        <div className="h-full pt-2">
          <AnimatePresence mode="wait">
            {currentScreen === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderHomeScreen()}
              </motion.div>
            )}
            {currentScreen === 'chat' && (
              <motion.div
                key="chat"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderChatScreen()}
              </motion.div>
            )}
            {currentScreen === 'success' && (
              <motion.div
                key="success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderSuccessScreen()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
