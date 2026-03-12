exports.getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Neeraj" },
    { id: 2, name: "Harness Dev" }
  ];

  res.json(users);
};