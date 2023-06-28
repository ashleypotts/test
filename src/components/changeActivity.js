import Check from './checkbox';
import Text from './textbox';
import Num from './number';
import Radio from './radio';

function ApiPost(){
    return(
        <div>
        <Check title="enabled"/>
        <Text title="connectionId"/>
        <Text title="endpoint"/>
        <Text title="path"/>
        <Text title="headers"/>
        <Text title="payload"/>
        <Text title="blobpath"/>
        <Num title="statusCode"/>
        <Text title="message"/>
        <Check title="raiseException"/>
        </div>
    )
}

function BigPandaAlert(){
    return(
        <div>
        <Text title="pandaClient"/>
        <Text title="pandaProcess"/>
        <Text title="errorType"/>
        <Text title="errorMessage"/>
        <Text title="trandactionDetails"/>
        <Check title="alertAtoc"/>
        <Text title="alertAssignmentGroup"/>
        <Text title="runbook"/>
        </div>
    )
}

function DatabaseLookup(){
    return(
        <div>
        <Text title="sql"/>
        <Text title="parameters"/>
        <Check title="failWhenNull"/>
        <Text title="id"/>
        <Text title="connectionString"/>
        <Text title="url"/>
        <Text title="driverJarPath"/>
        <Text title="username"/>
        <Text title="password"/>
        <Text title="driverParams"/>
        </div>
    )
}

function DbStaging(){
    const ifTableExists=["fail", "replace", "append"];
    return(
        <div>
        <Text title="sql"/>
        <Check title="failWhenNull"/>
        <Text title="id"/>
        <Text title="type"/>
        <Text title="subType"/>
        <Text title="connectionString"/>
        <Text title="class"/>
        <Text title="url"/>
        <Text title="driverJarPath"/>
        <Text title="username"/>
        <Text title="password"/>
        <Text title="driverParams"/>
        <Text title="table"/>
        <Text title="schema"/>
        <Radio title="ifTableExists" options={ifTableExists}/>
        <Check title="insertOnlyMappedColumns"/>
        <Text title="parameters"/>
        </div>
    )
}

function EventGridPost() {
    return(
        <div>
        <Text title="id"/>
        <Text title="topicEndpoint"/>
        <Text title="topicKey"/>
        <Text title="eventType"/>
        <Text title="subject"/>
        <Text title="data"/>
        </div>
    )
}

function ExecuteSql() {
    return(
        <div>
        <Text title="connectionString"/>
        <Text title="sql"/>
        <Text title="parameters"/>
        </div>
    )
}

function JsonFlatten() {
    return(
        <div>
        <Text title="keyPath"/>
        <Text title="dataPath"/>
        </div>
    )
}

function JsonMap() {
    return(
        <div>
        <Text title="map"/>
        </div>
    )
}

function LoadCsv() {
    return(
        <div>
        <Text title="blobContainer"/>
        <Text title="blobPath"/>
        <Text title="csvConfig"/>
        <Text title="sqlConfig"/>
        <Text title="name"/>
        <Text title="stripDecimals"/>
        </div>
    )
}

function LoadCsvBulk() {
    return(
        <div>
        <Text title="blobContainer"/>
        <Text title="blobPath"/>
        <Num title="firstRow"/>
        <Text title="formatFileContainer"/>
        <Text title="formatFilePath"/>
        <Text title="dbTableSchema"/>
        <Text title="dbTableName"/>
        </div>
    )
}

function LoadExcel() {
    return(
        <div>
        <Text title="blobContainer"/>
        <Text title="blobPath"/>
        <Text title="excelConfig"/>
        <Text title="excelSchema"/>
        <Text title="excelTable"/>
        </div>
    )
}

function Log() {
    return(
        <div></div>
    )
}

function SerialNumberConversion() {
    const format=["hex", "dec"];
    return(
        <div>
        <Text title="serialNumber"/>
        <Radio title="format" options={format}/>
        <Text title="separator"/>
        </div>
    )
}

function Sleep() {
    return(
        <div>
        <Text title="sleepSeconds"/>
        </div>
    )
}

function SnsPost() {
    return(
        <div>
        <Text title="id"/>
        <Text title="topicArn"/>
        <Text title="awsAccessKeyId"/>
        <Text title="awsSecretAccessKey"/>
        <Text title="message"/>
        <Text title="attributes"/>
        </div>
    )
}

function WriteFile() {
    const format=["fixedwidth", "csv"];
    return(
        <div>
        <Check title="failOnEmptyFile"/>
        <Check title="failOnBlobExists"/>
        <Text title="blobNameQuery"/>
        <Text title="blobPrefix"/>
        <Text title="blobMetaData"/>
        <Check title="compressOutput"/>
        {/* encryption */}
            <Check title="enabled"/>
            <Text title="keyData"/>
            <Text title="passphrase"/>
        {/* voltageDecryption */}
            <Check title="enabled"/>
            <Text title="connectionId"/>
        {/* headers */}
            <Radio title="format" options={format}/>
            <Text title="sql"/>
            {/* config */}
                <Text title="sep"/>
                <Text title="columns"/>
                <Check title="header"/>
                <Check title="index"/>
                <Text title="indexLabel"/>
                <Text title="lineTerminator"/>
                <Text title="chunkSize"/>
                <Text title="dateFormat"/>
                <Text title="rowDelimiter"/>
                {/* columns */}
                    <Text title="name"/>
                    <Check title="required"/>
                    <Num title="length"/>
                    <Text title="alignment"/>
                    <Text title="paddingCharacter"/>
        {/* body */}
            <Radio title="format" options={format}/>
            <Text title="sql"/>
            {/* config */}
                <Text title="sep"/>
                <Text title="columns"/>
                <Check title="header"/>
                <Check title="index"/>
                <Text title="indexLabel"/>
                <Text title="lineTerminator"/>
                <Text title="chunkSize"/>
                <Text title="dateFormat"/>
                <Text title="rowDelimiter"/>
                {/* columns */}
                    <Text title="name"/>
                    <Check title="required"/>
                    <Num title="length"/>
                    <Text title="alignment"/>
                    <Text title="paddingCharacter"/>
        {/* trailers */}
            <Radio title="format" options={format}/>
            <Text title="sql"/>
            {/* config */}
                <Text title="sep"/>
                <Text title="columns"/>
                <Check title="header"/>
                <Check title="index"/>
                <Text title="indexLabel"/>
                <Text title="lineTerminator"/>
                <Text title="chunkSize"/>
                <Text title="dateFormat"/>
                <Text title="rowDelimiter"/>
                {/* columns */}
                    <Text title="name"/>
                    <Check title="required"/>
                    <Num title="length"/>
                    <Text title="alignment"/>
                    <Text title="paddingCharacter"/>
        </div>
    )
}

function WriteToStagingDb() {
    const ifTableExists=["fail", "replace", "append"];
    return(
        <div>
        <Text title="table"/>
        <Text title="schema"/>
        <Radio title="ifTableExists" options={ifTableExists}/>
        <Check title="insertOnlyMappedColumns"/>
        {/* voltageDecryption */}
            <Check title="enabled"/>
            <Text title="connectionId"/>
        </div>
    )
}

function ChangeActivity() {
    
}

export default ChangeActivity;