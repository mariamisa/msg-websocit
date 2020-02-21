const designer = ['ali', 'moh', 'ahmd']
const getAllDesigner = (req, res) => {
  res.json(designer)
}
const getDesignerById = (req, res) => {
  const id = req.params.id
  res.json(designer[id])
}

module.export = {
  getAllDesigner,
  getDesignerById
}
