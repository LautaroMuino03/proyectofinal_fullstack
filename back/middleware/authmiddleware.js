const protectedRoute = (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ message: 'Acceso no autorizado' });
    }
    next(); // Permite el acceso si la sesión es válida
};

module.exports = { protectedRoute };
