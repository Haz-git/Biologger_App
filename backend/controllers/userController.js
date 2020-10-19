exports.test = (req, res) => {
    res.status(200).json({
        Message: "Congrats! First Get Request To This server!",
    })
}