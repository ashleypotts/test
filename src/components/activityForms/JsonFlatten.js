// Returns a form with all necessary inputs for an JsonFlatten activity

import Text from '../textbox';

function JsonFlatten(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="JsonFlattenForm" style={{marginLeft:20}}>
                    <Text title="keyPath" activity = "JsonFlatten"/>
                    <Text title="dataPath" activity = "JsonFlatten"/>
                </form>
            </td>
        </tr>
        
    )
}

export default JsonFlatten;