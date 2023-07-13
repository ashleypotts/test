import Text from '../textbox';
import Check from '../checkbox';

function DatabaseLookup(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="DatabaseLookupForm">
                    <Text title="sql" activity="DatabaseLookup"/>
                    <Text title="parameters" activity = "DatabaseLookup"/>
                    <Check title="failWhenNull" activity = "DatabaseLookup"/>
                    <Text title="id" activity = "DatabaseLookup"/>
                    <Text title="connectionString" activity = "DatabaseLookup"/>
                    <Text title="url" activity = "DatabaseLookup"/>
                    <Text title="driverJarPath" activity = "DatabaseLookup"/>
                    <Text title="username" activity = "DatabaseLookup"/>
                    <Text title="password" activity = "DatabaseLookup"/>
                    <Text title="driverParams" activity = "DatabaseLookup"/>
                </form>
            </td>
        </tr>
        
    )
}

export default DatabaseLookup;