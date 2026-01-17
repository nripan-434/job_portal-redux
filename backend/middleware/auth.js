import jwt from 'jsonwebtoken'

export const verifytoken = (req, res, next) => {
    const  authheader  = req.headers.authorization
    const token = authheader && authheader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized access , Sign in" })
    }
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY)

        if (verified) {
            req.user = verified
            next()
        }

    }
    catch (e) {
        return res.status(401).json({ error: "Access denied , Please login " })
    }



}