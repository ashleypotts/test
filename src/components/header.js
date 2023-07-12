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
        <p>Schedule
            <table style={{marginLeft:20}}>
                <Check title="enabled"/>
                <Text title="type"/>
            </table>
        </p>
        <p style={{marginLeft:20}}>Window
            <table style={{marginLeft:40}}>
                <Text title="startTime"/>
                <Text title="endTime"/>
                <Text title="days"/>
            </table>
        </p>    
        </table>
    </div>
    )
}

export default GenerateHeader;