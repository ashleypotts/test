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
                    <Text title="sql" activity = "DbStaging" extra = "sourceProperties"/>
                    <Check title="failWhenNull" activity = "DbStaging" extra = "sourceProperties"/>
                    <Text title="id" activity = "DbStaging" extra = "sourceProperties_connection"/>
                    <Text title="type" activity = "DbStaging" extra = "sourceProperties_connection"/>
                    <Text title="subType" activity = "DbStaging" extra = "sourceProperties_connection"/>
                    <Text title="connectionString" activity = "DbStaging" extra = "sourceProperties_connection_config"/>
                    <Text title="class" activity = "DbStaging" extra = "sourceProperties_connection_config"/>
                    <Text title="url" activity = "DbStaging" extra = "sourceProperties_connection_config"/>
                    <Text title="driverJarPath" activity = "DbStaging" extra = "sourceProperties_connection_config"/>
                    <Text title="username" activity = "DbStaging" extra = "sourceProperties_connection_config"/>
                    <Text title="password" activity = "DbStaging" extra = "sourceProperties_connection_config"/>
                    <Text title="driverParams" activity = "DbStaging" extra = "sourceProperties_connection_config"/>
                    <Text title="table" activity = "DbStaging" extra = "destinationProperties"/>
                    <Text title="schema" activity = "DbStaging" extra = "destinationProperties"/>
                    <Radio title="ifTableExists" options={ifTableExists} activity = "DbStaging" extra = "destinationProperties"/>
                    <Check title="insertOnlyMappedColumns" activity = "DbStaging" extra = "destinationProperties"/>
                    <Text title="parameters" activity = "DbStaging" extra = "destinationProperties"/>
                </form>
            </td>
        </tr>
        
    )
}

export default DbStaging;