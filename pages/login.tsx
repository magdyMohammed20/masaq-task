import { useEffect, useState } from "react";
import Link from "next/link";
import { setCookie } from "cookies-next";

import { InferGetServerSidePropsType, NextPage } from "next";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { withCommonGetServerSideProps } from "@/utils/withCommonGetServerSideProps";
import { useTranslation } from "next-i18next";

export const getServerSideProps = withCommonGetServerSideProps(["auth", "common"]);
const Login: NextPage = ({ NEXTAUTH_URL }: InferGetServerSidePropsType<any>) => {
  const { t, i18n } = useTranslation();

  const router = useRouter();

  const redirectUrl = (router.query.callbackUrl as string) || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<"username" | "password" | "global", string>>({
    username: "",
    password: "",
    global: ""
  });
  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      window.location.replace(redirectUrl.replace(NEXTAUTH_URL, ""));
    }
  }, [NEXTAUTH_URL, redirectUrl, status]);

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

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password
    });

    if (res && !res.ok) {
      toast.error(res.error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
        <div className="mb-2">
          <label className="block text-sm font-semibold leading-7">{t("common:select_language")}</label>
          <select
            value={i18n.language}
            onChange={async (e) => {
              const locale = e.target.value;
              await i18n.changeLanguage(locale);

              document.documentElement.setAttribute("dir", i18n.language === "ar" ? "rtl" : "ltr");
              document.documentElement.setAttribute("lang", i18n.language);

              setCookie("NEXT_LOCALE", i18n.language, {
                path: "/",
                sameSite: "strict",
                secure: process.env.NODE_ENV === "production"
              });
            }}
            className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
          >
            <option value="en">{t("common:english")}</option>
            <option value="ar">{t("common:arabic")}</option>
          </select>
        </div>
        <h1 className="font-semibold tracking-normal">{t("auth:login_title")}</h1>
        <p className="text-xs/4 font-light text-slate-500">{t("auth:login_description")}</p>
        <div className="pt-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-2"
          >
            <div>
              <label className="block text-xs font-medium leading-7">{t("auth:username")}</label>
              <input
                placeholder={t("auth:username") as string}
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.username && <p className="text-sm font-bold italic text-red-500">{errors.username}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium leading-7">{t("auth:password")}</label>
              <input
                placeholder={t("auth:password") as string}
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
                {t("auth:register")}
              </Link>
              <button
                type="submit"
                className="rounded-full bg-blue-600 px-2.5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1"
              >
                {t("auth:login")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
