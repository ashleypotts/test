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
            <Text title="Config Name"/>
            <Text title="Type"/>
            <Text title="Subtype"/>
            <Text title="Client"/>
            <Text title="Process"/>
            <TextArea title="Description"/>
            <Text title="EventFilters"/>
        </table>
        <p>Schedule
            <table style={{marginLeft:20}}>
                <Check title="Enabled"/>
                <Text title="Type"/>
            </table>
        </p>
        <p style={{marginLeft:20}}>Window
            <table style={{marginLeft:40}}>
                <Text title="Start time"/>
                <Text title="End time"/>
                <Text title="Days"/>
            </table>
        </p>
        
    </div>

  
    )
}

export default GenerateHeader;