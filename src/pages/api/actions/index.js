import { prisma } from '../../../db/prisma';

export default async function handler(req, res) {

  if(req.method === 'POST') {
    try {
      const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

      const { 
        postId,
        position,
        screenSize,
        userAgent,
      } = req.body;

      const data = await prisma.action.create({
        data: {
          position,
          post: {
            connect: { id: postId }
          },
          clientInfo: {
            create: {
              ipAddress,
              screenSize,
              userAgent
            }
          }
        },
        include: {
          clientInfo: true,
          post: true,
        },
      })


      return res.status(200).json({ data, message: 'Action successfuly created' })
    } catch (err) {
      console.error(err)
      return res.status(400).json({ msg: 'Something went wrong' })
    }
  }
 
  if(req.method === 'GET') {
    try {
      const data = await prisma.action.findMany()

      return res.status(200).json({ data , message: 'success'})

    } catch (err) {
      console.error(err)
      return res.status(500).json({ msg: 'Something went wrong' })
    }
  }
}