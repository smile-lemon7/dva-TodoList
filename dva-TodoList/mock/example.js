'use strict';

module.exports = {
    'GET /api/user': function (req, res) {
        setTimeout(function () {
            res.json({
                data: [
                    {name: 'dva',id: 1},
                    {name: 'antd',id: 2}
                ]
            });
        }, 500);
    },

};