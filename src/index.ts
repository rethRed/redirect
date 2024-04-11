
import * as express from "express"


//d

const app = express()

app.use(express.json())

const host = "http://25.38.230.16:5000"

app.post("/store/signature/invoices/payments/pix/callback", async (req, res) => {
    
    const redirectUrl = `${host}/store/signature/invoices/payments/pix/callback`
    
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
// dfd

app.post("/store/signature/invoices/payments/mercado-pago/callback", async (req, res) => {
    
    const redirectUrl = `${host}/store/signature/invoices/payments/mercado-pago/callback`
    
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



app.post("/store/checkout/payments/pix/callback/:storeId", async (req, res) => {
    
    const { storeId } = req.params

    const redirectUrl = `${host}/store/checkout/payments/pix/callback/${storeId}`
    
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


app.post("/checkout/payments/mercado-pago/callback", async (req, res) => {
    

    const redirectUrl = `${host}/checkout/payments/mercado-pago/callback`
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


