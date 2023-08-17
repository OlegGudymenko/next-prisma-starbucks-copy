import { prisma } from '@/db/prisma'

export default async function handler(req, res) {
  if(req.method === 'POST') {
    try {
      const data = await prisma.post.create({
        data: req.body
      })

      return res.status(200).json({ data, message: 'Post successfuly created' })
    } catch (err) {
      console.error(err)
      return res.status(400).json({ msg: 'Something went wrong' })
    }
  }
 
  if(req.method === 'GET') {
    try {
      console.log('GET POSTS')
      const data = await prisma.post.findMany()

      console.log(data,'Posts data')
      return res.status(200).json({ data , message: 'success'})

    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  }
}