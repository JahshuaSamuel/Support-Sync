// Voice Recording Functionality
const micButton = document.getElementById('micButton');
const transcriptionArea = document.getElementById('transcriptionArea');
let isRecording = false;
let recordingTimeout;

// Mock transcription data
const mockTranscriptions = [
    "Patient reports chronic lower back pain for 3 months...",
    "Housing condition assessment: Minor maintenance needed in bathroom...",
    "Client expressed satisfaction with current housing support services...",
    "Follow-up scheduled for next week to check on maintenance progress...",
    "All CalAIM documentation requirements completed successfully..."
];

// Voice recording functionality
micButton.addEventListener('click', () => {
    isRecording = !isRecording;
    
    if (isRecording) {
        startRecording();
    } else {
        stopRecording();
    }
});

function startRecording() {
    micButton.classList.add('recording');
    micButton.innerHTML = '<i class="fas fa-stop"></i>';
    transcriptionArea.classList.add('active');
    
    // Clear placeholder text
    transcriptionArea.innerHTML = '<p>Recording... <i class="fas fa-circle" style="color: #FF3B30; animation: blink 1s infinite;"></i></p>';
    
    // Simulate transcription after 2-4 seconds
    const delay = Math.random() * 2000 + 2000; // 2-4 seconds
    recordingTimeout = setTimeout(() => {
        const randomTranscription = mockTranscriptions[Math.floor(Math.random() * mockTranscriptions.length)];
        transcriptionArea.innerHTML = `
            <div style="background: #e8f5e8; padding: 10px; border-radius: 8px; margin-bottom: 10px;">
                <strong>Transcription:</strong><br>
                ${randomTranscription}
            </div>
            <div style="font-size: 0.9em; color: #666;">
                <i class="fas fa-clock"></i> Recorded at ${new Date().toLocaleTimeString()}
            </div>
        `;
    }, delay);
}

function stopRecording() {
    micButton.classList.remove('recording');
    micButton.innerHTML = '<i class="fas fa-microphone"></i>';
    transcriptionArea.classList.remove('active');
    
    if (recordingTimeout) {
        clearTimeout(recordingTimeout);
    }
    
    // If no transcription yet, show placeholder
    if (transcriptionArea.innerHTML.includes('Recording...')) {
        transcriptionArea.innerHTML = '<p>Tap to start recording...</p>';
    }
}

// Dashboard Real-time Updates
function updateMetrics() {
    const activeRecordings = document.getElementById('activeRecordings');
    const complianceRate = document.getElementById('complianceRate');
    
    if (activeRecordings) {
        const currentValue = parseInt(activeRecordings.textContent);
        const newValue = currentValue + Math.floor(Math.random() * 6) - 3; // -3 to +3
        activeRecordings.textContent = Math.max(0, newValue);
    }
    
    if (complianceRate) {
        const currentValue = parseFloat(complianceRate.textContent);
        const change = (Math.random() - 0.5) * 0.5; // -0.25 to +0.25
        const newValue = Math.max(95, Math.min(100, currentValue + change));
        complianceRate.textContent = newValue.toFixed(1) + '%';
    }
}

// Initialize Charts
function initCharts() {
    // Compliance Trend Chart
    const complianceCtx = document.getElementById('complianceChart');
    if (complianceCtx) {
        new Chart(complianceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                datasets: [{
                    label: 'Compliance Rate (%)',
                    data: [94.2, 95.1, 96.8, 97.3, 98.1, 98.5, 99.1],
                    borderColor: '#10B981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 90,
                        max: 100
                    }
                },
                elements: {
                    point: {
                        radius: 6,
                        hoverRadius: 8
                    }
                }
            }
        });
    }
}

// Add blinking animation for recording indicator
const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0.3; }
    }
