// Returns a form with all necessary inputs for an LoadCsv activity

import Text from '../textbox';

function LoadCsv(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="LoadCsvForm" style={{marginLeft:20}}>
                    <Text title="blobContainer" activity = "LoadCsv"/>
                    <Text title="blobPath" activity = "LoadCsv"/>
                    <Text title="csvConfig" activity = "LoadCsv"/>
                    <Text title="sqlConfig" activity = "LoadCsv"/>
                    <Text title="name" activity = "LoadCsv"/>
                    <Text title="stripDecimals" activity = "LoadCsv"/>
                </form>
            </td>
        </tr>
        
    )
}

export default LoadCsv;