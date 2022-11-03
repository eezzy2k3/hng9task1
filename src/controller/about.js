const about = async(req,res)=>{
    
    const bio = {
        slackUsername:"eezzy2k3",
        backend:true,
        age:36,
        bio:"Detail-oriented Backend Developer with coding skills in Node.js"

    }

    res.status(200).json(bio)
}

const operations = async(req,res)=>{
    const x = req.body.x
    const y = req.body.y
    const operation_type =  req.body.operation_type
    let result;
    if(operation_type === "+"){
        result = x + y
    }else if(operation_type === "-"){
        result = x-y
    }else if(operation_type === "*"){
        result = x*y
    }

    res.status(201).json({slackUsername:"eezzy2k3",operation_type:operation_type,result:result})

    
}

module.exports = {about,operations}