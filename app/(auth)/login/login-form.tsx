"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";
import { addCookie } from "../../actions";
import { addData } from "@/lib/fetch";

export default function LoginForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<"username" | "password" | "global", string>>({
    username: "",
    password: "",
    global: ""
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!username) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      return;
    }
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      return;
    }

    const res = await addData({
      url: "/auth/login",
      body: {
        username,
        password
      }
    });

    if (res?.token) {
      await addCookie("token", res.token);
      toast.success("Login Successfully");
      router.push("/");
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
        <Link
          className="text-lg font-bold"
          href="/"
        >
          home
        </Link>
        <div className="mb-2">
          <label className="block text-sm font-semibold leading-7">select_language</label>
          <select
            // value={i18n.language}
            // onChange={async (e) => {
            //   const locale = e.target.value;
            //   await i18n.changeLanguage(locale);

            //   document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
            //   document.documentElement.setAttribute("lang", i18n.language);

            //   setCookie("NEXT_LOCALE", i18n.language, {
            //     path: "/",
            //     sameSite: "strict",
            //     secure: process.env.NODE_ENV === "production"
            //   });
            // }}
            className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
          >
            <option value="en">english</option>
            <option value="ar">arabic</option>
          </select>
        </div>
        <h1 className="font-semibold tracking-normal">login_title</h1>
        <p className="text-xs/4 font-light text-slate-500">login_description</p>
        <div className="pt-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            <div>
              <label className="block text-xs font-medium leading-7">username</label>
              <input
                placeholder={"auth:username" as string}
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.username && <p className="text-sm font-bold italic text-red-500">{errors.username}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium leading-7">{"auth:password"}</label>
              <input
                placeholder={"auth:password" as string}
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.password && <p className="text-sm font-bold italic text-red-500">{errors.password}</p>}
            </div>
            {errors.global && <p className="text-sm font-bold italic text-red-500">{errors.global}</p>}
            <div className="flex justify-between text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1">
              <Link
                href="/register"
                className="rounded-xl px-2 py-1.5 ring-offset-1 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                {"auth:register"}
              </Link>
              <button
                type="submit"
                className="rounded-full bg-blue-600 px-2.5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1"
              >
                {"auth:login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
