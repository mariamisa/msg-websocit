const developer = ['ali', 'moh', 'ahmd']
const getAllDeveloper = (req, res) => {
  res.json(developer)
}
const getDeveloperById = (req, res) => {
  const id = req.params.id
  res.json(developer[id])
}
module.export = {
  getAllDeveloper,
  getDeveloperById
}
