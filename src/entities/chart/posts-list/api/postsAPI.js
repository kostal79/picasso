import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_JSONPLACEHOLDER}),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: ({ limit = 10, start = 0 }) => {
                return {
                    url: '/posts',
                    params: {
                        _limit: limit,
                        _start: start * limit,
                    }

                }
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch({ currentArg, previousArg }) {
                console.log('currentArg', currentArg)
                console.log('previousArg', previousArg)
                if (currentArg.start === previousArg?.start) {
                    return false
                }
                return true;
            },

        }),
        getPostById: builder.query({
            query: (id) => ({
                url: `posts/${id}`
            })
        })
    }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi