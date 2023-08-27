const express = require("express");
const router = express.Router();
const Posts = require("../models/posts-model");
const mongoose = require("mongoose");
const multer = require("multer");

// get a particular ad corresponding to ad Id.
router.get("/getAds/id/:id", (req, res) => {
	// respond back with a particular ad with requested ad Id.
	Posts.findById(req.params.id, (err, ad) => {
		if (err) {
			console.log(err);
		} else {
			// console.log(ad);
			res.send(ad);
		}
	});
});

// get ads of particular category using path params(note: the path param is itself not a part of the url just a parameter attached to the url)
router.get("/getAds/category/:category/sort/:sort", (req, res) => {
	// respond back with particular ads in given category

	if (req.params.sort === "clear") {
		Posts.find({ category: req.params.category }, (err, allAds) => {
			if (err) {
				console.log(err);
			} else {
				// console.log(allAds);
				res.send(allAds);
			}
		});
	} else {
		let sortby = 0;
		if (req.params.sort === "clear") sortby = 0;
		else if (req.params.sort === "inc") sortby = 1;
		else sortby = -1;

		Posts.find({ category: req.params.category })
			.sort({ price: sortby })
			.exec((err, ads) => {
				if (err) {
					console.log("this is category error : ", err);
				} else {
					// console.log(ads);
					res.send(ads);
				}
			});
	}
});

// get all ads from db
router.get("/getAds/sort/:sort", (req, res) => {
	if (req.params.sort === "clear") {
		Posts.find({}, (err, allAds) => {
			if (err) {
				console.log(err);
			} else {
				res.send(allAds);
			}
		});
	} else {
		let sortby;
		if (req.params.sort === "inc") sortby = 1;
		else sortby = -1;

		Posts.find({})
			.sort({ price: sortby })
			.exec((err, allAds) => {
				if (err) {
					console.log(err);
				} else {
					// console.log(allAds);
					res.send(allAds);
				}
			});
	}
	// respond back with array of all the posts
});

router.get("/getAds/sellerId/:sellerId", (req, res) => {
	Posts.find({ sellerId: req.params.sellerId }, (err, posts) => {
		if (err) {
			res.send("Error displaying your Ads");
		} else {
			res.send(posts);
		}
	});
});

// post ad in database
router.post('/postAd', (req, res) => {
    // add into database
    Posts.create(req.body)
    .then(postdata => {
        console.log("Ad posted is : ", postdata);
        res.send(postdata._id);
    })
    .catch(err => {
        console.log("this is the error : ", err);
        res.send({
            Errormessage: err.message
        });
    });

});



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    }
})

const upload = multer({storage});
router.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).json("File uploaded");
});



router.delete("/deleteAd/postId/:postId", (req, res) => {
	Posts.findOneAndDelete({ _id: req.params.postId }, (err, deletedPost) => {
		if (err) {
			res.send("Error in deleting");
		} else {
			console.log("Deleted post is : ", deletedPost);
		}
	});
});

module.exports = router;
