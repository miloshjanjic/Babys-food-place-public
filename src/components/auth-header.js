export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('profile')).user;
  const token = JSON.parse(localStorage.getItem('profile')).token;

  if (user && token) {
    // for Node.js Express back-end
    return { 'x-access-token': token };
  } else {
    return {};
  }
};

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, config.get('auth').jwt_key, (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
} //! za na back end