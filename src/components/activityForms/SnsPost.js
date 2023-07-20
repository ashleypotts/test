// Returns a form with all necessary inputs for an SnsPost activity

import Text from '../textbox';

function SnsPost(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="SnsPostForm" style={{marginLeft:20}}>
                    <Text title="id" activity = "SnsPost"/>
                    <Text title="topicArn" activity = "SnsPost"/>
                    <Text title="awsAccessKeyId" activity = "SnsPost"/>
                    <Text title="awsSecretAccessKey" activity = "SnsPost"/>
                    <Text title="message" activity = "SnsPost"/>
                    <Text title="attributes" activity = "SnsPost"/>
                </form>
            </td>
        </tr>
        
    )
}

export default SnsPost;