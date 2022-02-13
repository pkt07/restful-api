const recordModel = require("../models/records")
class RecordController {
getRecords = async(req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const minCount = req.query.minCount;
    const maxCount = req.query.maxCount;
    console.log("resmm",startDate,endDate,minCount)
    try {
        // console.log("here11")
        const recordsData = await recordModel.find({})
        // console.log("res",recordsData)
        recordsData.map(record => {
            if(record.counts > minCount && records.counts<maxCount)
            return record
        })
        // console.log("res",recordsData)
        const result = {
            count: 0,
            msg: "success",
            records: recordsData
        }
        return result;
    } catch (e) {
        const result = {
            count: 1,
            msg: "error",
            records: e
        }
        console.log("here",e)
        res.send(result)
    }
}
}
module.exports = new RecordController()