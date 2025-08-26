import { http, HttpResponse } from "msw";

export const handlers = [
  // AUTH
  http.post("/auth/user", async ({ request }) => {
    const { email } = await request.json() as { email: string };
    return HttpResponse.json({ success: true, email }, { status: 200 });
  }),

  http.post("/auth/login", async ({ request }) => {
    const { email } = await request.json() as { email: string };
    // return some JSON instead of 204 empty
    return HttpResponse.json({ success: true, email }, { status: 200 });
  }),

  http.post("/auth/verify", async ({ request }) => {
    const { code } = await request.json() as { code: string };
    if (code === "123456") {
      return HttpResponse.json({ token: "mock.jwt.token" }, { status: 200 });
    }
    return HttpResponse.json({ error: "Invalid code" }, { status: 400 });
  }),

  // ACCOUNT progress
  http.get("/account/:id", async ({ params }) =>
    HttpResponse.json({
      id: params.id,
      name: "Acme Inc",
      status: { progress: 60, label: "PROFILE-IN-PROGRESS" },
    })
  ),

  // DASHBOARD METRICS
  http.get("/radar/newPersonalizedEngagementsScore", async () =>
    HttpResponse.json([{ engagements: 140, changePercentage: 0.16 }])
  ),

  http.get("/radar/personalizedContentEngagementRate", async () =>
    HttpResponse.json([{ engagementRate: 120, changePercentage: -0.04 }])
  ),

  http.get("/radar/personalizationScore", async () =>
    HttpResponse.json([{ score: "B+", changeScore: "up" }])
  ),

  http.get("/radar/contentInfluencedRevenue", async () =>
    HttpResponse.json([{ revenue: 10000, changePercentage: -0.04 }])
  ),

  http.get("/radar/topicsToWriteAbout", async () =>
    HttpResponse.json([
      { id: "1", value: "Generative AI", contactIncidence: 4, topicIncidence: 6 },
      { id: "2", value: "Cloud Costs", contactIncidence: 3, topicIncidence: 5 },
    ])
  ),

  http.get("/radar/contentToPromote", async () =>
    HttpResponse.json([
      {
        id: "3",
        title: "Ford is the best",
        imageUrl: "https://picsum.photos/seed/ford/320/180",
        url: "https://example.com/ford",
        matches: 10,
      },
    ])
  ),

  // TABLES
  http.get("/topics/summaries", async () =>
    HttpResponse.json({
      totalItems: 3,
      currentOffset: 0,
      content: [
        {
          "id": "101",
          "value": "Celebrity news",
          "contacts": 369,
          "topicCompetition": 3,
          "coverageScore": 60
        },
        {
          "id": "102",
          "value": "Politics",
          "contacts": 369,
          "topicCompetition": 45,
          "coverageScore": 40
        },
        {
          "id": "103",
          "value": "Barak Obama",
          "contacts": 369,
          "topicCompetition": 45,
          "coverageScore": 30
        },
        {
          "id": "104",
          "value": "Michelle Obama",
          "contacts": 369,
          "topicCompetition": 75,
          "coverageScore": 10
        },
        {
          "id": "105",
          "value": "The White House",
          "contacts": 369,
          "topicCompetition": 54,
          "coverageScore": 30
        },
        {
          "id": "106",
          "value": "US Presidents",
          "contacts": 369,
          "topicCompetition": 3,
          "coverageScore": 40
        },
        {
          "id": "107",
          "value": "US Presidents",
          "contacts": 369,
          "topicCompetition": 3,
          "coverageScore": 60
        },
        {
          "id": "108",
          "value": "US Presidents",
          "contacts": 369,
          "topicCompetition": 3,
          "coverageScore": 30
        },
        {
          "id": "109",
          "value": "US Presidents",
          "contacts": 369,
          "topicCompetition": 3,
          "coverageScore": 40
        }
      ]
    })
  ),

  http.get("/contacts", async () =>
    HttpResponse.json({
      totalItems: 2,
      currentOffset: 0,
      distinctValues: { uniqueCompanies: ["Amazon", "Google"] },
      content: [
        {
          "id": "201",
          "firstName": "Alyssa",
          "lastName": "Abbott",
          "email": "alyssaabbott@reflexarchitects.com",
          "company": "Reflex Architects",
          "insights": 48,
          "recommendations": 8,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "202",
          "firstName": "Patrick",
          "lastName": "Brumfield",
          "email": "patrickbrumfield@pangaeagroup.com",
          "company": "Pangaea Group",
          "insights": 93,
          "recommendations": 9,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "203",
          "firstName": "Nathanial",
          "lastName": "Gilmore",
          "email": "nathanialgilmore@dreamdesign.com",
          "company": "Dream Design",
          "insights": 40,
          "recommendations": 5,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "204",
          "firstName": "Olivia",
          "lastName": "Holderman",
          "email": "oliviaholderman@atelierlegacy.com",
          "company": "Atelier Legacy",
          "insights": 59,
          "recommendations": 7,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "205",
          "firstName": "Nathanial",
          "lastName": "Gilmore",
          "email": "nathanialgilmore@dreamdesign.com",
          "company": "Dream Design",
          "insights": 40,
          "recommendations": 5,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "206",
          "firstName": "Patrick",
          "lastName": "Brumfield",
          "email": "patrickbrumfield@pangaeagroup.com",
          "company": "Pangaea Group",
          "insights": 93,
          "recommendations": 9,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "207",
          "firstName": "Alyssa",
          "lastName": "Abbott",
          "email": "alyssaabbott@reflexarchitects.com",
          "company": "Reflex Architects",
          "insights": 48,
          "recommendations": 8,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "208",
          "firstName": "Olivia",
          "lastName": "Holderman",
          "email": "oliviaholderman@atelierlegacy.com",
          "company": "Atelier Legacy",
          "insights": 59,
          "recommendations": 7,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        },
        {
          "id": "209",
          "firstName": "Olivia",
          "lastName": "Holderman",
          "email": "oliviaholderman@atelierlegacy.com",
          "company": "Atelier Legacy",
          "insights": 59,
          "recommendations": 7,
          "industry": "",
          "jobTitle": "",
          "stage": ""
        }
      ],
    })
  ),

  http.get("/competitors", async () =>
    HttpResponse.json([
      {
        "id": "301",
        "name": "Rogers Stirk Harbour + Parker",
        "websiteURL": "https://www.competitorwebsite.com",
        "linkedinSlug": "Rogers-Stirk-Harbour-Parker"
      },
      {
        "id": "302",
        "name": "Foster + Partners",
        "websiteURL": "https://www.competitorwebsite.com",
        "linkedinSlug": "Fosterandpartners"
      },
      {
        "id": "303",
        "name": "Make Architects",
        "websiteURL": "https://www.competitorwebsite.com",
        "linkedinSlug": "MakeArchitects"
      },
      {
        "id": "304",
        "name": "David Chipperfield Architects",
        "websiteURL": "https://www.competitorwebsite.com",
        "linkedinSlug": "DavidChipperfieldArchitects"
      },
      {
        "id": "305",
        "name": "Adjaye Associates",
        "websiteURL": "https://www.competitorwebsite.com",
        "linkedinSlug": "AdjayeAssociates"
      }
    ])
  ),

  http.post("/competitors", async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json({ success: true, competitor: body }, { status: 200 });
  }),

  http.put("/competitors/:id", async ({ params, request }) => {
    const body = await request.json();
    return HttpResponse.json(
      { success: true, id: params.id, updated: body },
      { status: 200 }
    );
  }),
];
