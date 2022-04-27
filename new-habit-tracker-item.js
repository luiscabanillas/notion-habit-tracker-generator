
const { Client } = require('@notionhq/client');
const moment = require('moment');
const nm = require('next_monday');
const configs = require('./configs');

const notion = new Client({ auth: configs.API_KEY });
const args = require('minimist')(process.argv.slice(2));

let dateArg = args['date'];
console.log(dateArg);

let dateParam = dateArg ?? moment().format("YYYY-MM-DDThh:mm:ssZ");

let habit_tracker_items = configs.items_array; //['Take vitamins', 'Read for 30 mins', 'Exercise for 30 mins'];
let prevMonday = moment(dateParam).day("Monday").format("YYYY-MM-DDThh:mm:ssZ");
let endDate = moment(prevMonday).add(4, "days").format("YYYY-MM-DDThh:mm:ssZ");
let trackDate = prevMonday;
let data = {
    "parent": {
        "database_id": configs.database_id
    },
    "properties": {
        "Date": {
            "id": "oPam",
            "type": "date",
            "date": {
                "start": "2022-04-22T00:00:00Z",
                "time_zone": "America/Los_Angeles"
            }
        },
        "Name": {
            "title": [
                {
                    "type": "text",
                    "text": {
                        "content": "Read for 30 mins"
                    }
                }
            ]
        }
    }
};

let testDate = moment(trackDate).format("YYYY-MM-DD");



(async () => {
    const checkResponse = await notion.databases.query({
        database_id: "907473de213d4e9b80d0b0896e8c4ec8",
        "filter": {
            "property": "Date",
            "date": {
                "equals": testDate
            }
        }
    });
    if (checkResponse.results.length == 0) {
        while (trackDate <= endDate) {


            habit_tracker_items.forEach(item => {
                data = {
                    "parent": {
                        "database_id": "907473de213d4e9b80d0b0896e8c4ec8"
                    },
                    "properties": {
                        "Date": {
                            "type": "date",
                            "date": {
                                "start": new Date(trackDate),
                                "time_zone": "America/Los_Angeles"
                            }
                        },
                        "Name": {
                            "title": [
                                {
                                    "type": "text",
                                    "text": {
                                        "content": item
                                    }
                                }
                            ]
                        }
                    }
                };

                (async () => {
                    const response = await notion.pages.create(data);
                    console.log(response);
                })();
            });
            trackDate = moment(trackDate).add(1, "days").format("YYYY-MM-DDThh:mm:ssZ");
        }

        console.log(checkResponse);

    }
})();





