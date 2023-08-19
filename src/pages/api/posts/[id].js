import { prisma } from '@/db/prisma'

export default async function handler(req, res) {
  const { method, body, query } = req;

  if(method === 'GET') {
    try {
      const data = await prisma.post.findUnique({
        where: {
          id:  parseInt(query.id)
        }
      })

      if(data){
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

  if(method === 'PUT') {
    console.log(body,'body req')
    try {
      const data = await prisma.post.findUnique({
        where: {
          id: parseInt(query.id)
        }
      })

      if(!data){
        return res.status(404).json({
          user: null,
          message: `Post with id: ${id} not found`
        })
      }

      const updatedPost = await prisma.post.update({
        where: {
          id: parseInt(query.id)
        },
        data: body
      })
      console.log(updatedPost,'updatedPost')

      return res.status(200).json({
        data: updatedPost,
        message: 'Post not found'
      })
     
    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  }
}