import { getCookie } from "@/app/actions";

interface Props {
  body: any;
  url: string;
}

export const getData = async (url: string) => {
  const token = await getCookie("access_token");

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };

  const fetchOptions = {
    method: "GET",
    headers
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, fetchOptions);

  const data = await response.json();
  return data;
};

export const addData = async ({ body = {}, url }: Props) => {
  const token = await getCookie("access_token");

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json"
  };

  const fetchOptions = {
    method: "POST",
    headers,
    body: body ? JSON.stringify(body) : null
  };

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, fetchOptions);

  const data = await response.json();
  return data;
};
