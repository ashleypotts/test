import Text from '../textbox';
import Check from '../checkbox';
import Radio from '../radio';

const ifTableExists=["fail", "replace", "append"];

function WriteToStagingDb(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="WriteToStagingDbForm">
                    <Text title="table" activity = "WriteToStagingDb"/>
                    <Text title="schema" activity = "WriteToStagingDb"/>
                    <Radio title="ifTableExists" options={ifTableExists} activity = "WriteToStagingDb"/>
                    <Check title="insertOnlyMappedColumns" activity = "WriteToStagingDb"/>
                    {/* voltageDecryption */}
                        <Check title="enabled" activity = "WriteToStagingDb"/>
                        <Text title="connectionId" activity = "WriteToStagingDb"/>
                </form>
            </td>
        </tr>
        
    )
}

export default WriteToStagingDb;