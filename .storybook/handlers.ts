// MSW handlers for Storybook
import { http, HttpResponse } from 'msw';

export const handlers = [
  // Contacts API
  http.get('/contacts', () => {
    return HttpResponse.json({
      totalItems: 3,
      currentOffset: 0,
      content: [
        {
          id: "201",
          firstName: "Alice",
          lastName: "Johnson",
          email: "alice@amazon.com",
          company: "Amazon",
          insights: 45,
          recommendations: 12,
          industry: "Tech",
          jobTitle: "CTO",
          stage: "LEAD",
        },
        {
          id: "202",
          firstName: "Bob",
          lastName: "Smith",
          email: "bob@microsoft.com",
          company: "Microsoft",
          insights: 32,
          recommendations: 8,
          industry: "Tech",
          jobTitle: "VP Engineering",
          stage: "PROSPECT",
        },
        {
          id: "203",
          firstName: "Carol",
          lastName: "Davis",
          email: "carol@google.com",
          company: "Google",
          insights: 28,
          recommendations: 15,
          industry: "Tech",
          jobTitle: "Director of Product",
          stage: "CUSTOMER",
        },
      ],
    });
  }),

  // Topics API
  http.get('/topics/summaries', () => {
    return HttpResponse.json({
      totalItems: 2,
      currentOffset: 0,
      content: [
        {
          id: "101",
          value: "Celebrity news",
          contactIncidence: 369,
          topicIncidence: 2,
          coverageScore: 75,
          topicCompetition: "Low",
        },
        {
          id: "102",
          value: "Technology trends",
          contactIncidence: 245,
          topicIncidence: 5,
          coverageScore: 60,
          topicCompetition: "Medium",
        },
      ],
    });
  }),

  // Competitors API
  http.get('/competitors', () => {
    return HttpResponse.json([
      {
        id: "301",
        name: "Competitor A",
        url: "https://competitor-a.com",
        score: 80,
        topics: ["AI", "Machine Learning"],
      },
      {
        id: "302",
        name: "Competitor B",
        url: "https://competitor-b.com",
        score: 65,
        topics: ["Data Science", "Analytics"],
      },
    ]);
  }),

  // Dashboard APIs
  http.get('/radar/personalizationScore', () => {
    return HttpResponse.json([{ score: "85", changeScore: "5" }]);
  }),

  http.get('/radar/newPersonalizedEngagementsScore', () => {
    return HttpResponse.json([{ engagements: 120, changePercentage: 0.16 }]);
  }),

  http.get('/radar/personalizedContentEngagementRate', () => {
    return HttpResponse.json([{ engagementRate: 75, changePercentage: 0.05 }]);
  }),

  http.get('/radar/contentInfluencedRevenue', () => {
    return HttpResponse.json([{ revenue: 150000, changePercentage: 0.10 }]);
  }),
];
