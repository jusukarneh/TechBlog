const withAuth = (req, res, next) => {
 
  if (!req.session.logged_in) {
    res.redirect('/login');//http://localhost:3001/login
  } else {
    next();
  }
};

module.exports = withAuth;
