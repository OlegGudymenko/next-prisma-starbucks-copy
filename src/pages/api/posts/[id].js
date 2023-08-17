import { prisma } from '@/db/prisma'

export default async function handler(req, res) {
  if(req.method === 'GET') {
    try {
      const data = await prisma.post.findUnique({
        where: {
          id:  parseInt(req.query.id)
        }
      })

      if(data){
        console.log(data,'Post data')
        return res.status(200).json({ data })
      }
      return res.status(404).json({
        data: null,
        message: 'Post not found'
      })
     
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  }
}