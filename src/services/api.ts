import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Restaurant[], void>({
      query: () => ''
    }),
    getDishes: builder.query<Restaurant, string>({
      query: (id) => `${id}`
    })
  })
})

export const { useGetDishesQuery, useGetRestaurantsQuery } = api

export default api
