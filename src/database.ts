import { Knex, knex as setupKnex } from 'knex'
import { env } from './env'

if (!process.env.DATABASE_URL) {
  throw new Error('Database env not found')
}

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection:
    env.DATABASE_CLIENT === 'sqlite'
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABASE_URL,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db',
  },
}

export const knex = setupKnex(config)
