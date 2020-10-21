const Comment = require('../models/comment.js');
const Video = require('../models/video.js');

// exports.getVideoComments = async function (req,res){
//     comments = await Comment.findById(req.body.videoId);
//     res.send(comments);
// };

exports.createComment = async function (req, res) {
    comment = await Comment(req.body);
    await comment.save();
    await Video.updateOne({ _id: req.body.videoId }, { $push: { comments: comment } });
    res.send(comment);

};