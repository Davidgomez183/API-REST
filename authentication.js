// authentication.js
const jwt = require('jsonwebtoken');
const secretKey = 'tuClaveSecreta'; // Clave secreta para firmar el token

// Middleware para verificar el token de autenticación
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next(); // Paso al siguiente middleware
    });
}

module.exports = {
    authenticateToken
};
