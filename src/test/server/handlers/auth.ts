import { userGenerator } from '@/test/dataGenerators/userGenerators'
import { rest } from 'msw'

/** 認証 */
export const authHandlers = [
  /** ログインユーザ取得API */
  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ user: userGenerator() }))
  }),
]
