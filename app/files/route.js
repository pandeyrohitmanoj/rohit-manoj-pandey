// app/api/file/route.ts
const fs = require('fs')
import path, { dirname } from 'path'

export async function GET(req) {
  const { searchParams, } = new URL(req.url)
  const name = searchParams.get('name')
  const filePath = path.join('./','.next',name)
  //console.log(filePath);
  try {
    const buffer = fs.readFileSync(filePath); // Read the file asynchronously
    const headers = new Headers();
    headers.append('Content-Disposition', `attachment; filename="${name}"`);
    headers.append('Content-Type', 'application/pdf');
    return new Response(buffer, { headers });
  } catch (error) {
    console.error('Error reading file:', error);
    return new Response('File not found or error reading file.', { status: 404 });
  }
  }
  
  