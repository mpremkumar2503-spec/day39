import express from 'express'
import { adddata, getdataByheaders, getdatabynumber, getdataByQuery } from '../controller/requestController.js'

// http://localhost:5000/api/request/createdata
// http://localhost:5000/api/request/getdatabyNumber/100000
// http://localhost:5000/api/request/getdatabyquery
// http://localhost:5000/api/request/headers

const requestRoute = express.Router()


requestRoute.post("/createdata",adddata)
requestRoute.get("/getdatabyNumber/:useridbynumber",getdatabynumber)
requestRoute.get("/getdatabyquery",getdataByQuery)
requestRoute.get("/headers",getdataByheaders)

export default requestRoute