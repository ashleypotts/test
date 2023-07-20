// Will contain information from any updated input
var configInfo={};

var configjson = {
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
            "days": ["Mon"]
        }
    },
    "config": {
        "actions": [     
            {
                "id": "",	
                "actionType": "",
                "action": "",
                "enabled": false,
                "config": {
                    "communicationAction": {
                        "id": "",
                        "action": "",                                   
                        "config": {										
                            "endpoint": "",
                            "path": "",
                            "headers": {
                                "Authorization": "",
                                "Content-Type": ""                                
                            },
                            "payload": {
                                "app_key": "",
                                "bp_inc": "",                                
                                "bp_noc": "",
                                "primary_property": "",
                                "secondary_property": "",
                                "assignment_group": "",
                                "status": "",
                                "runbook": "",
                                "host": "",
                                "environment": "",                                                                
                                "client": "",
                                "process": "",
                                "instanceId": "",                                
                                "errorType": "",
                                "errorMessage": "",
                                "transactionDetails": ""                                
                            },
                            "knownResponses": [
                                {
                                    "status": "",
                                    "statusCode": 0,
                                    "message": ""
                                }                                
                            ]
                        }
                    },                        
                    "stagingTablesToUpdate": [
                        {
                            "tableName": "",
                            "connection": {
                                "connection_string": ""
                            },
                            "criteria": "",
                            "parameters": [							
                                ""
                            ],                                
                            "resultFieldNames": {
                                "outboundCommunicationLogId": "",
                                "lastUpdatedDateTime": ""                                    
                            },
                            "otherUpdatesOnFailure": {
                                "update": ""
                            }
                        }
                    ]
                }   
            }            
        ]
    }
}

// Called by inputs to update configInfo
export function updateConfigInfo(newData){
    {for (var data in newData) {
        configInfo[data] = newData[data]
      } }
}

// Removes all inputs corresponding to an unchecked activity
export function deleteActivity(activityTitle){
    {for (var key in configInfo) {
        if(key.endsWith(activityTitle))
        {
            delete configInfo[key];
        }
      } }
}

// Creates a textarea containing contents of configInfo
export function GenerateConfig() {
    {for (var item in configInfo) {
        configjson[item] = configInfo[item]
      } }  
    let newconfig = JSON.stringify(configjson);
    return (
      <textarea style={{width:"500px",
                        height: "200px"}}>
        {newconfig}
      </textarea> 
    )
  }
