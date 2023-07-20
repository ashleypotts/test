// Returns a form with all necessary inputs for an DbStaging activity

import Text from '../textbox';
import Check from '../checkbox';
import Radio from '../radio';

const ifTableExists=["fail", "replace", "append"];

function DbStaging(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="DbStagingForm" style={{marginLeft:20}}>
                    <Text title="sql" activity = "DbStagingForm"/>
                    <Check title="failWhenNull" activity = "DbStagingForm"/>
                    <Text title="id" activity = "DbStagingForm"/>
                    <Text title="type" activity = "DbStagingForm"/>
                    <Text title="subType" activity = "DbStagingForm"/>
                    <Text title="connectionString" activity = "DbStagingForm"/>
                    <Text title="class" activity = "DbStagingForm"/>
                    <Text title="url" activity = "DbStagingForm"/>
                    <Text title="driverJarPath" activity = "DbStagingForm"/>
                    <Text title="username" activity = "DbStagingForm"/>
                    <Text title="password" activity = "DbStagingForm"/>
                    <Text title="driverParams" activity = "DbStagingForm"/>
                    <Text title="table" activity = "DbStagingForm"/>
                    <Text title="schema" activity = "DbStagingForm"/>
                    <Radio title="ifTableExists" options={ifTableExists} activity = "DbStagingForm"/>
                    <Check title="insertOnlyMappedColumns" activity = "DbStagingForm"/>
                    <Text title="parameters" activity = "DbStagingForm"/>
                </form>
            </td>
        </tr>
        
    )
}

export default DbStaging;