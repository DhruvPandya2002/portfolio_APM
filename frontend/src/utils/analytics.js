import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel with hardcoded token (Project tokens are safe to expose)
const MIXPANEL_TOKEN = 'a01ef34a6d82a6581d02a50250d947cc';

let isInitialized = false;

export const initAnalytics = () => {
  if (!MIXPANEL_TOKEN) {
    console.error('❌ Mixpanel token not found');
    return;
  }

  if (!isInitialized) {
    try {
      mixpanel.init(MIXPANEL_TOKEN, {
        debug: true, // Enable debug mode to see logs
        track_pageview: true,
        persistence: 'localStorage',
      });
      isInitialized = true;
      console.log('✅ Mixpanel Analytics Initialized with token:', MIXPANEL_TOKEN.substring(0, 8) + '...');
      
      // Test event immediately
      mixpanel.track('Mixpanel Initialized', {
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('❌ Mixpanel initialization failed:', error);
    }
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
  console.log(`[Analytics] trackContactClick called with: ${contactType}`);
  
  if (!isInitialized) {
    console.warn('[Analytics] Mixpanel not initialized - skipping Contact Clicked');
    return;
  }
  
  try {
    mixpanel.track('Contact Clicked', {
      contact_type: contactType,
      timestamp: new Date().toISOString(),
    });
    console.log(`✅ [Analytics] Contact Clicked event sent: ${contactType}`);
  } catch (error) {
    console.error('[Analytics] Error tracking contact click:', error);
  }
};

// Track experience card expansion
export const trackExperienceExpand = (companyName) => {
  console.log(`[Analytics] trackExperienceExpand called with: ${companyName}`);
  
  if (!isInitialized) {
    console.warn('[Analytics] Mixpanel not initialized - skipping Experience Card Expanded');
    return;
  }
  
  try {
    mixpanel.track('Experience Card Expanded', {
      company: companyName,
      timestamp: new Date().toISOString(),
    });
    console.log(`✅ [Analytics] Experience Card Expanded event sent: ${companyName}`);
  } catch (error) {
    console.error('[Analytics] Error tracking experience expand:', error);
  }
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
