// Create src/analytics.js
import { initializeMixpanel, trackPageView } from './utils/analytics';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

console.log('Analytics.js');

// Function to check if we're on localhost
const isLocalhost = () => {
    if (!ExecutionEnvironment.canUseDOM) return false;

    const hostname = window.location.hostname;
    return (
        hostname === 'localhost'
        // hostname === '[::1]' ||
        // hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
    );
};

if (ExecutionEnvironment.canUseDOM) {
    if (isLocalhost()) {
        console.log('isLocalhost');
    } else {
        console.log('canUseDOM');
        initializeMixpanel();

        // Track initial page view
        trackPageView(window.location.pathname);

        // Track page views on route changes
        window.addEventListener('popstate', () => {
            trackPageView(window.location.pathname);
        });
    }
}