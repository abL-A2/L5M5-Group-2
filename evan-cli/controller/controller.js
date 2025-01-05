const auctionItem = require('../model/auctionItem');

const getItems = async (req, res) => {
    try {
        const items = await auctionItem.find({});
        res.status(200).json(items);
    } catch (err) {
        console.error("Error: ", err)
    }
};

const findItems = async (req, res) => {
    try{ 
        const title = req.params.title;
        const item = await auctionItem.find({title: {$regex: title, $options: 'i'}});
        res.status(200).json(item);
    } catch (err) {
        console.error("Error: ", err)
    }
};

module.exports = { getItems, findItems };