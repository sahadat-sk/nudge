import { api } from "@/lib/api/http-client";

export async function logout() {
  api.post("auth/logout");
}
