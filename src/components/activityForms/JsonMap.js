// Returns a form with all necessary inputs for an JsonMap activity

import Text from '../textbox';

function JsonMap(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="JsonMapForm" style={{marginLeft:20}}>
                    <Text title="map" activity = "JsonMap"/>
                </form>
            </td>
        </tr>
        
    )
}

export default JsonMap;