let data = {
    operation_type: "addition",
    x: 12,
    y: 4,
}

let result = {
    slackUsername: "usenmfonuko",
    operation_type: data.operation_type,
    result: `${data.x + data.y}`
}

exports.arithmetic = (req, res) => {
    res.status(200).json(result);
};