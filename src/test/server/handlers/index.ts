import { companyHandlers } from '@/test/server/handlers/company'
import { authHandlers } from '@/test/server/handlers/auth'

export const handlers = [...companyHandlers, ...authHandlers]
