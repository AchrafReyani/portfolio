import {getBackgroundForContinent} from '@/lib/geo/continentBackground';
import {resolveContinent} from '@/lib/geo/resolveContinent';
import {headers} from 'next/headers';

// Mock next/headers
jest.mock('next/headers', () => ({
  headers: jest.fn()
}));

describe('getBackgroundForContinent', () => {
  it('should return correct background for North America', () => {
    expect(getBackgroundForContinent('NA')).toBe(
      '/images/continents/north-america.jpg'
    );
  });

  it('should return correct background for South America', () => {
    expect(getBackgroundForContinent('SA')).toBe(
      '/images/continents/south-america.jpg'
    );
  });

  it('should return correct background for Europe', () => {
    expect(getBackgroundForContinent('EU')).toBe(
      '/images/continents/europe.jpg'
    );
  });

  it('should return correct background for Africa', () => {
    expect(getBackgroundForContinent('AF')).toBe(
      '/images/continents/africa.jpg'
    );
  });

  it('should return correct background for Asia', () => {
    expect(getBackgroundForContinent('AS')).toBe(
      '/images/continents/asia.jpg'
    );
  });

  it('should return correct background for Oceania', () => {
    expect(getBackgroundForContinent('OC')).toBe(
      '/images/continents/oceania.jpg'
    );
  });

  it('should return correct background for Antarctica', () => {
    expect(getBackgroundForContinent('AN')).toBe(
      '/images/continents/global.jpg'
    );
  });

  it('should return fallback for null', () => {
    expect(getBackgroundForContinent(null)).toBe(
      '/images/continents/global.jpg'
    );
  });

  it('should return fallback for invalid continent code', () => {
    expect(getBackgroundForContinent('XX')).toBe(
      '/images/continents/global.jpg'
    );
  });

  it('should return fallback for empty string', () => {
    expect(getBackgroundForContinent('')).toBe(
      '/images/continents/global.jpg'
    );
  });
});

describe('resolveContinent', () => {
  const mockHeaders = headers as jest.MockedFunction<typeof headers>;

  beforeEach(() => {
    jest.clearAllMocks();
    // Reset NODE_ENV
    delete (process.env as any).NODE_ENV;
  });

  afterEach(() => {
    delete (process.env as any).NODE_ENV;
  });

  describe('development mode', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'development';
    });

    it('should return continent from query param when x-request-url is set', async () => {
      const mockHeadersInstance = {
        get: jest.fn((key: string) => {
          if (key === 'x-request-url') {
            return 'http://localhost:3000/en?continent=EU';
          }
          return null;
        })
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      expect(result).toBe('EU');
      expect(mockHeadersInstance.get).toHaveBeenCalledWith('x-request-url');
    });

    it('should uppercase continent code from query param', async () => {
      const mockHeadersInstance = {
        get: jest.fn((key: string) => {
          if (key === 'x-request-url') {
            return 'http://localhost:3000/en?continent=eu';
          }
          return null;
        })
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      expect(result).toBe('EU');
    });

    it('should fall back to x-user-continent when no query param', async () => {
      const mockHeadersInstance = {
        get: jest.fn((key: string) => {
          if (key === 'x-request-url') {
            return 'http://localhost:3000/en';
          }
          if (key === 'x-user-continent') {
            return 'NA';
          }
          return null;
        })
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      expect(result).toBe('NA');
    });

    it('should handle invalid URL gracefully', async () => {
      const mockHeadersInstance = {
        get: jest.fn((key: string) => {
          if (key === 'x-request-url') {
            return 'not-a-valid-url';
          }
          if (key === 'x-user-continent') {
            return 'AS';
          }
          return null;
        })
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      // Should fall back to x-user-continent
      expect(result).toBe('AS');
    });

    it('should return null when no continent is available', async () => {
      const mockHeadersInstance = {
        get: jest.fn(() => null)
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      expect(result).toBeNull();
    });
  });

  describe('production mode', () => {
    beforeEach(() => {
      process.env.NODE_ENV = 'production';
    });

    it('should return continent from x-user-continent header', async () => {
      const mockHeadersInstance = {
        get: jest.fn((key: string) => {
          if (key === 'x-user-continent') {
            return 'EU';
          }
          return null;
        })
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      expect(result).toBe('EU');
    });

    it('should not check query params in production', async () => {
      const mockHeadersInstance = {
        get: jest.fn((key: string) => {
          if (key === 'x-request-url') {
            return 'http://example.com?continent=NA';
          }
          if (key === 'x-user-continent') {
            return 'EU';
          }
          return null;
        })
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      // Should use x-user-continent, not query param
      expect(result).toBe('EU');
    });

    it('should return null when no continent header is set', async () => {
      const mockHeadersInstance = {
        get: jest.fn(() => null)
      };
      mockHeaders.mockResolvedValue(mockHeadersInstance as any);

      const result = await resolveContinent();
      expect(result).toBeNull();
    });
  });
});

