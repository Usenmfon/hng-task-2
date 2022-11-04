
exports.arithmetic = (req, res) => {
    let {operation_type, x , y} = req.body;
    let value = 0;
    try{
        if(operation_type.toLowerCase() === "addition"){
            value = x + y;
        }else if(operation_type.toLowerCase() === "subtraction"){
            value = x - y;
        }else if(operation_type.toLowerCase() === "multiplication"){
            value = x * y;
        }else if(operation_type.toLowerCase() === "multiplication"){
            value = x / y;
        }
    }catch(error){
        console.log(error)
    }

    res.status(200).json({slackUsername: "usenmfonuko",operation_type: operation_type, result: value});
};