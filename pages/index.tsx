import { useContext } from "react";
import { AuthContext } from "@/contextes";
import { useTranslation } from "next-i18next";
import { withCommonGetServerSideProps } from "@/utils/withCommonGetServerSideProps";
import Link from "next/link";

export const getServerSideProps = withCommonGetServerSideProps(["auth", "common"]);
export default function Home() {
  const { logout, user } = useContext(AuthContext);
  const { t } = useTranslation();
  return (
    <main>
      <code dir="ltr">
        auth user:
        <pre>
          {JSON.stringify(
            {
              email: user?.email
            },
            null,
            2
          )}
        </pre>
      </code>
      {user ? (
        <button
          onClick={() => logout()}
          className="group relative w-full p-2"
        >
          {t("auth:logout")}
        </button>
      ) : (
        <Link href="/login">{t("auth:login")}</Link>
      )}
      <br />
      <Link href="/other-page">{t("common:other-page")}</Link>
    </main>
  );
}
