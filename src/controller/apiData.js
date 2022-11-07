const { QueryTypes } = require('sequelize');
const db = require('../models');

exports.salesteam = async(req, res) => {

    const htcode = req.body.htcode;

    const salesteam = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'salesteam',${htcode},'',''`, { type: QueryTypes.SELECT });

    try {
        if(salesteam != 0) {
            res.status(200).send(salesteam);
        } else {
            res.status(404).json({ message: "Couldn't find salesteam." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.deliveryarea = async(req, res) => {

    const deliveryarea = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'deliveryarea','','',''`, { type: QueryTypes.SELECT });

    try {
        if(deliveryarea != 0) {
            res.status(200).send(deliveryarea);
        } else {
            res.status(404).json({ message: "Couldn't find delivery area." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.daysoftheweek = async(req, res) => {

    const daysoftheweek = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'daysoftheweek','','',''`, { type: QueryTypes.SELECT });

    try {
        if(daysoftheweek != 0) {
            res.status(200).send(daysoftheweek);
        } else {
            res.status(404).json({ message: "Couldn't find days of the week." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.channel = async(req, res) => {

    const htcode = req.body.htcode;

    const salesteam = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'channel','${htcode}','',''`, { type: QueryTypes.SELECT });

    try {
        if(salesteam != 0) {
            res.status(200).send(salesteam);
        } else {
            res.status(404).json({ message: "Couldn't find channel." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.buyingpower = async(req, res) => {

    const htcode = req.body.htcode;

    const buyingpower = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'buyingpower','${htcode}','',''`, { type: QueryTypes.SELECT });

    try {
        if(buyingpower != 0) {
            res.status(200).send(buyingpower);
        } else {
            res.status(404).json({ message: "Couldn't find buying power." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.locationsegment = async(req, res) => {

    const locationsegment = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'locationsegment','','',''`, { type: QueryTypes.SELECT });

    try {
        if(locationsegment != 0) {
            res.status(200).send(locationsegment);
        } else {
            res.status(404).json({ message: "Couldn't find location segment." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.subchannel = async(req, res) => {

    const htcode = req.body.htcode;

    const subchannel = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'subchannel','${htcode}','',''`, { type: QueryTypes.SELECT });

    try {
        if(subchannel != 0) {
            res.status(200).send(subchannel);
        } else {
            res.status(404).json({ message: "Couldn't find subchannel." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.segments = async(req, res) => {

    const htcode = req.body.htcode;

    const segments = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'segments','${htcode}','',''`, { type: QueryTypes.SELECT });

    try {
        if(segments != 0) {
            res.status(200).send(segments);
        } else {
            res.status(404).json({ message: "Couldn't find segments." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.regnoCheck = async(req, res) => {

    const regno = req.body.regno;

    const regnoCheck = await db.sequelize.query(`exec Anungoo_db.dbo.SP_1C_API_DATA 'checkbyregno','','${regno}', ''`, { type: QueryTypes.SELECT });
    
    try {
        if(regnoCheck.length != 0) {
            res.status(200).send(regnoCheck);
        } else {
            res.status(404).json({ message: "Couldn't find RegNo." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.coke2home = async (req, res) => {

    const list = await db.sequelize.query("exec sp_coketohome_getdata 1", { type: QueryTypes.SELECT });

    try {
        if(list) {
            res.status(200).send(list);
        } else {
            res.status(400).send({ message: 'No products found.' });
        }
    } catch(err) {
        res.status(500).send({ message: err.message });
    };

};