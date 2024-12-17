import User from "../models/userModel";

export const checkRole = (roles) => {
    return async (req, res, next) => {
        const user = await User.findById(req.user._id);
        //role check if true then only give access if role is false then return access denied
        if(roles.includes(user.role)){
            next();
        }else{
            return res.status(401).json({message: "Access Denied" });
        }
    }
}