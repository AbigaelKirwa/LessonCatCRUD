var cats = ["Paddington", "Garfield"]


exports.read = (req, res)=>{
    res.send(`cat name: ${cats}`)
}