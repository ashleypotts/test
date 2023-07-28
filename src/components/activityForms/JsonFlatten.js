// Returns a form with all necessary inputs for an JsonFlatten activity

import Text from '../textbox';

function JsonFlatten(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="JsonFlattenForm" style={{marginLeft:20}}>
                    <Text title="keyPath" activity = "JsonFlatten" extra = "listPaths_items"/>
                    <Text title="dataPath" activity = "JsonFlatten" extra = "listPaths_items"/>
                </form>
            </td>
        </tr>
        
    )
}

export default JsonFlatten;