// Returns a form with all necessary inputs for an ApiPost activity

import Text from '../textbox';
import Check from '../checkbox';
import Num from '../number';

function ApiPost(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="ApiPostForm" style={{marginLeft:20}}>
                    <tr>
                        
                    </tr>
                    <Check title="enabled" activity = "ApiPost"/>
                    <Text title="connectionId" activity = "ApiPost"/>
                    <Text title="endpoint" activity = "ApiPost"/>
                    <Text title="path" activity = "ApiPost"/>
                    <Text title="headers" activity = "ApiPost"/>
                    <Text title="payload" activity = "ApiPost"/>
                    <Text title="blobpath" activity = "ApiPost"/>
                    <Num title="statusCode" activity = "ApiPost"/>
                    <Text title="message" activity = "ApiPost"/>
                    <Check title="raiseException" activity = "ApiPost"/>
                </form>
            </td>
        </tr>
    )
}
export default ApiPost;