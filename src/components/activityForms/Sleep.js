import Text from '../textbox';

function Sleep(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="SleepForm">
                    <Text title="sleepSeconds" activity = "Sleep"/>
                </form>
            </td>
        </tr>
        
    )
}

export default Sleep;