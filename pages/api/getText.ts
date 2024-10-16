import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Environment Variable TEXT:", process.env.TEXT);
  res.status(200).json({ text: process.env.TEXT || 'empty' })
}