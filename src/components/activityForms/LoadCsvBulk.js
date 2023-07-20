// Returns a form with all necessary inputs for an LoadCsvBulk activity

import Text from '../textbox';
import Num from '../number';

function LoadCsvBulk(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="LoadCsvBulkForm" style={{marginLeft:20}}>
                    <Text title="blobContainer" activity = "LoadCsvBulk"/>
                    <Text title="blobPath" activity = "LoadCsvBulk"/>
                    <Num title="firstRow" activity = "LoadCsvBulk"/>
                    <Text title="formatFileContainer" activity = "LoadCsvBulk"/>
                    <Text title="formatFilePath" activity = "LoadCsvBulk"/>
                    <Text title="dbTableSchema" activity = "LoadCsvBulk"/>
                    <Text title="dbTableName" activity = "LoadCsvBulk"/>
                </form>
            </td>
        </tr>
        
    )
}

export default LoadCsvBulk;