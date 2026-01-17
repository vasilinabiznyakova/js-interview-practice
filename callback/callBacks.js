// Debugging (Callbacks)
// Problem (again)
// function getData(callback) {
//   fetchFromApi((err, data) => {
//     if (err) callback(err);
//     callback(null, data);
//   });
// }

// Tasks
// What is wrong with this code?
// Fix it so the callback is called only once

// The Response is: the callback may be called twice because there is no return after handling the error.

function getData(callback) {
  fetchFromApi((err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

// classic example  - middleware
function authMiddleware(req, res, next) {
  getUserFromToken(req.headers.authorization, (err, user) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user;
    next(); // ← callback which say go on
  });
}
