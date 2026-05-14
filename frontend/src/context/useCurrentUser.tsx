

import { useQuery } from '@tanstack/react-query'

import { getCurrentUserApi } from '../api/auth.api'

export default function useCurrentUser() {
  return  useQuery({
    queryKey:["current-user"],
    queryFn: getCurrentUserApi
   })
  
}
