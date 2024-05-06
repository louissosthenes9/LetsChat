import jwt from 'jsonwebtoken';
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(403).json({
                error: 'Unauthorized -No token provided',
            })

        }

        const decodedToken = jwt.verify(token, process.env.SECRET);
        if (!decodedToken) {
            return res.status(403).json({
                message: "Invalid token"
            })
        }

        const user = await User.findById(decodedToken.userId).select("-password");
        if (!user){
            return res.status(404).json({
             error:"user not found"
            })
        }

        req.user = user;

        next()
    } catch (err) {
        console.log("error in the protectRoute middleware: ", err.message)
        res.status(500).json({error: 'Something went wrong'});

    }
}
export  default protectRoute()