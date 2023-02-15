const Post = require('../models/postSchema')

const uploadFiles = async (req, res) => {
  const { originalname, size, filename  } = req.file;
  const post = await Post.create({
    name: originalname,
    size: size,
    key: filename,
    url: ''
  })


  return res.json( post )
}

module.exports = uploadFiles;