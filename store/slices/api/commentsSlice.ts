import { apiSlice } from "@/store/slices/api/apiSlice";
import { Comment } from "@/types";

export const extendedApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    fetchComments: builder.query<
      {
        comments: Comment[];
        limit: number;
        skip: number;
        total: number;
      },
      void
    >({
      query: () => ({
        url: "/comments",
        method: "GET"
      })
    }),
    createComment: builder.mutation<
      Comment,
      Pick<Comment, "postId" | "body"> & {
        userId: number;
      }
    >({
      query: (data) => ({
        url: "/comments/add",
        method: "POST",
        data
      }),
      async onQueryStarted(data, { dispatch, queryFulfilled }) {
        const update = dispatch(
          updateCommentsQueryData("fetchComments", undefined, (draft) => {
            draft.comments.unshift({
              body: data.body,
              postId: data.postId,
              likes: 0,
              id: draft.total + 1,
              user: {
                id: data.userId,
                fullName: "You",
                username: "you"
              }
            });
            draft.total++;
          })
        );
        queryFulfilled.catch(() => {
          update.undo();
        });
      }
    })
  })
});

export const {
  useFetchCommentsQuery,
  useCreateCommentMutation,
  util: { getRunningQueriesThunk: getRunningCommentsQueries, updateQueryData: updateCommentsQueryData }
} = extendedApiSlice;
export const { fetchComments } = extendedApiSlice.endpoints;
