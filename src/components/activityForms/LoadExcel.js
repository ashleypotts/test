// Returns a form with all necessary inputs for an LoadExcel activity

import Text from '../textbox';

function LoadExcel(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="LoadExcelForm" style={{marginLeft:20}}>
                    <Text title="blobContainer" activity = "LoadExcel"/>
                    <Text title="blobPath" activity = "LoadExcel"/>
                    <Text title="config" activity = "LoadExcel"/>
                    <Text title="schema" activity = "LoadExcel" extra = "sqlConfig"/>
                    <Text title="table" activity = "LoadExcel" extra = "sqlConfig"/>
                </form>
            </td>
        </tr>
        
    )
}

export default LoadExcel;