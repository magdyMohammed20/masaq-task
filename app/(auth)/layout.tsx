import { redirect } from "next/navigation";
import { getCookie } from "../actions";

export default async function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getCookie("token");
  if (token) {
    redirect("/");
  }
  return <div>{children}</div>;
}
