const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
  try {
    const token = req.cookies?.token;

    console.log("token", token);
    if (!token) {
      return res.status(401).json({
        message: "please login...!",
        status: false,
      });
    }

    jwt.verify(
      token,
      "bfkhakjshasjdasjdbasjdbasjkbas",
      function (err, decoded) {
        console.log(err);
        console.log("decoded", decoded);

        if (err) {
          return res.status(401).json({
            message: "Invalid token",
            status: false,
          });
        }

        req.userId = decoded?._id;
        next();
      }
    );
  } catch (error) {
    return res.send("error in auth token", error);
  }
}

module.exports = authToken;