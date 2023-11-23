
const express = require("express")
const axios = require("axios") 

const app = express()

app.use(express.json())

const host = "http://25.65.138.118:5000"

app.post("/store/checkout/payment/mercadopago/callback/:storeId", async (req, res) => {
    
    const { storeId } = req.params

    const redirectUrl = `${host}/store/checkout/payment/mercadopago/callback/${storeId}`
    
    axios.post(redirectUrl, req.body).catch(err => console.log(err))


    return res.status(200).json()
})//

app.post("/checkout/payment/mercado-pago/callback", async (req, res) => {
    

    const redirectUrl = `${host}/checkout/payment/mercado-pago/callback`
    
    axios.post(redirectUrl, req.body).catch(err => console.log(err))



    return res.status(200).json()
})


app.listen(80, () => console.log("listening on port 80"))

