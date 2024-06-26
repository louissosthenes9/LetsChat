import jwt from 'jsonwebtoken'

const generateTokenAndCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.SECRET,{expiresIn: '59m'})
     res.cookie('jwt', token, {
         httpOnly: true,
         maxAge: 59*60*1000,
         sameSite: 'strict',
         secure:process.env.NODE_ENV === 'production',

     })

}

export default generateTokenAndCookie