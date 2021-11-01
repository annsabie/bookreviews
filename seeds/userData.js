const { User } = require('../models');

const userData = [
  {
    first_name: "Bradon",
    last_name: "Kemboi",
    email: "Brandon@gmail.com",
    password: "abcd"
  },
  {
    first_name: "Ann",
    last_name: "Sabie",
    email: "Ann@gmail.com",
    password: "efgh"
  },
  {
    first_name: "Emily",
    last_name: "Elizabeth",
    email: "emily@gmail.com",
    password: "ijkl"
  },
  {
    first_name: "Sowmya",
    last_name: "Nagayya",
    email: "sowmya@gmail.com",
    password: "mnop"
  },
  
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;