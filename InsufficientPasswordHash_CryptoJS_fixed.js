const crypto = require('crypto-js')
function hashPassword(email, password) {
  var algo = crypto.algo.PBKDF2.create()
  algo.update(password, 'utf-8') // GOOD
  algo.update(email.toLowerCase(), 'utf-8')
  var hash = algo.finalize()
  return hash.toString(crypto.enc.Base64)
}
