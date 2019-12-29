const express = require('express')
const PORTE = process.env.PORTE || 3000

const app = express()

app.get('/',(req,res)=>{
    res.json({msg:'Hello!'})
})

app.listen(PORTE, () => {
    console.log(`Server starting on http://localhost:${PORTE}`)
}
)