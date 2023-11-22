
import * as express from "express"

const app = express()

app.post("/store/checkout/payment/mercadopago/callback/:storeId", async (req, res) => {
    
    const { storeId } = req.params

    const redirectUrl = `http://localhost:5000/store/checkout/payment/mercadopago/callback/${storeId}`
    
    await fetch(redirectUrl, {
        body: JSON.stringify(req.body),
    })

    return res.status(200).json()
})

app.listen(80, () => console.log("listening on port 80"))

