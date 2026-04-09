import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
const MIXPANEL_TOKEN = process.env.REACT_APP_MIXPANEL_TOKEN;

let isInitialized = false;

export const initAnalytics = () => {
  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token not found');
    return;
  }

  if (!isInitialized) {
    mixpanel.init(MIXPANEL_TOKEN, {
      autocapture: true,
      record_sessions_percent: 100,
      debug: false, // Set to true for debugging
    });
    isInitialized = true;
    console.log('✅ Mixpanel Analytics Initialized');
  }
};

// Track page view
export const trackPageView = () => {
  if (!isInitialized) return;
  
  mixpanel.track('Portfolio Viewed', {
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    referrer: document.referrer || 'Direct',
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, additionalData = {}) => {
  if (!isInitialized) return;
  
  mixpanel.track('Button Clicked', {
    button_name: buttonName,
    timestamp: new Date().toISOString(),
    device: getDeviceType(),
    ...additionalData,
  });
};

// Track time on page (call this periodically)
export const trackTimeOnPage = (duration) => {
  if (!isInitialized) return;
  
  mixpanel.track('Time on Page', {
    duration_seconds: duration,
    timestamp: new Date().toISOString(),
  });
};

// Track section view
export const trackSectionView = (sectionName) => {
  if (!isInitialized) return;
  
  mixpanel.track('Section Viewed', {
    section: sectionName,
    timestamp: new Date().toISOString(),
  });
};

// Track contact interaction
export const trackContactClick = (contactType) => {
  if (!isInitialized) return;
  
  mixpanel.track('Contact Clicked', {
    contact_type: contactType,
    timestamp: new Date().toISOString(),
  });
};

// Track experience card expansion
export const trackExperienceExpand = (companyName) => {
  if (!isInitialized) return;
  
  mixpanel.track('Experience Card Expanded', {
    company: companyName,
    timestamp: new Date().toISOString(),
  });
};

// Identify user (for returning visitors)
export const identifyUser = () => {
  if (!isInitialized) {
    return { userId: 'not_initialized', visitCount: 0 };
  }
  
  // Generate or retrieve a unique ID for the user
  let userId = localStorage.getItem('portfolio_user_id');
  
  if (!userId) {
    userId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    localStorage.setItem('portfolio_user_id', userId);
  }
  
  mixpanel.identify(userId);
  
  // Track if returning visitor
  const visitCount = parseInt(localStorage.getItem('portfolio_visit_count') || '0') + 1;
  localStorage.setItem('portfolio_visit_count', visitCount);
  
  mixpanel.people.set({
    visit_count: visitCount,
    last_visit: new Date().toISOString(),
    device_type: getDeviceType(),
  });
  
  return { userId, visitCount };
};

// Helper function to detect device type
const getDeviceType = () => {
  const width = window.innerWidth;
  if (width < 768) return 'Mobile';
  if (width < 1024) return 'Tablet';
  return 'Desktop';
};

// Track session end
export const trackSessionEnd = (sessionDuration) => {
  if (!isInitialized) return;
  
  mixpanel.track('Session Ended', {
    total_duration_seconds: sessionDuration,
    timestamp: new Date().toISOString(),
  });
};

export default {
  initAnalytics,
  trackPageView,
  trackButtonClick,
  trackTimeOnPage,
  trackSectionView,
  trackContactClick,
  trackExperienceExpand,
  identifyUser,
  trackSessionEnd,
};
