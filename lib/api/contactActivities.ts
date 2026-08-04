import {
  ContactActivity,
  CreateActivity,
  UpdateActivity,
} from "@/types/activity";
import { api } from "@/lib/api/http-client";

export async function getActivities(
  contactId: string,
): Promise<ContactActivity[]> {
  const { data } = await api.get(`/contacts/${contactId}/activities`);

  return data;
}
export async function getActivity(
  contactId: string,
  activityId: string,
): Promise<ContactActivity> {
  const { data } = await api.get(
    `/contacts/${contactId}/activities/${activityId}`,
  );

  return data;
}
export async function createActivity(
  contactId: string,
  body: CreateActivity,
): Promise<ContactActivity> {
  const { data } = await api.post(`/contacts/${contactId}/activities`, body);

  return data;
}
export async function updateActivity(
  contactId: string,
  activityId: string,
  body: UpdateActivity,
): Promise<ContactActivity> {
  const { data } = await api.patch(
    `/contacts/${contactId}/activities/${activityId}`,
    body,
  );

  return data;
}
export async function deleteActivity(contactId: string, activityId: string) {
  await api.delete(`/contacts/${contactId}/activities/${activityId}`);
}
