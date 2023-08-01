// Returns a form with all necessary inputs for an DatabaseLookup activity

import Text from '../textbox';
import Check from '../checkbox';

function DatabaseLookup(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="DatabaseLookupForm" style={{marginLeft:20}}>
                    <Text title="sql" activity="DatabaseLookup"/>
                    <Text title="parameters" activity = "DatabaseLookup"/>
                    <Check title="failWhenNull" activity = "DatabaseLookup"/>
                    <Text title="id" activity = "DatabaseLookup" extra = "connectionProperties"/>
                    <Text title="connectionString" activity = "DatabaseLookup" extra = "connectionProperties"/>
                    <Text title="url" activity = "DatabaseLookup" extra = "connectionProperties"/>
                    <Text title="driverJarPath" activity = "DatabaseLookup" extra = "connectionProperties"/>
                    <Text title="username" activity = "DatabaseLookup" extra = "connectionProperties"/>
                    <Text title="password" activity = "DatabaseLookup" extra = "connectionProperties"/>
                    <Text title="driverParams" activity = "DatabaseLookup" extra = "connectionProperties"/>
                </form>
            </td>
        </tr>
        
    )
}

export default DatabaseLookup;