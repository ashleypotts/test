import Text from './textbox';
import TextArea from './textarea';
import Check from './checkbox';
import { useState } from 'react';

function GenerateHeader() {
    return(
    <div>
        <div>
            <h3>Backoffice ETL Config File Generator Utility</h3>
        </div>
        <table>
            <Text title="configName"/>
            <Text title="type"/>
            <Text title="subtype"/>
            <Text title="client"/>
            <Text title="process"/>
            <TextArea title="description"/>
            <Text title="eventFilters"/>
        </table>
        <table>
        <tr>Schedule</tr>
        <table style={{marginLeft:15}}>
        <tr>
            {/* <table style={{marginLeft:15}}> */}
                <Check title="enabled"/>
                <Text title="type"/>
            {/* </table> */}
        </tr>
        <tr >Window
            <table style={{marginLeft:25}}>
                <Text title="startTime"/>
                <Text title="endTime"/>
                <Text title="days"/>
            </table>
        </tr>
        </table>
        </table>
    </div>
    )
}

export default GenerateHeader;