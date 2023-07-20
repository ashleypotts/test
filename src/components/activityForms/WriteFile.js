// Returns a form with all necessary inputs for an WriteFile activity

import Text from '../textbox';
import Check from '../checkbox';
import Num from '../number';
import Radio from '../radio';

const format=["hex", "dec"];

function WriteFile(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="WriteFileForm" style={{marginLeft:20}}>
                    <Check title="failOnEmptyFile" activity = "WriteFile"/>
                    <Check title="failOnBlobExists" activity = "WriteFile"/>
                    <Text title="blobNameQuery" activity = "WriteFile"/>
                    <Text title="blobPrefix" activity = "WriteFile"/>
                    <Text title="blobMetaData" activity = "WriteFile"/>
                    <Check title="compressOutput" activity = "WriteFile"/>
                    {/* encryption */}
                        <Check title="enabled" activity = "WriteFile" extra="encryption"/>
                        <Text title="keyData" activity = "WriteFile"/>
                        <Text title="passphrase" activity = "WriteFile"/>
                    {/* voltageDecryption */}
                        <Check title="enabled" activity = "WriteFile" extra="voltageDecryption"/>
                        <Text title="connectionId" activity = "WriteFile"/>
                    {/* headers */}
                        <Radio title="format" options={format} activity = "WriteFile" extra="headers"/>
                        <Text title="sql" activity = "WriteFile" extra="headers"/>
                        {/* config */}
                            <Text title="sep" activity = "WriteFile" extra="headers"/>
                            <Text title="columns" activity = "WriteFile" extra="headers"/>
                            <Check title="header" activity = "WriteFile" extra="headers"/>
                            <Check title="index" activity = "WriteFile" extra="headers"/>
                            <Text title="indexLabel" activity = "WriteFile" extra="headers"/>
                            <Text title="lineTerminator" activity = "WriteFile" extra="headers"/>
                            <Text title="chunkSize" activity = "WriteFile" extra="headers"/>
                            <Text title="dateFormat" activity = "WriteFile" extra="headers"/>
                            <Text title="rowDelimiter" activity = "WriteFile" extra="headers"/>
                            {/* columns */}
                                <Text title="name" activity = "WriteFile" extra="headers"/>
                                <Check title="required" activity = "WriteFile" extra="headers"/>
                                <Num title="length" activity = "WriteFile" extra="headers"/>
                                <Text title="alignment" activity = "WriteFile" extra="headers"/>
                                <Text title="paddingCharacter" activity = "WriteFile" extra="headers"/>
                    {/* body */}
                        <Radio title="format" options={format} activity = "WriteFile" extra="body"/>
                        <Text title="sql" activity = "WriteFile" extra="body"/>
                        {/* config */}
                            <Text title="sep" activity = "WriteFile" extra="body"/>
                            <Text title="columns" activity = "WriteFile" extra="body"/>
                            <Check title="header" activity = "WriteFile" extra="body"/>
                            <Check title="index" activity = "WriteFile" extra="body"/>
                            <Text title="indexLabel" activity = "WriteFile" extra="body"/>
                            <Text title="lineTerminator" activity = "WriteFile" extra="body"/>
                            <Text title="chunkSize" activity = "WriteFile" extra="body"/>
                            <Text title="dateFormat" activity = "WriteFile" extra="body"/>
                            <Text title="rowDelimiter" activity = "WriteFile" extra="body"/>
                            {/* columns */}
                                <Text title="name" activity = "WriteFile" extra="body"/>
                                <Check title="required" activity = "WriteFile" extra="body"/>
                                <Num title="length" activity = "WriteFile" extra="body"/>
                                <Text title="alignment" activity = "WriteFile" extra="body"/>
                                <Text title="paddingCharacter" activity = "WriteFile" extra="body"/>
                    {/* trailers */}
                        <Radio title="format" options={format} activity = "WriteFile" extra="trailers"/>
                        <Text title="sql" activity = "WriteFile" extra="trailers"/>
                        {/* config */}
                            <Text title="sep" activity = "WriteFile" extra="trailers"/>
                            <Text title="columns" activity = "WriteFile" extra="trailers"/>
                            <Check title="header" activity = "WriteFile" extra="trailers"/>
                            <Check title="index" activity = "WriteFile" extra="trailers"/>
                            <Text title="indexLabel" activity = "WriteFile" extra="trailers"/>
                            <Text title="lineTerminator" activity = "WriteFile" extra="trailers"/>
                            <Text title="chunkSize" activity = "WriteFile" extra="trailers"/>
                            <Text title="dateFormat" activity = "WriteFile" extra="trailers"/>
                            <Text title="rowDelimiter" activity = "WriteFile" extra="trailers"/>
                            {/* columns */}
                                <Text title="name" activity = "WriteFile" extra="trailers"/>
                                <Check title="required" activity = "WriteFile" extra="trailers"/>
                                <Num title="length" activity = "WriteFile" extra="trailers"/>
                                <Text title="alignment" activity = "WriteFile" extra="trailers"/>
                                <Text title="paddingCharacter" activity = "WriteFile" extra="trailers"/>
                </form>
            </td>
        </tr>
        
    )
}

export default WriteFile;