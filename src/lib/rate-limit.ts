const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const ipMap = new Map<string, RateLimitEntry>();

let cleanupInterval: ReturnType<typeof setInterval> | null = null;

function scheduleCleanup(): void {
  if (cleanupInterval) return;
  cleanupInterval = setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of ipMap.entries()) {
      if (entry.resetAt <= now) {
        ipMap.delete(ip);
      }
    }
    if (ipMap.size === 0 && cleanupInterval) {
      clearInterval(cleanupInterval);
      cleanupInterval = null;
    }
  }, 60 * 1000); // Run every minute
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
}

export function rateLimit(ip: string): RateLimitResult {
  scheduleCleanup();

  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry) {
    ipMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      success: true,
      remaining: RATE_LIMIT_MAX - 1,
    };
  }

  if (entry.resetAt <= now) {
    ipMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return {
      success: true,
      remaining: RATE_LIMIT_MAX - 1,
    };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return {
      success: false,
      remaining: 0,
    };
  }

  entry.count += 1;
  return {
    success: true,
    remaining: RATE_LIMIT_MAX - entry.count,
  };
}
