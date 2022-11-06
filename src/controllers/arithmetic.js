const { Configuration, OpenAIApi } = require("openai");

exports.arithmetic = async (req, res) => {
    // let {operation_type, x , y} = req.body;
    // let value = 0;
    let operators = ["+", "-", "*", "/"];
    let operator;

    try{
        //Configuring GPT-3
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY
        })
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: req.body.operation_type,
            temperature: .5,
            max_tokens: 1000,
        });

        //String formatting to the operation type and result
        let value = parseInt(response.data.choices[0].text.split("=")[1].trim())
        let splitStr = response.data.choices[0].text.split("");

        for(let index = 0; index < operators.length; index++){
            for(let str = 0; str < splitStr.length; str++){
                if(operators[index] === splitStr[str]){
                    operator = operators[index];
                    break;
                }
            }
        }
        if(operator === "+"){
            operator = "addition";
        }else if(operator === "-"){
            operator = "subtraction";
        }else if(operator === "*"){
            operator = "multiplication";
        }else if(operator === "/"){
            operator = "division";
        }

        res.status(200).json({slackUsername: "usenmfonuko",operation_type: operator, result: value})

    }catch(error){
        if(error.response){
            console.log(error.response.status);
            console.log(error.response.data);
        }else{
            console.log(error.message);
        }
    }
    // for(let res of response?.data?.choices){
    //     console.log(res.text)
    // }
    // try{
    //     if(operation_type.toLowerCase() === "addition"){
    //         value = x + y;
    //     }else if(operation_type.toLowerCase() === "subtraction"){
    //         value = x - y;
    //     }else if(operation_type.toLowerCase() === "multiplication"){
    //         value = x * y;
    //     }else if(operation_type.toLowerCase() === "division"){
    //         value = x / y;
    //     }
    // }catch(error){
    //     console.log(error)
    // }

    // res.status(200).json({slackUsername: "usenmfonuko",operation_type: operation_type, result: value});
    
};