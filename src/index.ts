
import * as express from "express"

const app = express()

const host = "http://25.11.28.220:5000"

app.post("/store/checkout/payment/mercadopago/callback/:storeId", async (req, res) => {
    
    const { storeId } = req.params

    const redirectUrl = `${host}/store/checkout/payment/mercadopago/callback/${storeId}`
    
    await fetch(redirectUrl, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res.status(200).json()
})

app.post("/checkout/payment/mercado-pago/callback", async (req, res) => {
    

    const redirectUrl = `${host}/checkout/payment/mercado-pago/callback`
    
    await fetch(redirectUrl, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return res.status(200).json()
})


app.listen(80, () => console.log("listening on port 80"))

