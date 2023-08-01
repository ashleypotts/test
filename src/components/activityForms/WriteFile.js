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
                        <Text title="keyData" activity = "WriteFile" extra="encryption"/>
                        <Text title="passphrase" activity = "WriteFile" extra="encryption"/>
                    {/* voltageDecryption */}
                        <Check title="enabled" activity = "WriteFile" extra="voltageDecryption"/>
                        <Text title="connectionId" activity = "WriteFile" extra="voltageDecryption"/>
                    {/* headers */}
                        <Radio title="format" options={format} activity = "WriteFile" extra="headers"/>
                        <Text title="sql" activity = "WriteFile" extra="headers"/>
                        {/* config */}
                            <Text title="sep" activity = "WriteFile" extra="headers_config"/>
                            <Text title="columns" activity = "WriteFile" extra="headers_config"/>
                            <Check title="header" activity = "WriteFile" extra="headers_config"/>
                            <Check title="index" activity = "WriteFile" extra="headers_config"/>
                            <Text title="indexLabel" activity = "WriteFile" extra="headers_config"/>
                            <Text title="lineTerminator" activity = "WriteFile" extra="headers_config"/>
                            <Text title="chunkSize" activity = "WriteFile" extra="headers_config"/>
                            <Text title="dateFormat" activity = "WriteFile" extra="headers_config"/>
                            <Text title="rowDelimiter" activity = "WriteFile" extra="headers_config"/>
                            {/* columns */}
                                <Text title="name" activity = "WriteFile" extra="headers_config_columns_items"/>
                                <Check title="required" activity = "WriteFile" extra="headers_config_columns_items"/>
                                <Num title="length" activity = "WriteFile" extra="headers_config_columns_items"/>
                                <Text title="alignment" activity = "WriteFile" extra="headers_config_columns_items"/>
                                <Text title="paddingCharacter" activity = "WriteFile" extra="headers_config_columns_items"/>
                    {/* body */}
                        <Radio title="format" options={format} activity = "WriteFile" extra="body"/>
                        <Text title="sql" activity = "WriteFile" extra="body"/>
                        {/* config */}
                            <Text title="sep" activity = "WriteFile" extra="body_config"/>
                            <Text title="columns" activity = "WriteFile" extra="body_config"/>
                            <Check title="header" activity = "WriteFile" extra="body_config"/>
                            <Check title="index" activity = "WriteFile" extra="body_config"/>
                            <Text title="indexLabel" activity = "WriteFile" extra="body_config"/>
                            <Text title="lineTerminator" activity = "WriteFile" extra="body_config"/>
                            <Text title="chunkSize" activity = "WriteFile" extra="body_config"/>
                            <Text title="dateFormat" activity = "WriteFile" extra="body_config"/>
                            <Text title="rowDelimiter" activity = "WriteFile" extra="body_config"/>
                            {/* columns */}
                                <Text title="name" activity = "WriteFile" extra="body_config_columns_items"/>
                                <Check title="required" activity = "WriteFile" extra="body_config_columns_items"/>
                                <Num title="length" activity = "WriteFile" extra="body_config_columns_items"/>
                                <Text title="alignment" activity = "WriteFile" extra="body_config_columns_items"/>
                                <Text title="paddingCharacter" activity = "WriteFile" extra="body_config_columns_items"/>
                    {/* trailers */}
                        <Radio title="format" options={format} activity = "WriteFile" extra="trailers"/>
                        <Text title="sql" activity = "WriteFile" extra="trailers"/>
                        {/* config */}
                            <Text title="sep" activity = "WriteFile" extra="trailers_config"/>
                            <Text title="columns" activity = "WriteFile" extra="trailers_config"/>
                            <Check title="header" activity = "WriteFile" extra="trailers_config"/>
                            <Check title="index" activity = "WriteFile" extra="trailers_config"/>
                            <Text title="indexLabel" activity = "WriteFile" extra="trailers_config"/>
                            <Text title="lineTerminator" activity = "WriteFile" extra="trailers_config"/>
                            <Text title="chunkSize" activity = "WriteFile" extra="trailers_config"/>
                            <Text title="dateFormat" activity = "WriteFile" extra="trailers_config"/>
                            <Text title="rowDelimiter" activity = "WriteFile" extra="trailers_config"/>
                            {/* columns */}
                                <Text title="name" activity = "WriteFile" extra="trailers_config_columns_items"/>
                                <Check title="required" activity = "WriteFile" extra="trailers_config_columns_items"/>
                                <Num title="length" activity = "WriteFile" extra="trailers_config_columns_items"/>
                                <Text title="alignment" activity = "WriteFile" extra="trailers_config_columns_items"/>
                                <Text title="paddingCharacter" activity = "WriteFile" extra="trailers_config_columns_items"/>
                </form>
            </td>
        </tr>
        
    )
}

export default WriteFile;