import express, { response } from 'express';
import axios from 'axios';
const app = express()
const port = 3000
const router = express.Router();


app.use(express.static('public'));
router.get('/', (req, res) => {
    res.sendFile('index.html');
})


app.get('/searchword',(req,res)=>{
    
    console.log(req.query);

var options = {
  method: 'GET',
  url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
URL: "http://localhost:3000/rapidapi/dictionary.jpg",
  params:{entry: req.query.entry},
  headers: {
    'X-RapidAPI-Key': '0949eb8bd5mshf82f7a2b78fbe31p1adcfcjsn99fa86d3b03b',
    'X-RapidAPI-Host': 'twinword-word-graph-dictionary.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
    console.log(response.data);
    res.json(response.data);
  }).catch(function (error) {
    console.error(error);
  });


// let response = {}
// response.data={
//     entry: 'entity',
//     request: 'entity',
//     response: 'entity',
//     assoc_word: [ 'independent', 'individual', 'separate' ],
//     assoc_word_ex: [ 'independent', 'individual', 'separate' ],
//     version: '7.4.2',
//     author: 'twinword inc.',
//     email: 'help@twinword.com',
//     result_code: '200',
//     result_msg: 'Success'
//   }

//   console.log(path.join(__dirname,'public'));
//     return res.sendFile('public/index.html',  {root: __dirname});
})    

app.use('/', router);
app.listen(port, () => {
  console.log(`dictionary app listening on port ${port}`)
})