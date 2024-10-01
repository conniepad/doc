// Create a new file: src/utils/analytics.js
import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = '';

// Initialize Mixpanel
export const initializeMixpanel = () => {
    mixpanel.init(MIXPANEL_TOKEN, {
        debug: process.env.NODE_ENV !== 'production',
        track_pageview: true,
        persistence: 'localStorage',
    });
};

// Track page views
export const trackPageView = (pageName) => {
    mixpanel.track('Doc View', {
        'page': pageName,
    });
};

// Custom event tracking function
export const trackEvent = (eventName, properties = {}) => {
    mixpanel.track(eventName, properties);
};