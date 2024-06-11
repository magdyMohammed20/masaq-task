import React, { ReactNode, createContext, useCallback, useEffect, useState } from "react";

import { AxiosError, AxiosResponse } from "axios";
import { getSession, signOut, useSession } from "next-auth/react";

import { useAppDispatch, useAppSelector } from "@/hooks";
import { axios } from "@/lib/axios";
import { AppSliceStateType, setAccessToken } from "@/store/slices/app-slice";
import { AuthSliceStateType, fetchAuth } from "@/store/slices/auth-slice";

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps extends AuthSliceStateType {
  authenticated: boolean;
  isAuthReady: boolean;
  logout: () => void;
  refetchAuth: () => void;
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
  const state = useAppSelector<AuthSliceStateType>((state) => state.auth);
  const app = useAppSelector<AppSliceStateType>((state) => state.app);
  const dispatch = useAppDispatch();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [isReady, setIsReady] = useState<boolean>(false);
  const { update, data } = useSession();

  const logout = useCallback(async (callbackUrl = {}) => {
    await signOut(callbackUrl);
  }, []);

  const internal_fetchAuth = useCallback(async () => {
    return dispatch(
      fetchAuth({
        Authorization: app.accessToken ? `Bearer ${app.accessToken}` : undefined
      })
    );
  }, [app.accessToken, dispatch]);

  useEffect(() => {
    getSession().then(async (session: any) => {
      if (!session) {
        setIsReady(true);

        return;
      }

      if (session?.access_token) {
        dispatch(setAccessToken(session?.access_token));
      } else {
        dispatch(setAccessToken(null));
      }

      await internal_fetchAuth()
        .then(() => {
          setIsReady(true);
          setAuthenticated(true);
        })
        .catch(async () => {
          await logout();
        });
    });
  }, [dispatch, internal_fetchAuth, logout]);

  useEffect(() => {
    axios.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error: AxiosError) => {
        const { response } = error;

        if (response?.status === 401) {
          setAuthenticated(false);

          const callbackUrl = `${window.location.origin}/login?callbackUrl=${window.location.pathname}`;

          await logout({ callbackUrl });
        }

        return Promise.reject(error);
      }
    );
  }, [logout]);

  useEffect(() => {
    if (!authenticated) {
      setIsReady(false);

      return;
    }
    setIsReady(true);
  }, [authenticated]);

  useEffect(() => {
    if (!state.user || !state.user?.id) {
      return;
    }

    update({
      ...data,
      user: {
        ...data?.user,
        ...state.user
      }
    });
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        authenticated,
        refetchAuth: internal_fetchAuth,
        logout,
        isAuthReady: isReady
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
