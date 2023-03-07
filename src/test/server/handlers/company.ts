import { makeData } from '@/lib/utils/makeData'
import { rest } from 'msw'

/** 会社API */
export const companyHandlers = [
  rest.get('/companyList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ companyList: makeData(3) }))
  }),
]
