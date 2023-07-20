import Text from './textbox';
import TextArea from './textarea';
import Check from './checkbox';

function GenerateHeader() {

    return(
    <div>
        <div>
            <h3>Backoffice ETL Config File Generator Utility</h3>
        </div>
        <table>
            <tbody>
            <Text title="configName"/>
            <Text title="type"/>
            <Text title="subType"/>
            <Text title="client"/>
            <Text title="process"/>
            <TextArea title="description"/>
            <Text title="eventFilters"/>
            </tbody>
        </table>
        <table>
            <tbody>
                <tr>Schedule</tr>
                <table style={{marginLeft:15}}>
                    <tbody>
                        <tr>
                            <Check title="enabled"/>
                            <Text title="type" extra="Schedule"/>
                        </tr>
                        <tr >Window
                            <table style={{marginLeft:25}}>
                                <tbody>
                                    <Text title="startTime"/>
                                    <Text title="endTime"/>
                                    <Text title="days"/>
                                </tbody>
                            </table>
                        </tr>
                    </tbody>
                </table>
            </tbody>
        </table>
    </div>
    )
}

export default GenerateHeader;