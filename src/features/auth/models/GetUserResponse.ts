import { User } from '@/features/auth/models/User'

/** ユーザ情報取得レスポンスモデル */
export interface GetUserResponse {
  user: User
}
