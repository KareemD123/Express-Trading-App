
const axios = require('axios')



async function getQuote(req, res){
    console.log(req.params.quote)
    console.log(process.env.IEX_API_TOKEN)
    const url = `https://api.iex.cloud/v1/data/core/quote/${req.params.quote}?token=${process.env.IEX_API_TOKEN}`
    console.log(url)
    
    axios.get(`https://api.iex.cloud/v1/data/core/quote/${req.params.quote}?token=${process.env.IEX_API_TOKEN}`).then(response => {
        return res.json({data: response.data})
    })
}


module.exports = {
    getQuote
}