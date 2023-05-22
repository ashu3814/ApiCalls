const express = require('express');
const router = new express.Router();
const emp = require('../model/emp');




//POST DATA
router.post('/', (req, res) => {
    console.log(req.body);
    const emprecord = new emp(req.body);
    emprecord
      .save()
      .then(() => {
        res.send(emprecord);
      })
      .catch((error) => {
        console.error(error); // Log the error to the console
        if (error.code === 11000) {
          res.status(400).send('Duplicate key error');
        } else {
          res.status(500).send('Internal server error');
        }
      });
  });
  

  //GET DATA API 
router.get("/", async(req,res) =>{
  

  try{
    const empData = await emp.find();
    res.send(empData)

  }catch(error){
    res.send(error)
  };


});
  
//GET DATA BASED ON ID
router.get("/:id", async(req,res) =>{
  try{
    const id = req.params.id;
    const empdata = await emp.findById(id)
    res.send(empdata);


  }catch(error){
    res.send(error)

  }

});

//UPDATE DATA
router.patch('/:id', async(req,res) =>{
  try{
    const id = req.params.id;
    const updatedata = req.body
    const updateData = await emp.findByIdAndUpdate(id,updatedata,{
      new :true
  });
  res.send(updateData);

  }catch(error){
    res.send(error);
  }
  


});

//DELETE DATA
router.delete('/:id', async(req,res)=>{
  try{
    const id = req.params.id;
  console.log(id);
  const deleteData = await emp.findByIdAndDelete(id);
  res.send(deleteData);

  }catch(error){
    res.status(400).send(error)
  }
  


});

module.exports = router;