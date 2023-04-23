const db = require('../db')
const Post = require('../models/post')

Post.deleteMany({})
.then(() => db.disconnect())

