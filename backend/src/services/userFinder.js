import jwt from "jsonwebtoken";

const userExtractor = (req,res,next) =>{
    const token = req.get('authorization').split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
    const { user_id } = decodedToken
    req.user = { user_id: user_id }
    next()
}

export default userExtractor