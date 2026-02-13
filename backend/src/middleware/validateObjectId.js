import mongoose from "mongoose";

const validateObjectId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        const err = new Error("Invalid ID format");
        err.status = 400;
        return next(err);
    }
    return next();
};

export default validateObjectId;
