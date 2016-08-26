/**
 * Created by leesy on 2016-08-26.
 */
// Test URL : http://app.ddpstyle.com/json/get/imagelist

var rootUrl = 'http://app.ddpstyle.com'
var apiKey = ''
var axios  = require("axios");

module.exports = {
    get (url) {
        return fetch(rootUrl + url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                //'Authorization': apiKey // 현재필요없음.
            }
        })
            .then((response) => {
                return response.json()
            })
    }
}
