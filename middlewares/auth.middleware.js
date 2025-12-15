import jwt from "jsonwebtoken";

export function handleVerifyUserLogin(req, res, next){
    const accessToken = req.cookies.accessToken;

    try {
    if (!accessToken) {
        return res.status(400).json({message:"login first!"})
    }

    let decoded = jwt.verify(accessToken, process.env.JWT_PRIVATE_KEY);

    if (!decoded){
        return res.status(400).json({message:"not a valid token"})
    }
    req.user = decoded;

    next();
    }
    catch(err){
        return res.status(404).json({error: `${err}`})
    }

    // console.log(accessToken);
    // return res.send("hello")

}