const express = require('express');
const bodyParser = require('body-parser')

const promotionsRouter = express.Router();
promotionsRouter.use(bodyParser.json());



promotionsRouter.route('/')
    .all(function(req,res,next) {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        next
    })

    .get(function (req,res,next) {
        res.end("Sending promotions");
    }) 

    .post(function (req,res,next) {
        var {name} = req.body
        var {description} = req.body
        res.send("Creating promotion: " + name + " with description: " + description)
    })

    .put(function (req,res,next) {
        res.end("Put operation not supported on this endpoint");
    })
    .delete(function (req,res,next) {
        res.end("Deleting all the promotions");
    })

promotionsRouter.route('/:promotionId')

    .get(function (req,res,next) {
        var {promotionId} = req.params
        res.end("Sending the promotion " + promotionId)
    })
    .post(function(req,res,next) {
        res.end('POST operation not supported on /promotions/' + 
            promotionId);
    })
    .put(function(req,res,next) {
        res.write('Updating the promotion: ' + promotionId + '\n');
        res.end('Will update the promotion: ' + name + 
        ' with details: ' + description);
    })
    .delete(function(req,res,next) {
        res.end(promotionId + " will be deleted");
    })






module.exports = promotionsRouter;