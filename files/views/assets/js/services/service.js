/*
 * Service settings
 */
var DB_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "54fa8f05e4b09c8cfffcf868"
}

/*
 * Services
 */

var DB_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': DB_settings
});