`;
document.head.appendChild(style);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize charts
    initCharts();
    
    // Start real-time updates
    setInterval(updateMetrics, 3000);
    
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.metric-card, .chart-container');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add click effects to buttons
document.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        e.target.style.transform = 'scale(0.95)';
        setTimeout(() => {
            e.target.style.transform = '';
        }, 150);
    }
});

// Simulate live data updates
function simulateLiveUpdates() {
    // Update active recordings every 5 seconds
    setInterval(() => {
        const activeRecordings = document.getElementById('activeRecordings');
        if (activeRecordings) {
            const currentValue = parseInt(activeRecordings.textContent);
            const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
            const newValue = Math.max(0, currentValue + change);
            activeRecordings.textContent = newValue;
            
            // Add visual feedback
            activeRecordings.style.color = '#10B981';
            setTimeout(() => {
                activeRecordings.style.color = '#2563EB';
            }, 1000);
        }
    }, 5000);
}

// Start live updates
simulateLiveUpdates();

// Add professional loading states
function showLoading(element) {
    element.classList.add('loading');
    element.style.opacity = '0.6';
}

function hideLoading(element) {
    element.classList.remove('loading');
    element.style.opacity = '1';
}

// Export functions for global access
window.SupportSync = {
    startRecording,
    stopRecording,
    updateMetrics,
    showLoading,
    hideLoading
};

// Enhanced Dashboard Functionality
function initTeamChart() {
    const teamCtx = document.getElementById('teamChart');
    if (teamCtx) {
        new Chart(teamCtx, {
            type: 'bar',
            data: {
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
                    ],
                    borderColor: '#10B981',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 90,
                        max: 100
                    }
                }
            }
        });
    }
}

// Activity Feed Management
function addActivityItem(type, title, description, time) {
    const activityFeed = document.getElementById('activityFeed');
    if (!activityFeed) return;
    
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item fade-in-up';
    
    const iconClass = type === 'success' ? 'success' : type === 'warning' ? 'warning' : 'active';
    const icon = type === 'success' ? 'fa-check' : type === 'warning' ? 'fa-exclamation-triangle' : 'fa-microphone';
    
    activityItem.innerHTML = `
        <div class="activity-icon ${iconClass}">
            <i class="fas ${icon}"></i>
        </div>
        <div class="activity-content">
            <h4>${title}</h4>
            <p>${description}</p>
            <span class="activity-time">${time}</span>
        </div>
    `;
    
    // Add to top of feed
    activityFeed.insertBefore(activityItem, activityFeed.firstChild);
    
    // Remove oldest item if more than 5
    const items = activityFeed.querySelectorAll('.activity-item');
    if (items.length > 5) {
        items[items.length - 1].remove();
    }
}

// Simulate live activity updates
function simulateActivityUpdates() {
    const activities = [
        {
            type: 'success',
            title: 'Visit completed successfully',
            description: 'CalAIM compliance requirements met',
            time: 'Just now'
        },
        {
            type: 'active',
            title: 'New recording started',
            description: 'Patient assessment in progress',
            time: '1 min ago'
        },
        {
            type: 'warning',
            title: 'Documentation review needed',
            description: 'Visit requires supervisor approval',
            time: '3 min ago'
        }
    ];
    
    setInterval(() => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        addActivityItem(
            randomActivity.type,
            randomActivity.title,
            randomActivity.description,
            randomActivity.time
        );
    }, 8000);
}

// Chart Controls
function initChartControls() {
    const chartBtns = document.querySelectorAll('.chart-btn');
    chartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            chartBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Simulate chart data change
            const chart = Chart.getChart('complianceChart');
            if (chart) {
                const newData = generateRandomChartData();
                chart.data.datasets[0].data = newData;
                chart.update('active');
            }
        });
    });
}

function generateRandomChartData() {
    const baseValue = 95;
    return Array.from({length: 7}, () => 
        baseValue + Math.random() * 5 - 2.5
    );
}

// Filter Controls
function initFilterControls() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const activityItems = document.querySelectorAll('.activity-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.textContent.toLowerCase();
            activityItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex';
                } else {
                    const itemType = item.querySelector('.activity-icon').classList.contains('success') ? 'visits' :
                                   item.querySelector('.activity-icon').classList.contains('warning') ? 'alerts' : 'visits';
                    item.style.display = itemType === filter ? 'flex' : 'none';
                }
            });
        });
    });
}

// Refresh Button
function initRefreshButton() {
    const refreshBtn = document.getElementById('refreshBtn');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
            refreshBtn.style.transform = 'rotate(360deg)';
            refreshBtn.style.transition = 'transform 0.5s ease';
            
            // Show loading state
            document.querySelectorAll('.metric-card').forEach(card => {
                showLoading(card);
            });
            
            setTimeout(() => {
                refreshBtn.style.transform = 'rotate(0deg)';
                document.querySelectorAll('.metric-card').forEach(card => {
                    hideLoading(card);
                });
                
                // Update all metrics
                updateMetrics();
                addActivityItem('active', 'Dashboard refreshed', 'All data updated successfully', 'Just now');
            }, 1500);
        });
    }
}

// Enhanced Metrics Update
function updateAllMetrics() {
    const metrics = [
        { id: 'activeRecordings', min: 8, max: 20 },
        { id: 'complianceRate', min: 95, max: 100, suffix: '%' },
        { id: 'documentationCompletion', min: 90, max: 98, suffix: '%' },
        { id: 'staffUtilization', min: 80, max: 95, suffix: '%' }
    ];
    
    metrics.forEach(metric => {
        const element = document.getElementById(metric.id);
        if (element) {
            const currentValue = parseFloat(element.textContent);
            const change = (Math.random() - 0.5) * 2; // -1 to +1
            const newValue = Math.max(metric.min, Math.min(metric.max, currentValue + change));
            
            element.textContent = newValue.toFixed(metric.suffix ? 1 : 0) + (metric.suffix || '');
            
            // Add visual feedback
            element.style.color = '#10B981';
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.color = '#2563EB';
                element.style.transform = 'scale(1)';
            }, 500);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize charts
    initCharts();
    initTeamChart();
    
    // Initialize controls
    initChartControls();
    initFilterControls();
    initRefreshButton();
    
    // Start real-time updates
    setInterval(updateAllMetrics, 5000);
    simulateActivityUpdates();
    
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.metric-card, .chart-container, .activity-feed');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add hover effects to metric cards
    const metricCards = document.querySelectorAll('.metric-card');
    metricCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to all buttons
    document.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
        }
    });
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Export enhanced functions
window.SupportSync = {
    ...window.SupportSync,
    addActivityItem,
    updateAllMetrics,
    initTeamChart
};
