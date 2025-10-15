import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '../../lib/supabase'
import prisma from '../../lib/prisma';
import formidable, { File } from 'formidable'
import fs from 'fs'

// Desactiva el bodyParser de Next.js para manejar form-data
export const config = {
  api: {
    bodyParser: false,
  },
}


// ejemplo simple: subes Buffer a Supabase Storage y guardas la URL en images.url
/* 
const { data, error } = await supabase.storage
  .from('images-bucket')
  .upload(`projects/${projectId}/${filename}`, fileBuffer, {
    cacheControl: '3600',
    upsert: false,
    contentType: 'image/jpeg',
  })

const publicUrl = supabase.storage.from('images-bucket').getPublicUrl(data.path)
 */