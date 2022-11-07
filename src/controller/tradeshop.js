const { QueryTypes } = require('sequelize');
const db = require('../models');

exports.insertTradeshop = async(req, res) => {

    const ttype = req.body.ttype;
    const isparent = req.body.isParent;
    const ownerpartnerid = req.body.OwnerPartnerID;
    const partnername = req.body.PartnerName;
    const iscompany = req.body.isCompany;
    const customerchannel = req.body.CustomerChannel;
    const partneraddress = req.body.PartnerAddress;
    const partnerphonenumber = req.body.PartnerPhoneNumber;
    const partneremail = req.body.PartnerEmail;
    const email = req.body.Email;
    const deliveryarea = req.body.DeliveryArea;
    const istaxpayer = req.body.isTaxpayer;
    const organizationregisternumber = req.body.OrganizationRegistrationNumber;
    const nameoftaxpayer = req.body.NameOfTaxpayer;
    const servedbysalesrepresentatives = req.body.ServedBySalesRepresentatives;
    const salesrepresentativecode = req.body.SalesRepresentativeCode;
    const daysoftheweek = req.body.daysOfTheWeek;
    const channel = req.body.Channel;
    const buyingpower = req.body.BuyingPower;
    const locationsegment = req.body.locationSegment;
    const segments = req.body.Segments;
    const subchannel = req.body.SubChannel;
    const duureg = req.body.duureg;
    const khoroo = req.body.khoroo;

    const tradeshop = await db.sequelize.query(`EXEC Anungoo_db.dbo.SP_1C_CREATE_TRADESHOP 'create', N'${ttype}', ${isparent}, ${ownerpartnerid}, N'${partnername}', '', ${iscompany}, N'${customerchannel}', N'${partneraddress}', '${partneremail}', N'${partnerphonenumber}', N'${email}', N'${deliveryarea}', N'${istaxpayer}', N'${organizationregisternumber}', N'${nameoftaxpayer}', ${servedbysalesrepresentatives}, N'${salesrepresentativecode}', N'${daysoftheweek}', N'${channel}', N'${subchannel}', N'${buyingpower}', N'${locationsegment}', N'${segments}', N'${duureg}', N'${khoroo}'`, { type: QueryTypes.SELECT });

    try {
        if(tradeshop) {
            res.status(200).json({ message: "Tradeshop added." });
        } else {
            res.status(404).json({ message: "Please check your input." });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};

exports.tradeshopList = async(req, res) => {

    const htcode = req.body.htcode;

    const list = await db.sequelize.query(`EXEC Anungoo_db.dbo.SP_1C_CREATE_TRADESHOP 'select' ,'','','','','','', '','','','','','','','','', '','${htcode}','','', '','', '','', '', ''`, { type: QueryTypes.SELECT });

    try {
        if(list != 0) {
            res.status(200).send(list);
        } else {
            res.status(404).json({ message: "Please check your SalerepID or No history found" });
            return;
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
        return;
    };
};