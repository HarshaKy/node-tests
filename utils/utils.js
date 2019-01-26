module.exports.add = (a, b) => a + b;

module.exports.square = (a) => a * a;

module.exports.setName = function (user, fullName) {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
