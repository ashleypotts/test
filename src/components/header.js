import Text from './textbox';
import TextArea from './textarea';
import Check from './checkbox';
import { useState, useEffect} from 'react';
import {updateConfigInfo} from './ConfigGen';

function GenerateHeader() {
    const [formValue, setFormValue] = useState({});
    const handleInput = (event) => {
        const inputValue = event.target.value;
        setFormValue(prevValues => ({
        ...prevValues,
        [event.target.name]: inputValue
        }));
    };

    useEffect(() => {
        updateConfigInfo(formValue);
      }, [formValue]);

    return(
    <div>
        <div>
            <h3>Backoffice ETL Config File Generator Utility</h3>
        </div>
        <table>
            <tbody>
            <Text title="configName" onChange={(e) => handleInput(e)}/>
            <Text title="type" onChange={(e) => handleInput(e)}/>
            <Text title="subType" onChange={(e) => handleInput(e)}/>
            <Text title="client" onChange={(e) => handleInput(e)}/>
            <Text title="process" onChange={(e) => handleInput(e)}/>
            <TextArea title="description" onChange={(e) => handleInput(e)}/>
            <Text title="eventFilters" onChange={(e) => handleInput(e)}/>
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