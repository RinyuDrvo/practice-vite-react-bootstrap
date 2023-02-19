import { rest } from 'msw'
import { makeData } from '@/lib/utils/makeData'

export const handlers = [
  rest.get('/companyList', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ companyList: makeData(3) }))
  }),
]
