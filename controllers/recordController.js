const recordModel = require("../models/records")
class RecordController {
getRecords = async(req, res) => {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const minCount = req.query.minCount;
    const maxCount = req.query.maxCount;
    try {
        const recordsData = await recordModel.find({
            createdAt: {
                $gte: startDate,
                $lt: endDate
            }
        })
        recordsData.map(record => {
            if(record.counts > minCount && records.counts<maxCount)
            return record
        })
        const result = {
            count: 0,
            msg: "success",
            records: recordsData
        }
        return result
    } catch (e) {
        const result = {
            count: 1,
            msg: "error",
            records: e
        }
        return result
    }
}
}
module.exports = new RecordController()