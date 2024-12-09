const {addMovieModel, getMovieModel} = require('../../models/movies.model/movies.model');

async function addMovieController(req,res){
    try{
        const result = await addMovieModel(req.body);
        if(result.success){
            return res.status(201).json(result);
        }else{
            return res.json(result);
        }
    }catch(err){
        console.log('getting an error while adding the move in controller',err);
        return res.status(500).json({success:false, message:'getting an error while adding the movie in controller'})
    }
}

async function getMovieController(req,res){
    try{
        const result = await getMovieModel();
        if(result.success){
            return res.status(201).json(result);
        }else{
            return res.json(result);
        }
    }catch(err){
        console.log('getting an error while fetching the movies data in controller ',err);
        return res.status(500).json({success:false, message:'getting an error while fetching the movies data in controller'});
    }
}

module.exports ={
    addMovieController,
    getMovieController
}