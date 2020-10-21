const { populate } = require('../models/category.js');
const category = require('../models/category.js');
const Video = require('../models/video.js');

exports.getAllVideos = async function (req,res){
    videos = await Video.find().select('-comments');
    res.send(videos);
};

exports.createVideo = async function(req,res){
    video = await Video(req.body);
    await video.save();
    await category.updateOne({_id: req.body.categoryId},{$push: {videos: video}});
    res.send(video);
};

exports.getSingleVideo = async function(req,res){
    video = await Video.findById(req.params.id)
    .populate({
        path: 'comments',
        populate: {
            path:'replies',
            select: { '_id': 1,'user':1, "comment":1}
        }
    });
    res.send(video);
}

exports.likeVideo = async function(req,res){
    video = await Video.findById(req.params.id);
    await video.update({likes: video.likes+1});
    res.send(video);
}