// Returns a form with all necessary inputs for an SerialNumberConversion activity

import Text from '../textbox';
import Radio from '../radio';

const format=["hex", "dec"];

function SerialNumberConversion(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="SerialNumberConversionForm" style={{marginLeft:20}}>
                    <Text title="serialNumber" activity = "SerialNumberConversion"/>
                    <Radio title="format" options={format} activity = "SerialNumberConversion"/>
                    <Text title="separator" activity = "SerialNumberConversion"/>
                </form>
            </td>
        </tr>
        
    )
}

export default SerialNumberConversion;