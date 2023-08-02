// Will contain information from any updated input
var configInfo={
    "type": "",
    "subType": "",
    "client": "",
    "process": "", 
    "description": "",
    "eventFilters": [
        ""
    ],               
    "schedule": {
        "enabled": false,
        "type": "",
        "window": {
            "startTime": "",
            "endTime": "",
            "days": []
        }
    },
    "config":{
        "actions":{}
    }
};

// var configjson = {
//     "type": "",
//     "subType": "",
//     "client": "",
//     "process": "", 
//     "description": "",
//     "eventFilters": [
//         ""
//     ],               
//     "schedule": {
//         "enabled": false,
//         "type": "",
//         "window": {
//             "startTime": "",
//             "endTime": "",
//             "days": ["Mon"]
//         }
//     },
//     "config": {
//         "actions": [     
//             {
//                 "id": "",	
//                 "actionType": "",
//                 "action": "",
//                 "enabled": false,
//                 "config": {
//                     "communicationAction": {
//                         "id": "",
//                         "action": "",                                   
//                         "config": {										
//                             "endpoint": "",
//                             "path": "",
//                             "headers": {
//                                 "Authorization": "",
//                                 "Content-Type": ""                                
//                             },
//                             "payload": {
//                                 "app_key": "",
//                                 "bp_inc": "",                                
//                                 "bp_noc": "",
//                                 "primary_property": "",
//                                 "secondary_property": "",
//                                 "assignment_group": "",
//                                 "status": "",
//                                 "runbook": "",
//                                 "host": "",
//                                 "environment": "",                                                                
//                                 "client": "",
//                                 "process": "",
//                                 "instanceId": "",                                
//                                 "errorType": "",
//                                 "errorMessage": "",
//                                 "transactionDetails": ""                                
//                             },
//                             "knownResponses": [
//                                 {
//                                     "status": "",
//                                     "statusCode": 0,
//                                     "message": ""
//                                 }                                
//                             ]
//                         }
//                     },                        
//                     "stagingTablesToUpdate": [
//                         {
//                             "tableName": "",
//                             "connection": {
//                                 "connection_string": ""
//                             },
//                             "criteria": "",
//                             "parameters": [							
//                                 ""
//                             ],                                
//                             "resultFieldNames": {
//                                 "outboundCommunicationLogId": "",
//                                 "lastUpdatedDateTime": ""                                    
//                             },
//                             "otherUpdatesOnFailure": {
//                                 "update": ""
//                             }
//                         }
//                     ]
//                 }   
//             }            
//         ]
//     }
// }

// Called by inputs to update configInfo
export function updateConfigInfo(newData){
    for (var data in newData) {
        var temp = newData[data]
        temp = temp.trim()
        temp = temp.replace(/"|'/g, '')
        if(temp.includes(",")){
            temp = temp.split(/[ ,]+/)
        }
        var tempData = data
        tempData = tempData.split("_")
        let currentObject = configInfo
        let firstChar = data.charCodeAt(0)
        if(firstChar >= 65 && firstChar <= 90){
            currentObject = currentObject["config"]["actions"]
        }
        for (let i = 0; i < tempData.length; i++) {
            const key = tempData[i];
            if (typeof currentObject[key] === 'undefined') {
                currentObject[key] = {};
            }
            if (i === tempData.length - 1) {
                currentObject[key] = temp;
            } else {
                currentObject = currentObject[key];
            }
        }
    }
}

// Removes all inputs corresponding to an unchecked activity
export function deleteActivity(activityTitle){
    for (var key in configInfo["config"]["actions"]) {
        if(key===activityTitle)
        {
            delete configInfo["config"]["actions"][key];
        }
    }
}

// Creates a textarea containing contents of configInfo
export function GenerateConfig() {
    // for (var item in configInfo) {
    //     configjson[item] = configInfo[item]
    // }
    let newconfig = JSON.stringify(configInfo, null, "\t");
    return (
      <textarea style={{width:"1000px",
                        height: "200px"}}>
        {newconfig}
      </textarea> 
    )
  }
