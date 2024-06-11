import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Provider as ReduxProvider } from "react-redux";
import { appWithTranslation } from "next-i18next";
import i18nextConfig from "@/next-i18next.config.js";
import "nprogress/nprogress.css";
import "@/styles/globals.css";
import { storeWrapper } from "@/store";
import { AuthProvider } from "@/contextes";
import { AppProvider } from "@/contextes/AppContext";

function App({ Component, pageProps: { session, ...rest } }: AppProps) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
        <AuthProvider>
          <AppProvider>
            <Component {...props} />
          </AppProvider>
        </AuthProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(App, i18nextConfig);
