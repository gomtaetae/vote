var express  = require('express');
var router = express.Router();
const db = require('../models/Home')


// /survey
// router.get('/', async function(req, res){
    
//     // let result=[await Survey.countDocuments({gender:''}),]

//     // res.json(result)
//     // res.render('/',{result:result})
// });
router.get('/', function(req, res){
    res.render('surveys/submit');
})


router.get('/new', function(req, res){
    res.render('surveys/new');
});

router.post('/submit', function(req, res){
    //db연결
    db.create(req.body, function (err, result) {
        if (err){
            console.log(err);
        }else {
            console.log(result);
            res.render('surveys/middle');
        }
    })
});

//페이지
// router.get('/submit', function(req,res){
//     res.render('surveys/submit', {req : "디비완료"})
    
// })

//show
// router.get('/:gender', function(req, res){
//     db.findOne({gender:req.params.gender}, function(err, survey){
//         if(err) return res.json(err);
//         res.render('surveys/submit', {surveys: surveys})
        
//     })
// });

router.get('/submit', async function(req, res){
    let arr = []
        db.countDocuments({gender:"남자", animal:"호랑이"}, (err,male1)=>{
            arr.push(male1);  
            db.countDocuments({gender:"남자", animal:"코끼리"}, (err,male2)=>{
                arr.push(male2);
                db.countDocuments({gender:"여자", animal:"호랑이"}, (err,female1)=>{
                    arr.push(female1);
                    db.countDocuments({gender:"여자", animal:"코끼리"}, (err,female2)=>{
                        arr.push(female2);
                        res.render('surveys/submit',{count:arr})
                        console.log(arr[0]);
                    })
                })
            })        
        })
});

module.exports = router;