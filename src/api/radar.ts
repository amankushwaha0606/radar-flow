// simple fetch wrapper
async function api<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(await res.text());
  if (res.status === 204) return {} as T; // prevent json() crash
  return res.json();
}

// AUTH
export const createAccount = (email: string) =>
  api<void>("/auth/user", {
    method: "POST",
    body: JSON.stringify({ email }),
  });

export const login = (email: string) =>
  api<void>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email }),
  });

export const verifyOtp = (code: string) =>
  api<{ token: string }>("/auth/verify", {
    method: "POST",
    body: JSON.stringify({ code }),
  });

// Radar
export const getPersonalizationScore = () =>
  api<{ score: string; changeScore: string }[]>("/radar/personalizationScore");

export const getNewEngagements = () =>
  api<{ engagements: number; changePercentage: number }[]>(
    "/radar/newPersonalizedEngagementsScore"
  );

export const getEngagementRate = () =>
  api<{ engagementRate: number; changePercentage: number }[]>(
    "/radar/personalizedContentEngagementRate"
  );

export const getRevenue = () =>
  api<{ revenue: number; changePercentage: number }[]>(
    "/radar/contentInfluencedRevenue"
  );

// TABLES
export const getTopics = () => api<any>("/topics/summaries");
export const getContacts = () => api<any>("/contacts");
export const getCompetitors = () => api<any[]>("/competitors");
export const updateCompetitor = (id: string, body: any) =>
  api<void>(`/competitors/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
export const addCompetitor = (body: any) =>
  api<void>("/competitors", {
    method: "POST",
    body: JSON.stringify(body),
  });
