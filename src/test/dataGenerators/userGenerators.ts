import { User } from '@/features/auth/models/User'
import { faker } from '@faker-js/faker/locale/ja'

/** モック用ユーザーデータ生成 */
export const userGenerator = (): User => {
  return {
    userId: faker.datatype.string(7),
    userName: faker.name.lastName() + ' ' + faker.name.firstName(),
    email: faker.internet.email(),
  }
}
