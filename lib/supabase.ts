import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY! // Usar la clave de servicio para operaciones de servidor
export const supabase = createClient(supabaseUrl, supabaseKey)
