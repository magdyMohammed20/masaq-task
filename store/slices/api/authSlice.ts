import { apiSlice } from "@/store/slices/api/apiSlice";
import { User, APISingleResourceResponse, APIActionResponse } from "@/types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    register: builder.mutation<
      APIActionResponse<User>,
      {
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        password: string;
      }
    >({
      query: (data) => ({
        url: "/users/add",
        method: "POST",
        data: data
      })
    }),
    update: builder.mutation<User, Pick<User, "id"> & Omit<Partial<User>, "id">>({
      query: ({ id, ...data }) => ({
        url: `/users/${id}`,
        method: "POST",
        data: data
      })
    })
  })
});

export const { useUpdateMutation, useRegisterMutation } = extendedApiSlice;
