const about = async(req,res)=>{
    
    const bio = {
        slackUsername:"eezzy2k3",
        backend:true,
        age:36,
        bio:"Detail-oriented Backend Developer with coding skills in Node.js"

    }

    res.status(200).json(bio)
}

module.exports = about