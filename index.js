var express = require('express');  // 설치한 express module을 불러와서 변수(express)에 담습니다.
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();  //express를 실행하여 app object를 초기화 합니다.
// var session = require('express-session');
// var passport = require('./config/passport');

// DB setting
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://test:test123456@cluster0-vviqa.mongodb.net/test?retryWrites=true&w=majority');
var db = mongoose.connection;
db.once('open', function(){
  console.log('DB connected');
});
db.on('error', function(err){
  console.log('DB ERROR : ', err);
});


app.set('view engine','ejs'); //ejs를 사용하기 위해서 set하는 코드
app.use(express.static(__dirname + '/public')); //위와 세트
app.use(bodyParser.json()); //bodyParser을 사용하기 위한 코드 json 형식을 받는다
app.use(bodyParser.urlencoded({extended:true})); //urlencoded data를 extended 알고리즘을 사용해서 분석한다.는 설정
//위의 bodyParser를 처리해줘야 웹브라우저의 from에 입력한 데이터가 bodyParser를 통해 req.body로 생성된다.
app.use(methodOverride('_method')); //_method의 query로 들어오는 값으로 HTTP method를 바꾼다.


// Routes
app.use('/', require('./routes/home'));
app.use('/surveys', require('./routes/surveys'));

//Passport
// app.use(passport.initialize());   //passport를 초기화 시켜주는 함수
// app.use(passport.session());

// Custom Middlewares     //user login할때 사용 나중에 추가하기위해 생성
// app.use(function(req,res,next){
//   res.locals.isAuthenticated = req.isAuthenticated();   //로그인되어있는지 확인
//   res.locals.currentSurvey = req.survey;        //로그인된 user의 정보를 불러옴
//   next();
// });


var port = 3030; // 사용할 포트 번호를 port 변수에 넣습니다. 
app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});