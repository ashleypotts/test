// Returns a form with all necessary inputs for an EventGridPost activity

import Text from '../textbox';

function EventGridPost(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="EventGridPost" style={{marginLeft:20}}>
                    <Text title="id" activity = "EventGridPost"/>
                    <Text title="topicEndpoint" activity = "EventGridPost"/>
                    <Text title="topicKey" activity = "EventGridPost"/>
                    <Text title="eventType" activity = "EventGridPost"/>
                    <Text title="subject" activity = "EventGridPost"/>
                    <Text title="data" activity = "EventGridPost"/>
                </form>
            </td>
        </tr>
        
    )
}

export default EventGridPost;