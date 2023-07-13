import Text from '../textbox';

function JsonFlatten(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="JsonFlattenForm">
                    <Text title="keyPath" activity = "JsonFlatten"/>
                    <Text title="dataPath" activity = "JsonFlatten"/>
                </form>
            </td>
        </tr>
        
    )
}

export default JsonFlatten;