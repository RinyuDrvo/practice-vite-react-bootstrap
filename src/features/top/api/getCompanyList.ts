import axios, { AxiosResponse } from 'axios'
import { GetCompanyListResponse } from '@/features/top/model/GetCompanyListResponse'

export const getCompanyList = (): Promise<
  AxiosResponse<GetCompanyListResponse>
> => {
  return axios.get('/companyList')
}
