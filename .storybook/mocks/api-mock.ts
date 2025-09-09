// Mock API functions for Storybook
import { mockApiResponses } from './api';

// Mock the API functions
export const mockApi = {
  getPersonalizationScore: () => Promise.resolve([{ score: "85", changeScore: "5" }]),
  getNewEngagements: () => Promise.resolve([{ engagements: 120, changePercentage: 0.16 }]),
  getEngagementRate: () => Promise.resolve([{ engagementRate: 75, changePercentage: 0.05 }]),
  getRevenue: () => Promise.resolve([{ revenue: 150000, changePercentage: 0.10 }]),
  getTopics: () => Promise.resolve(mockApiResponses.topics),
  getContacts: () => Promise.resolve(mockApiResponses.contacts),
  getCompetitors: () => Promise.resolve(mockApiResponses.competitors),
  updateCompetitor: () => Promise.resolve(),
  addCompetitor: () => Promise.resolve(),
};
