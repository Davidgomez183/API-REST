// authentication.js
const jwt = require('jsonwebtoken');
const secretKey = 'tuClaveSecreta'; // Clave secreta para firmar el token

// Middleware para verificar el token de autenticación
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401); // Unauthorized
    console.log(token);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        else{
            console.log("OK")
        }
       
    });



}

module.exports = {
    authenticateToken
};
