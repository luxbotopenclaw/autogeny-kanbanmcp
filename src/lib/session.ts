import { IronSessionOptions } from 'iron-session'

if (!process.env.SESSION_SECRET) {
  throw new Error('SESSION_SECRET env var is required')
}

export const sessionOptions: IronSessionOptions = {
  cookieName: 'kanban-session',
  password: process.env.SESSION_SECRET,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'strict' as const,
  },
}

export interface SessionData {
  userId: string
  orgId: string
}

declare module 'iron-session' {
  interface IronSessionData extends SessionData {}
}
