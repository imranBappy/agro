import { apiSlice } from '../api/apiSlice';

export const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `/products`,
            providesTags: ['Products'],
        }),
    }),
});

export const { useGetAllProductsQuery } = productApi;