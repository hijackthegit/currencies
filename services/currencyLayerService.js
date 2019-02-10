const apiKey = process.env.CURRENCY_LAYER_API_KEY;
const axios = require('axios');
const configs = require('../configs/currencyLayer');
const moment = require('moment');

module.exports = {
    getLiveQuotes: (source, currencies, format = 1) => {
        return axios.get(`${configs.API_URL}live?access_key=${apiKey}&currencies=${currencies.toString()}&source=${source}&format=${format}`);
    },
    getCurrencyList: () => {
        return axios.get(`${configs.API_URL}list?access_key=${apiKey}`);
    },
    getHistorical: (date) => {
        return axios.get(`${configs.API_URL}historical?date=${date}&access_key=${apiKey}`);
    },
    getTimeFrame: (start = moment().subtract(1, 'days').format('yyyy-mm-dd'), end = moment().format('yyyy-mm-dd')) => {
        return axios.get(`${configs.API_URL}timeframe?start_date=${start}&end_date=${end}&access_key=${apiKey}`);
    }
};