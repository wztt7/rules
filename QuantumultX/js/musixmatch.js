var body = $response.body;
var obj = JSON.parse(body);

obj.message.body.app_config.reference= "active",
obj.message.body.app_config.trial=false,
obj.message.body.app_config.last_modified="Sun Apr 14 2024 11:16:35 GMT+0000 (UTC)",
obj.message.body.app_config.active_products=[
          {
            "product_id" : "com.musixmatch.offers.removeads.autorenewable.oneyear",
            "start_date" : "2024-03-27T16:27:38.000Z",
            "creation_date" : "2024-03-27T16:27:38.000Z",
            "credits" : 10,
            "end_date" : "2031-03-27T17:27:38.000Z",
            "product_type" : "subscription",
            "features" : {
              "no_ads" : 1,
              "clean_metadata" : 1,
              "party_mode" : 1,
              "lyrics_offline" : 1
            }
          }
        ],


body = JSON.stringify(obj);
$done({body});
