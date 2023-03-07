import axios, { AxiosResponse } from 'axios'
import { GetUserResponse } from '@/features/auth/models/GetUserResponse'

/** ログインユーザ取得 */
export const getUser = (): Promise<AxiosResponse<GetUserResponse>> => {
  return axios.get('/user')
}
