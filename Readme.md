## Summary
---
This is a node script to add a set of items to a database for a weekly habit tracker in Notion.

## Instructions
---

### 1. Clone this repository to your local machine
``` shell
$ git clone https://github.com/luiscabanillas/notion-habit-tracker-generator.git
```

### 2. Run npm install to get all the dependencies
```shell
$ npm install
```

### 3. Configure your parameters
---
In the `./configs.js` file, you need to set your Notion API Key, your Notion database ID, and the set of tasks that will be created for each day.

``` js

let configs = {
    API_KEY: "YOUR_API_KEY",
    items_array: ['Take vitamins', 'Read for 30 mins', 'Exercise for 30 mins'],
    database_id: "YOUR_DATABASE_ID"
};

module.exports = configs;
```

### 4. Run the script
---

``` shell
$ node new-habit-tracker-item.js
```

This will create a set of Habit Tracker items for the current week startig from Monday to Friday.

``` shell
$ node new-habit-tracker-item.js date=2022-04-29
```

This will create a set of Habit Tracker items for the week specified by the date parameter starting from Monday to Friday of that week, even though the date provided is a different day than Monday.