import React, { ReactNode, createContext, useEffect, useRef } from "react";

import { useRouter } from "next/router";

import { AxiosResponse } from "axios";
import NProgress from "nprogress";

import { ToastProvider } from "@/contextes";
import { axios } from "@/lib/axios";

import { useTranslation } from "next-i18next";

interface ProviderProps {
  children: ReactNode;
}

const AppContext = createContext({});

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const isProgressBarRunning = useRef<boolean>(false);
  const lastProgressBarRequestTime = useRef<number>(0);

  useEffect(() => {
    NProgress.configure({
      showSpinner: false
    });

    return () => {
      NProgress.remove();
    };
  }, []);

  const runProgressBar = () => {
    const currentTime = Date.now();
    const timeDiff = currentTime - lastProgressBarRequestTime.current;

    if (timeDiff >= 0) {
      if (!isProgressBarRunning.current) {
        NProgress.start();
        isProgressBarRunning.current = true;
      }
    }

    lastProgressBarRequestTime.current = Date.now() + 500;
  };

  const stopProgressBar = () => {
    if (isProgressBarRunning.current) {
      NProgress.done();
      isProgressBarRunning.current = false;
    }
  };

  useEffect(() => {
    axios.interceptors.request.use((config) => {
      runProgressBar();

      return config;
    });

    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        stopProgressBar();

        return response;
      },
      (error) => {
        stopProgressBar();

        return Promise.reject(error);
      }
    );

    router.events.on("routeChangeStart", runProgressBar);
    router.events.on("routeChangeComplete", stopProgressBar);
    router.events.on("routeChangeError", stopProgressBar);

    return () => {
      router.events.off("routeChangeStart", runProgressBar);
      router.events.off("routeChangeComplete", stopProgressBar);
      router.events.off("routeChangeError", stopProgressBar);
    };
  }, [router.events]);

  return (
    <AppContext.Provider value={{}}>
      <ToastProvider dir={i18n.dir()}>{children}</ToastProvider>
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
