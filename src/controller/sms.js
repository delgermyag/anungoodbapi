const { QueryTypes } = require('sequelize');
const db = require('../models');

exports.registerByPhone = async(req, res) => {
    
    const number = req.body.number;
    const text = req.body.text;

    if(/^8[0689]/.test(number)) {
        const smsToUni = await db.sequelize.query(`INSERT INTO Anungoo_db.dbo.T_SMS_TO_SEND_UNI VALUES('${number}', '${text}', 'N', NULL, '', '', NULL)`, { type: QueryTypes.INSERT });

        try {
            if(smsToUni != 0) {
                res.status(200).send(smsToUni);
            } else {
                res.status(404).json({ message: "Please check your input." });
                return;
            }
        } catch(err) {
            res.status(500).json({ message: err.message });
        };
    } else if(/^85|^9[459]/.test(number)) {
        const smsToMobi = await db.sequelize.query(`INSERT INTO Anungoo_db.dbo.T_SMS_TO_SEND_MOBI VALUES('${number}', '${text}', 'N', NULL, '', '', NULL)`, { type: QueryTypes.INSERT });

        try {
            if(smsToMobi != 0) {
                res.status(200).send(smsToMobi);
            } else {
                res.status(404).json({ message: "Please check your input." });
                return;
            }
        } catch(err) {
            res.status(500).json({ message: err.message });
        };
    } else if(/^9[016]/.test(number)) {
        const smsToSky = await db.sequelize.query(`INSERT INTO Anungoo_db.dbo.T_SMS_TO_SEND_SKYTEL VALUES('${number}', '${text}', 'N', NULL, '', '', NULL)`, { type: QueryTypes.INSERT });

        try {
            if(smsToSky != 0) {
                res.status(200).send(smsToSky);
            } else {
                res.status(404).json({ message: "Please check your input." });
                return;
            }
        } catch(err) {
            res.status(500).json({ message: err.message });
        };
    } else if(/^83|^9[378]/.test(number)) {
        const smsToGmobile = await db.sequelize.query(`INSERT INTO Anungoo_db.dbo.T_SMS_TO_SEND_GMOBILE VALUES('${number}', '${text}', 'N', NULL, '', '', NULL)`, { type: QueryTypes.INSERT });

        try {
            if(smsToGmobile != 0) {
                res.status(200).send(smsToGmobile);
            } else {
                res.status(404).json({ message: "Please check your input." });
                return;
            }
        } catch(err) {
            res.status(500).json({ message: err.message });
        };
    } else {
        res.status(404).json({ message: "Please check your number."});
    };
    
};