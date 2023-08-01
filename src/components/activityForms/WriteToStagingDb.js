// Returns a form with all necessary inputs for an WriteToStagingDb activity

import Text from '../textbox';
import Check from '../checkbox';
import Radio from '../radio';

const ifTableExists=["fail", "replace", "append"];

function WriteToStagingDb(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="WriteToStagingDbForm" style={{marginLeft:20}}>
                    <Text title="table" activity = "WriteToStagingDb"/>
                    <Text title="schema" activity = "WriteToStagingDb"/>
                    <Radio title="ifTableExists" options={ifTableExists} activity = "WriteToStagingDb"/>
                    <Check title="insertOnlyMappedColumns" activity = "WriteToStagingDb"/>
                    {/* voltageDecryption */}
                        <Check title="enabled" activity = "WriteToStagingDb" extra = "voltageDecryption"/>
                        <Text title="connectionId" activity = "WriteToStagingDb" extra = "voltageDecryption"/>
                </form>
            </td>
        </tr>
        
    )
}

export default WriteToStagingDb;