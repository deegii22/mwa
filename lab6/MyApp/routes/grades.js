var express = require('express');
var router = express.Router();

const grades = [
  {id:1, name: 'Asaad Saad', course: 'CS572', grade: 95}, 
  {id:2, name: 'Tamir Batmunkh', course: 'CS572', grade: 80},
  {id:3, name: 'Munkhdelger Buyandalai', course: 'CS572', grade: 100}
]

/* GET grades listing. */
router.get('/', function(req, res, next) {
  res.send(grades); 
});

/* GET single grade. */
router.get('/:id', function(req, res, next) {
  for(let grade of grades){
    if(grade['id'] == req.params.id){
      res.send(grade);
    }
  } 
}); 


/* POST add grade. */
router.post('/', function(req, res, next) {
  var grade = {};
  grade['id'] = req.body.id;
  grade['name'] = req.body.name
  grade['course'] = req.body.course
  grade['grade'] = req.body.grade
  grades.push(grade);
  res.json({message: 'Grade created!'});
});

/* PUT single grade. */
router.put('/:id', function(req, res, next) {
  for(let grade of grades){
    if(grade['id'] == req.params.id){
      grade['name'] = req.body.name;
      res.json({ message: 'Grade updated!' });
    }
  } 
}); 
{}
/* DELETE single grade. */
router.delete('/:id', function(req, res, next) {
  for(let grade in grades){
    if(grades[grade]['id'] == req.params.id){
      grades.splice(grade, grade + 1);
      res.json({ message: 'Successfully deleted!' });
    }
  } 
}); 

module.exports = router;
