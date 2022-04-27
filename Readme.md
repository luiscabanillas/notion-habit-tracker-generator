## Summary
---
This is a node script to add a set of items to a database for a weekly habit tracker in Notion.

## Instructions
---

### Prerequisite
You need to have a database in Notion that has the following Properties:

|Property Name|Type
|-|-|
|Name|Title|
|Date|Date|
|Status|Checkbox|

### 1. Clone this repository to your local machine
``` shell
$ git clone https://github.com/luiscabanillas/notion-habit-tracker-generator.git
```

### 2. Run npm install to get all the dependencies
```shell
$ npm install
```

### 3. Prepare your Notion setup
To create an API key you can use with this script, you need to follow the instructions in this link:
[Create an integration](https://developers.notion.com/docs/getting-started#step-1-create-an-integration). 
<br/><br/>
You will get somethinkg like `Bearer secret_0tddMGvvWIRVBjL52Ul8SK0GsxM0cWevizXoWaqfzsa` as an API key. Make sure to exclude the `Bearer` when you include it in your configuration later.

![](https://files.readme.io/2ec137d-093ad49-create-integration.gif)

Make sure you share your database page with your integration for this script to work, otherwise Notion will reject any API calls made for that database.
![](https://files.readme.io/0a267dd-share-database-with-integration.gif)

To get your database ID in Notion go to the Database page, go to the Share options and click 'Copy Link'. 
<br/><br/>
You will get a link like `https://www.notion.so/user/`**90d4ec4e9b80d0b08967473de213e8c8**`?v=e6c6e8a3b2f0f3ea17cc4fda2a8c204e`. Where the bolded portion is your database ID.

### 4. Configure your script
Now that you have tour API Key (withour `Bearer` and Database ID, in the `configs.js` file, you need to set your Notion API Key, your Notion database ID, and the set of tasks that will be created for each day.

``` js

let configs = {
    API_KEY: "secret_0tddMGvvWIRVBjL52Ul8SK0GsxM0cWevizXoWaqfzsa",
    items_array: ['Take vitamins', 'Read for 30 mins', 'Exercise for 30 mins'],
    database_id: "90d4ec4e9b80d0b08967473de213e8c8"
};

module.exports = configs;
```

### 5. Run the script
To create a set of Habit Tracker items for the current week startig from Monday to Friday, run the following command.
``` shell
$ node new-habit-tracker-item.js
```
To create a set of Habit Tracker items for a specific week, run the following command, setting the `date` parameter to any day within the target week. This will create items from Monday to Friday of that week, even though the date provided is a different day than Monday.
``` shell
$ node new-habit-tracker-item.js date=2022-04-29
```
### Troubleshooting zsh problems
If you have an error like `zsh: command not found` check [this thread in StackOverflow](https://stackoverflow.com/questions/18428374/commands-not-found-on-zsh).