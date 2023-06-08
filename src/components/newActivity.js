import Drop from './dropdown';

const activities = [
{title: "ApiPost"},
{title: "BigPandaAlert"},
{title: "DatabaseLookup"},
{title: "DbStaging"},
{title: "EventGridPost"},
{title: "ExecuteSql"},
{title: "JsonFlatten"},
{title: "JsonMap"},
{title: "LoadCsv"},
{title: "LoadCsvBulk"},
{title: "LoadExcel"},
{title: "Log"},
{title: "SerialNumberConversion"},
{title: "Sleep"},
{title: "SnsPost"},
{title: "WriteFile"},
{title: "WriteToStagingDb"}
]

function NewActivity() {
    return(
        <div>
            <select id="activity" name="activity">
            <option selected="true" disabled="true" value="Select an activity...">Select an activity...</option>
            {activities.map(function(drop) {
                return (
                    <Drop title={drop.title}/>
                )
            })
            }
        </select><br/><br/>
        </div>
    )
}

export default NewActivity;