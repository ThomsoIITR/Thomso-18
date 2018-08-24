var Main_User = require('../../../../models/main/Main_User');
var Thomso_Event = require('../../../../models/main/Thomso_Event');

var requiredVars = 'name email gender thomso_id college address branch contact verified';
var requiredVars2 = 'name email gender thomso_id college address branch contact verified';

exports.userInfo = function(req,res){
    if(req){
        Main_User.find()
        .populate('event', 'name event_id')
        .select(requiredVars)
        .exec(function(err, user){
            if(err) return res.status(400).send({success:false, msg:'Unable to fetch user info'});
            if(user) res.json({success:true, body:user, msg:"data fetched"});
            else return res.status(400).send({success:false, msg:'Unable to fetch user info'});
        })
    }else return res.status(400).send({success:false, msg:"something went wrong"})
}

exports.eventUser = function(req,res){
    if(req && req.body.event_id){
        Thomso_Event.findOne({event_id:req.body.event_id})
        .populate('users', requiredVars2)
        .select('name')
        .exec(function(err, result){
            if(err) return res.status(400).send({success:false, msg:'Something went wrong'})
            if(result) res.json({success:true, body:result, msg:'Fetched'})
            else return res.status(400).send({success:false, msg:'Unable to fetch event info'})
        })
    }else return res.status(400).send({success:false, msg:"Insuffiecient Data"})
}


exports.addEvent = function(req, res) {
    if(req && req.body && re.body.name && req.body.event_id && req.body.isPrimary){
        if(req.body.event_id)req.body.event_id = req.body.event_id.trim();
        if(req.body.name)req.body.name = req.body.name.trim();
        var isPrimary = false;
        if(req.body.isPrimary) isPrimary = true;
        var data = {
            event_id :req.body.event_id,
            name : req.body.name,
            isPrimary: isPrimary
        }
        if(data.event_id && data.name){
            var newEvent = new Thomso_Event(data);
            newEvent.save(function(err){
                if(err) {
                    return res.status(400).send({success:false, msg:'Unable to add event'})
                };
                res.json({success:true, msg:'Event added'});
            })
        }
    }else return res.status(400).send({success:false, msg:"Insuffiecient Data"})
};