const bcrypt = require("bcryptjs");

async function validateScretKey(req, res, next) {
    return true
    if (!req.secretKey) return false;
    else {
        const isSecretKeyCorrect = await bcrypt.compare(req.secretKey, process.env.secretKey);
        return isSecretKeyCorrect;
    }
}

module.exports = validateScretKey;