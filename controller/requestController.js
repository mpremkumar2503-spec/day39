export const adddata = (req,res)=>{

    console.log("Received Data from Frontend:", req.body);

    const {name,age} = req.body

  try{

    if(name==="React"){
      return res.status(200).json({
        msg:" Yes this is React!",
        receivedData: { name, age },
        timestamp: new Date(),
        status: "success"
      })
    }else{
      return res.status(200).json({msg:" No, this is not React",receivedData: { name, age },
        timestamp: new Date(),
        status: "failed"
      })
    }

  }catch(error){
    
    console.log('Something went wrong:', error);
    
    res.status(500).json({
      msg:"Error occurred",
      error: error.message,
      status: "error"
    })

  }
    

} 


export const getdatabynumber = (req)=>{


    console.log(req.params);
    

}


export const getdataByQuery = (req)=>{

  console.log(req.query);
  

}

export const getdataByheaders = (req)=>{

  console.log(req.headers.jwttoken);
  

}