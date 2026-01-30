// Local cache for Hidden Hand API data (Sep-Dec 2025)
// These files were fetched from the HH API after the GitHub cache stopped being updated

import aura1756756800 from './aura-1756756800.json';
import aura1757966400 from './aura-1757966400.json';
import aura1759176000 from './aura-1759176000.json';
import aura1760385600 from './aura-1760385600.json';
import aura1761595200 from './aura-1761595200.json';
import aura1762804800 from './aura-1762804800.json';
import aura1764014400 from './aura-1764014400.json';
import aura1765224000 from './aura-1765224000.json';
import aura1766433600 from './aura-1766433600.json';

// Map timestamp to cached data
export const LOCAL_CACHE: Record<number, unknown> = {
    1756756800: aura1756756800, // 2025-09-01
    1757966400: aura1757966400, // 2025-09-15
    1759176000: aura1759176000, // 2025-09-29
    1760385600: aura1760385600, // 2025-10-13
    1761595200: aura1761595200, // 2025-10-27
    1762804800: aura1762804800, // 2025-11-10
    1764014400: aura1764014400, // 2025-11-24
    1765224000: aura1765224000, // 2025-12-08
    1766433600: aura1766433600, // 2025-12-22
};

// Timestamps covered by local cache
export const LOCAL_CACHE_TIMESTAMPS = Object.keys(LOCAL_CACHE).map(Number);
