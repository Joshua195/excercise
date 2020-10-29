const app = express();

app.use(express.static(__dirname+'/dist/exercise'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/exercise/index.html'));
});

app.listen(process.env.PORT || 3000);
