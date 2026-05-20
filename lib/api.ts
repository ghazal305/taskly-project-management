const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function apiFetch(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,

    headers: {
      "Content-Type": "application/json",

      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}

