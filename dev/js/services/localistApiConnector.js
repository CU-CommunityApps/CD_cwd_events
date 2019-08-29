const axios = require('axios');
const moment = require('moment');

const check = require('check-types');

/**
 * Test params property types.
 * @param {obj} params The block element data.
 * @return {boolean} Valid proptype.
 */
const checkPropTypes = params => {
    const valid = check.map(params, check.string);
    return check.all(valid);
};

/**
 * Configures request params and Get events from loacalist api.
 * @param {obj} param0 The optional api config params.
 * @return {axios} A axios promise;
 */
export default ({
    depts,
    entries,
    format,
    group,
    keyword,
    apikey,
    calendarurl,
    page,
    days = 365
}) => {
    if (
        !checkPropTypes(
            {
                depts,
                entries,
                format,
                group,
                keyword,
                apikey,
                calendarurl
            },
            check.string
        )
    ) {
        console.warn('invalid prop types in localist connect.');
        return {};
    }
    const params = {
        apikey,
        days,
        distinct: true,
        pp: entries,
        page,
        start:
            format !== 'archive'
                ? moment().format('YYYY-MM-DD')
                : moment()
                      .subtract(1, 'Y')
                      .format('YYYY-MM-DD')
    };
    // Supports multiple departments with CSV string.
    if (depts && depts !== '0') {
        params.type = [];
        depts.split(',').forEach(item => {
            params.type.push(item.trim());
        });
    }
    if (group && group !== '0') {
        params.group_id = group;
    }
    if (keyword && keyword !== '') {
        params.keyword = keyword;
    }
    if (format === 'archive') {
        params.direction = 'desc';
    }
    return axios.get(calendarurl, { params });
};
