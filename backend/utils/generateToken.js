import jwt from 'jsonwebtoken'

const generateTokenAndCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.SECRET,{expiresIn: '15m'})
     res.cookie('jwt', token, {
         httpOnly: true,
         maxAge: 6000000,
         sameSite: 'strict',
         secure:process.env.NODE_ENV === 'production',

     })

}

export default generateTokenAndCookie