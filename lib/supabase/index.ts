import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase

declare global {
    namespace NodeJS {
        export interface ProcessEnv {
            NEXT_PUBLIC_SUPABASE_URL: string
            NEXT_PUBLIC_SUPABASE_ANON_KEY: string
        }
    }
}
