import { redirect } from "next/navigation";
import { getCookie } from "../actions";

export default async function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getCookie("token");
  if (!token) {
    redirect("/login");
  }
  return <div>{children}</div>;
}
