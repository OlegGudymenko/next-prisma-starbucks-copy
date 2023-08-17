import { hash } from "bcrypt";

import { prisma } from '@/db/prisma'
import { passwordRegex } from '@/utils/validation';

export default async function handle(req, res) {
  if (req.method === "POST") {

    const { email, firstName, lastName, password } = req.body;

    if(!email || !firstName || !lastName || !password) {
      return res.status(400).json({
        user: null,
        message: 'All fields are required'
      })
    }

    const isEmailExisted = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if(isEmailExisted){
      return res.status(400).json({
        user: null,
        message: 'User with this email already exists'
      })
    }

    const isPasswordValid = passwordRegex.test(password);

    if(!isPasswordValid){
      return res.status(400).json({
        user: null,
        message: 'Invalid password format'
      })
    }

    const hashedPassword = await hash(password, 10);
    const { password: _pass, ...newUser} = await prisma.user.create({
      data: {
        email,
        userName: email,
        firstName,
        lastName, 
        password: hashedPassword
      }
    })


    res.status(200).json({
      user: newUser,
      message: 'Success'
    })
  } else {
    return res.status(405).json({ message: "Method Not allowed" });
  }
}