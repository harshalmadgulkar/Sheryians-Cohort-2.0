import jwt from "jsonwebtoken";

export const identifyUser = (req, res, next) => {
    const token = req.cookies.instatoken;

    if (!token) {
        return res.status(401).json({
            message: "Token not provided. Unauthorized access"
        });
    }

    let decoded = null;
    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (error) {
        return res.status(401).json({
            message: "User not authorized"
        });
    }

    next();
};