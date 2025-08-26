import { useQuery, useMutation } from "@tanstack/react-query";
import * as api from "../api/radar";

// Dashboard hooks
export const usePersonalizationScore = () =>
  useQuery({
    queryKey: ["personalizationScore"],
    queryFn: api.getPersonalizationScore,
  });

export const useNewEngagements = () =>
  useQuery({ queryKey: ["newEngagements"], queryFn: api.getNewEngagements });

export const useEngagementRate = () =>
  useQuery({ queryKey: ["engagementRate"], queryFn: api.getEngagementRate });

export const useRevenue = () =>
  useQuery({ queryKey: ["revenue"], queryFn: api.getRevenue });

// Tables
export const useTopics = () =>
  useQuery({ queryKey: ["topics"], queryFn: api.getTopics });

export const useContacts = () =>
  useQuery({ queryKey: ["contacts"], queryFn: api.getContacts });

export const useCompetitors = () =>
  useQuery({ queryKey: ["competitors"], queryFn: api.getCompetitors });

export const useUpdateCompetitor = () =>
  useMutation({ mutationFn: api.updateCompetitor });

export const useAddCompetitor = () =>
  useMutation({ mutationFn: api.addCompetitor });
