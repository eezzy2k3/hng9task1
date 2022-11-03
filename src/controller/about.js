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
  const  operation_types = ["addition","subtraction","multiplication"]
    if(!operation_types.includes(operation_type)) return res.status(400).json({success:false,msg:"invalid operation type"})
    let result;
    if(operation_type === "addition"){
        result = x + y
    }else if(operation_type === "subtraction"){
        result = x-y
    }else if(operation_type === "multiplication"){
        result = x*y
    }

    await res.status(201).json({slackUsername:"eezzy2k3",operation_type:operation_type,result:result})

    
}

module.exports = {about,operations}