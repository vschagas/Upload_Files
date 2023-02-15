const uploadFiles = async (req, res) => {
  console.log(req.file);
  return res.json({ message: "estou na função" })
}

module.exports = uploadFiles;