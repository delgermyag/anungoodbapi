module.exports = app => {
    const apidata = require('../controller/apiData');
    const tradeshop = require('../controller/tradeshop');
    const sms = require('../controller/sms');
    const router = require('express').Router();

    router.post('/salesteam', apidata.salesteam);
    router.post('/deliveryarea', apidata.deliveryarea);
    router.post('/daysoftheweek', apidata.daysoftheweek);
    router.post('/channel', apidata.channel);
    router.post('/buyingpower', apidata.buyingpower);
    router.post('/locationsegment', apidata.locationsegment);
    router.post('/subchannel', apidata.subchannel);
    router.post('/segments', apidata.segments);
    router.post('/regnocheck', apidata.regnoCheck);
    router.post('/addtradeshop', tradeshop.insertTradeshop);
    router.post('/tradeshoplist', tradeshop.tradeshopList);
    router.post('/smsregister', sms.registerByPhone);
    router.get('/coke2home', apidata.coke2home);

    app.use('/api2/data', router);

};