# Support Sync - CalAIM Healthcare Platform

A professional investor-ready presentation webpage for a CalAIM healthcare platform featuring fully interactive mockups that demonstrate mobile app and supervisor dashboard capabilities.

## 🏥 Project Overview

Support Sync is a revolutionary voice-powered documentation platform designed specifically for CalAIM healthcare compliance. The platform enables field workers to document patient visits using AI-powered voice recognition while ensuring 100% CalAIM compliance and real-time supervisor monitoring.

## ✨ Key Features

### 📱 Interactive iPhone Mockup
- **Realistic iPhone 14/15 Pro Design**: Professional device frame with proper shadows and reflections
- **Safe Area Positioning**: Content respects iPhone notch/Dynamic Island with proper padding
- **Voice Recording Interface**: Working microphone with pulse animation and transcription simulation
- **CalAIM Workflows**: Complete patient visit documentation flow
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### 🖥️ Supervisor Dashboard
- **Real-time Monitoring**: Live team tracking and compliance metrics
- **Interactive Charts**: Chart.js powered data visualizations
- **Team Management**: Staff performance tracking and workload distribution
- **Compliance Tracking**: CalAIM-specific metrics and DHCS reporting
- **Alert System**: Real-time notifications and compliance alerts

### 🎯 CalAIM Compliance
- **DHCS Reporting**: 100% compliance with required fields
- **MCP Requirements**: Contract compliance tracking
- **HIE Data Exchange**: Interoperability metrics
- **Service Codes**: Proper CalAIM service code mapping
- **HIPAA Compliance**: Enterprise-level security features

## 🚀 Technology Stack

- **Framework**: Next.js 14 with React 18
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth transitions
- **Charts**: Chart.js with React-ChartJS-2
- **Icons**: Lucide React for consistent iconography
- **TypeScript**: Full type safety and development experience

## 📁 Project Structure

```
/Support Sync/
├── app/
│   ├── globals.css          # Global styles and iPhone mockup CSS
│   ├── layout.tsx           # Root layout with Inter font
│   └── page.tsx             # Main presentation page
├── components/
│   ├── IPhoneMockup.jsx     # Interactive iPhone mockup component
│   └── SupervisorDashboard.jsx # Full-featured supervisor dashboard
├── data/
│   └── mockData.js          # CalAIM-compliant mock data
├── lib/
│   └── utils.js             # Utility functions and helpers
└── README.md
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #2563EB (CalAIM brand compliance)
- **Success Green**: #10B981 (Compliance indicators)
- **Warning Orange**: #F59E0B (Alerts and notifications)
- **Healthcare Grays**: Professional neutral tones

### Typography
- **Font Family**: Inter (system fallbacks)
- **Hierarchy**: Clear heading and body text scales
- **Accessibility**: WCAG 2.1 AA compliant contrast ratios

### Components
- **iPhone Frame**: Realistic device mockup with proper dimensions
- **Metric Cards**: Interactive dashboard components
- **Charts**: Professional data visualizations
- **Buttons**: Consistent interaction patterns

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18.17.0 or higher
- npm 8.0.0 or higher

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd "Support Sync"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 iPhone Mockup Features

### Safe Area Implementation
- Proper notch/Dynamic Island positioning
- `env(safe-area-inset-top)` CSS support
- Content never overlaps with device elements
- Responsive scaling while maintaining aspect ratio

### Voice Recording Simulation
- Realistic microphone icon (SF Symbols style)
- Pulse animation during recording
- Simulated transcription with realistic delays
- Visual feedback for all interactions

### CalAIM Workflow
1. **Home Screen**: Visit statistics and quick actions
2. **Chat Interface**: AI-powered conversation for documentation
3. **Voice Recording**: Hands-free documentation capture
4. **Success Screen**: Compliance confirmation and next visit

## 🖥️ Supervisor Dashboard Features

### Real-time Metrics
- Active recordings count
- Compliance rate tracking
- Documentation completion percentage
- Staff utilization metrics

### Interactive Visualizations
- **Line Charts**: Compliance trends over time
- **Bar Charts**: Visit volume and team performance
- **Pie Charts**: Service distribution analysis
- **Progress Bars**: Individual team member metrics

### Team Management
- Live team member status
- GPS location tracking simulation
- Performance monitoring
- Workload distribution

### CalAIM Compliance Dashboard
- DHCS reporting status
- MCP contract compliance
- HIE data exchange metrics
- Automated compliance validation

## 🎯 CalAIM Data Structure

### Patient Data
```javascript
{
  memberId: "MCP ID",
  eligibility: "CalAIM eligibility status",
  riskTier: "High/Medium/Low",
  housingStatus: "Housing assessment",
  serviceType: "CalAIM service code",
  compliance: 100
}
```

### Service Codes
- **Housing Support**: H0043
- **Enhanced Care Management**: G9001
- **Community Supports**: H2017
- **Care Coordination**: G9002
- **Health Education**: G9003

## ♿ Accessibility Features

### WCAG 2.1 AA Compliance
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Focus indicators
- Reduced motion support

### Responsive Design
- Mobile-first approach
- Breakpoint optimization
- Touch-friendly interactions
- Cross-browser compatibility

## 🚀 Performance Optimizations

### Loading States
- Skeleton screens during data fetch
- Smooth transitions between states
- Optimized animations
- Lazy loading for dashboard components

### Bundle Optimization
- Tree shaking for unused code
- Image optimization
- CSS purging
- Code splitting

## 🔒 Security & Compliance

### HIPAA Compliance
- Secure data transmission indicators
- Patient privacy protection
- Audit trail simulation
- Access logging display

### CalAIM Compliance
- DHCS reporting requirements
- MCP contract compliance
- Data quality validation
- Interoperability standards

## 📊 Demo Data

The platform includes comprehensive mock data that simulates:
- Realistic patient scenarios
- Diverse demographic information
- High compliance rates (95%+)
- Professional team performance metrics
- CalAIM-specific service codes and workflows

## 🎨 Customization

### Brand Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Your brand colors */ },
  calaim: { /* CalAIM specific colors */ }
}
```

### Content Updates
- Patient data: `data/mockData.js`
- Service codes: `lib/utils.js`
- UI text: Component files

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Push to GitHub**: Push your code to the `main` branch
2. **Automatic Deployment**: GitHub Actions will automatically build and deploy
3. **Live Site**: Your site will be available at `https://[username].github.io/Support-Sync`

### Manual Deployment

#### Option 1: Using GitHub Actions (Automatic)
```bash
# Push to main branch - deployment happens automatically
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

#### Option 2: Manual Build and Deploy
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Environment Variables
Create `.env.local` for production configuration:
```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
```

### GitHub Pages Setup

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"
4. The workflow will automatically deploy on every push to main

### Custom Domain (Optional)
To use a custom domain:
1. Add your domain to `.github/workflows/deploy.yml` in the `cname` field
2. Create a `CNAME` file with your domain name
3. Configure DNS settings with your domain provider

## 📈 Analytics & Monitoring

The platform is designed to integrate with:
- Google Analytics
- Custom event tracking
- Performance monitoring
- User behavior analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for CalAIM healthcare compliance demonstration.

## 🆘 Support

For technical support or questions about CalAIM compliance features, please contact the development team.

---

**Demo Mode Notice**: This is a demonstration of the Support Sync platform. All data shown is simulated and no real patient information is used.