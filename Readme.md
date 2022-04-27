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
> To create an API key you can use with this script, you need to follow the instructions in this link:
[Create an integration](https://developers.notion.com/docs/getting-started#step-1-create-an-integration). 
<br/><br/>
You will get somethinkg like `Bearer secret_0tddMGvvWIRVBjL52Ul8SK0GsxM0cWevizXoWaqfzsa` as an API key. Make sure to exclude the `Bearer` portion

>To get your database ID in Notion go to the Database page, go to the Share options and click 'Copy Link'. 
<br/><br/>
You will get a link like https://www.notion.so/user/<mark>90d4ec4e9b80d0b08967473de213e8c8</mark>?v=e6c6e8a3b2f0f3ea17cc4fda2a8c204e. Where the highlighted portion is your database ID.

In the `./configs.js` file, you need to set your Notion API Key, your Notion database ID, and the set of tasks that will be created for each day.

``` js

let configs = {
    API_KEY: "secret_0tddMGvvWIRVBjL52Ul8SK0GsxM0cWevizXoWaqfzsa",
    items_array: ['Take vitamins', 'Read for 30 mins', 'Exercise for 30 mins'],
    database_id: "90d4ec4e9b80d0b08967473de213e8c8"
};

module.exports = configs;
```

### 4. Run the script
To create a set of Habit Tracker items for the current week startig from Monday to Friday, run the following command.
``` shell
$ node new-habit-tracker-item.js
```
To create a set of Habit Tracker items for a specific week, run the following command, setting the `date` parameter to any day within the target week. This will create items from Monday to Friday of that week, even though the date provided is a different day than Monday.
``` shell
$ node new-habit-tracker-item.js date=2022-04-29
```