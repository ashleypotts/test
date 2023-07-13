import Text from '../textbox';
import Check from '../checkbox';

function BigPandaAlert(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="BigPandaAlertForm">
                    <Text title="pandaClient" activity = "BigPandaAlert"/>
                    <Text title="pandaProcess" activity = "BigPandaAlert"/>
                    <Text title="errorType" activity = "BigPandaAlert"/>
                    <Text title="errorMessage" activity = "BigPandaAlert"/>
                    <Text title="trandactionDetails" activity = "BigPandaAlert"/>
                    <Check title="alertAtoc" activity = "BigPandaAlert"/>
                    <Text title="alertAssignmentGroup" activity = "BigPandaAlert"/>
                    <Text title="runbook" activity = "BigPandaAlert"/>
                </form>
            </td>
        </tr>
    )
}

export default BigPandaAlert;