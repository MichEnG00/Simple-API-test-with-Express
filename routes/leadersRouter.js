const express = require('express');
const bodyParser = require('body-parser')

const leadersRouter = express.Router()

leadersRouter.route('/')
    .all(function(req,res,next) {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        next()
    })

    .get(function (req,res,next) {
        res.end("Sending all leaders");
    }) 

    .post(function (req,res,next) {
        var {name} = req.body
        var {description} = req.body
        res.send("Creating leader: " + name + " with description: " + description)
    })

    .put(function (req,res,next) {
        res.end("Put operation not supported on this endpoint");
    })
    .delete(function (req,res,next) {
        res.end("Deleting all the leaders");
    })

leadersRouter.route('/:leaderId')

    .get(function (req,res,next) {
        var {leaderId} = req.params
        res.end("Sending the leader " + leaderId)
    })
    .post(function(req,res,next) {
        var {promotionId} = req.params
        res.end('POST operation not supported on /leaders/' + 
            leaderId);
    })
    .put(function(req,res,next) {
        var {leaderId} = req.params
        var {name} = body.name
        var {name} = body.description
        res.write('Updating the leader: ' + leaderId + '\n');
        res.end('Will update the leader: ' + name + 
        ' with details: ' + description);
    })
    .delete(function(req,res,next) {
        res.end(leaderId + " will be deleted");
    })

    module.exports = leadersRouter;