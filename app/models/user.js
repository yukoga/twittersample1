module.exports = function() {
  var _users = new Array();
  _users[0] = {
    name: 'Yutaka',
    address: 'Matsudo',
    job: {
      corp: 'google',
      role: 'consultant'
    }
  };
  _users[1] = {
    name: 'Makiko',
    address: 'Matsudo',
    job: {
      corp: 'gmo',
      role: 'engineer'
    }
  };

  return _users;
}
