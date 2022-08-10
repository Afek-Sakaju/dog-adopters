module.exports.isAuthenticatedMW = function (req, res, next) {
    if (req.isAuthenticated()) next();
    else res.redirect('/login.html');
};
