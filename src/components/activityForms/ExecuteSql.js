// Returns a form with all necessary inputs for an ExecuteSql activity

import Text from '../textbox';

function ExecuteSql(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="ExecuteSqlForm" style={{marginLeft:20}}>
                    <Text title="connectionString" activity = "ExecuteSql"/>
                    <Text title="sql" activity = "ExecuteSql"/>
                    <Text title="parameters" activity = "ExecuteSql"/>
                </form>
            </td>
        </tr>
        
    )
}

export default ExecuteSql;