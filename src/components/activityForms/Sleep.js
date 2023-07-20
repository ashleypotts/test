// Returns a form with all necessary inputs for an Sleep activity

import Text from '../textbox';

function Sleep(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="SleepForm" style={{marginLeft:20}}>
                    <Text title="sleepSeconds" activity = "Sleep"/>
                </form>
            </td>
        </tr>
        
    )
}

export default Sleep;