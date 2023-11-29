
import * as express from "express"

 

const app = express()

app.use(express.json())

const host = "http://25.65.138.118:5000"

app.post("/store/checkout/payment/mercadopago/callback/:storeId", async (req, res) => {
    
    const { storeId } = req.params

    const redirectUrl = `${host}/store/checkout/payment/mercadopago/callback/${storeId}`
    
    console.log(new Date(), req.body,)

    fetch(redirectUrl, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(err => console.log(err))


    return res.status(200).json()
})

app.post("/checkout/payment/mercado-pago/callback", async (req, res) => {
    

    const redirectUrl = `${host}/checkout/payment/mercado-pago/callback`
        console.log(req.body)
    fetch(redirectUrl, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
            "Content-Type": "application/json"
        }
    }).catch(err => console.log(err))


    return res.status(200).json()
})


const port = 6969
app.listen(port, () => console.log("listening on port ",port))


