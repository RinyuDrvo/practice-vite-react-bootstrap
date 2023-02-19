import axios, { AxiosResponse } from 'axios'
import { GetCompanyListResponse } from '@/feature/top/model/GetCompanyListResponse'

export const getCompanyList = (): Promise<
  AxiosResponse<GetCompanyListResponse>
> => {
  return axios.get('/companyList')
}
