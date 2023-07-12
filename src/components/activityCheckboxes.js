import React, { useState } from 'react';
import Text from './textbox';
import Check from './checkbox';
import Num from './number';
import Radio from './radio';

const activities = [
  { title: "ApiPost" },
  { title: "BigPandaAlert" },
  { title: "DatabaseLookup" },
  { title: "DbStaging" },
  { title: "EventGridPost" },
  { title: "ExecuteSql" },
  { title: "JsonFlatten" },
  { title: "JsonMap" },
  { title: "LoadCsv" },
  { title: "LoadCsvBulk" },
  { title: "LoadExcel" },
  { title: "Log" },
  { title: "SerialNumberConversion" },
  { title: "Sleep" },
  { title: "SnsPost" },
  { title: "WriteFile" },
  { title: "WriteToStagingDb" }
];

function Checkbox({ title, checked, onChange }) {
  return (
    <tr>
      <td width={10}>
        <input
          type="checkbox"
          checked={checked}
          id={title}
          name={title}
          onChange={onChange}
        />
      </td>
      <td>
         <label for={title}>{title}</label>
      </td>
    </tr>
  );
}

function MakeCheckboxes() {
    const ifTableExists=["fail", "replace", "append"];
    const format=["hex", "dec"];
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const handleChange = (event, activity) => {
        const isChecked = event.target.checked;
        if (isChecked) {
        setSelectedCheckboxes(prevCheckboxes => [...prevCheckboxes, activity.title]);
        } else {
        setSelectedCheckboxes(prevCheckboxes => prevCheckboxes.filter(item => item !== activity.title));
        }
    };

    return (
    <div>
      <table border={1}>
        <tbody>
          {activities.map(activity => (
            <React.Fragment key={activity.title}>
                <Checkbox
                title={activity.title}
                checked={selectedCheckboxes.includes(activity.title)}
                onChange={event => handleChange(event, activity)}
                />
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='ApiPost' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="ApiPostForm">
                                    <Check title="enabled" activity = {activity.title}/>
                                    <Text title="connectionId" activity = {activity.title}/>
                                    <Text title="endpoint" activity = {activity.title}/>
                                    <Text title="path" activity = {activity.title}/>
                                    <Text title="headers" activity = {activity.title}/>
                                    <Text title="payload" activity = {activity.title}/>
                                    <Text title="blobpath" activity = {activity.title}/>
                                    <Num title="statusCode" activity = {activity.title}/>
                                    <Text title="message" activity = {activity.title}/>
                                    <Check title="raiseException" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='BigPandaAlert' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="BigPandaAlertForm">
                                    <Text title="pandaClient" activity = {activity.title}/>
                                    <Text title="pandaProcess" activity = {activity.title}/>
                                    <Text title="errorType" activity = {activity.title}/>
                                    <Text title="errorMessage" activity = {activity.title}/>
                                    <Text title="trandactionDetails" activity = {activity.title}/>
                                    <Check title="alertAtoc" activity = {activity.title}/>
                                    <Text title="alertAssignmentGroup" activity = {activity.title}/>
                                    <Text title="runbook" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='DatabaseLookup' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="DatabaseLookupForm">
                                    <Text title="sql" activity={activity.title}/>
                                    <Text title="parameters" activity = {activity.title}/>
                                    <Check title="failWhenNull" activity = {activity.title}/>
                                    <Text title="id" activity = {activity.title}/>
                                    <Text title="connectionString" activity = {activity.title}/>
                                    <Text title="url" activity = {activity.title}/>
                                    <Text title="driverJarPath" activity = {activity.title}/>
                                    <Text title="username" activity = {activity.title}/>
                                    <Text title="password" activity = {activity.title}/>
                                    <Text title="driverParams" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='DbStaging' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="DbStagingForm">
                                    <Text title="sql" activity = {activity.title}/>
                                    <Check title="failWhenNull" activity = {activity.title}/>
                                    <Text title="id" activity = {activity.title}/>
                                    <Text title="type" activity = {activity.title}/>
                                    <Text title="subType" activity = {activity.title}/>
                                    <Text title="connectionString" activity = {activity.title}/>
                                    <Text title="class" activity = {activity.title}/>
                                    <Text title="url" activity = {activity.title}/>
                                    <Text title="driverJarPath" activity = {activity.title}/>
                                    <Text title="username" activity = {activity.title}/>
                                    <Text title="password" activity = {activity.title}/>
                                    <Text title="driverParams" activity = {activity.title}/>
                                    <Text title="table" activity = {activity.title}/>
                                    <Text title="schema" activity = {activity.title}/>
                                    <Radio title="ifTableExists" options={ifTableExists} activity = {activity.title}/>
                                    <Check title="insertOnlyMappedColumns" activity = {activity.title}/>
                                    <Text title="parameters" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='EventGridPost' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="EventGridPostForm">
                                    <Text title="id" activity = {activity.title}/>
                                    <Text title="topicEndpoint" activity = {activity.title}/>
                                    <Text title="topicKey" activity = {activity.title}/>
                                    <Text title="eventType" activity = {activity.title}/>
                                    <Text title="subject" activity = {activity.title}/>
                                    <Text title="data" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='ExecuteSql' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="ExecuteSqlForm">
                                    <Text title="connectionString" activity = {activity.title}/>
                                    <Text title="sql" activity = {activity.title}/>
                                    <Text title="parameters" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='JsonFlatten' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="JsonFlattenForm">
                                    <Text title="keyPath" activity = {activity.title}/>
                                    <Text title="dataPath" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='JsonMap' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="JsonMapForm">
                                    <Text title="map" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='LoadCsv' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="LoadCsvForm">
                                    <Text title="blobContainer" activity = {activity.title}/>
                                    <Text title="blobPath" activity = {activity.title}/>
                                    <Text title="csvConfig" activity = {activity.title}/>
                                    <Text title="sqlConfig" activity = {activity.title}/>
                                    <Text title="name" activity = {activity.title}/>
                                    <Text title="stripDecimals" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='LoadCsvBulk' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="LoadCsvBulkForm">
                                    <Text title="blobContainer" activity = {activity.title}/>
                                    <Text title="blobPath" activity = {activity.title}/>
                                    <Num title="firstRow" activity = {activity.title}/>
                                    <Text title="formatFileContainer" activity = {activity.title}/>
                                    <Text title="formatFilePath" activity = {activity.title}/>
                                    <Text title="dbTableSchema" activity = {activity.title}/>
                                    <Text title="dbTableName" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='LoadExcel' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="LoadExcelForm">
                                    <Text title="blobContainer" activity = {activity.title}/>
                                    <Text title="blobPath" activity = {activity.title}/>
                                    <Text title="excelConfig" activity = {activity.title}/>
                                    <Text title="excelSchema" activity = {activity.title}/>
                                    <Text title="excelTable" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='SerialNumberConversion' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="SerialNumberConversionForm">
                                    <Text title="serialNumber" activity = {activity.title}/>
                                    <Radio title="format" options={format} activity = {activity.title}/>
                                    <Text title="separator" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='Sleep' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="SleepForm">
                                    <Text title="sleepSeconds" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='SnsPost' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="SnsPostForm">
                                    <Text title="id" activity = {activity.title}/>
                                    <Text title="topicArn" activity = {activity.title}/>
                                    <Text title="awsAccessKeyId" activity = {activity.title}/>
                                    <Text title="awsSecretAccessKey" activity = {activity.title}/>
                                    <Text title="message" activity = {activity.title}/>
                                    <Text title="attributes" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='WriteFile' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="WriteFileForm">
                                    <Check title="failOnEmptyFile" activity = {activity.title}/>
                                    <Check title="failOnBlobExists" activity = {activity.title}/>
                                    <Text title="blobNameQuery" activity = {activity.title}/>
                                    <Text title="blobPrefix" activity = {activity.title}/>
                                    <Text title="blobMetaData" activity = {activity.title}/>
                                    <Check title="compressOutput" activity = {activity.title}/>
                                    {/* encryption */}
                                        <Check title="enabled" activity = {activity.title} extra="encryption"/>
                                        <Text title="keyData" activity = {activity.title}/>
                                        <Text title="passphrase" activity = {activity.title}/>
                                    {/* voltageDecryption */}
                                        <Check title="enabled" activity = {activity.title} extra="voltageDecryption"/>
                                        <Text title="connectionId" activity = {activity.title}/>
                                    {/* headers */}
                                        <Radio title="format" options={format} activity = {activity.title} extra="headers"/>
                                        <Text title="sql" activity = {activity.title} extra="headers"/>
                                        {/* config */}
                                            <Text title="sep" activity = {activity.title} extra="headers"/>
                                            <Text title="columns" activity = {activity.title} extra="headers"/>
                                            <Check title="header" activity = {activity.title} extra="headers"/>
                                            <Check title="index" activity = {activity.title} extra="headers"/>
                                            <Text title="indexLabel" activity = {activity.title} extra="headers"/>
                                            <Text title="lineTerminator" activity = {activity.title} extra="headers"/>
                                            <Text title="chunkSize" activity = {activity.title} extra="headers"/>
                                            <Text title="dateFormat" activity = {activity.title} extra="headers"/>
                                            <Text title="rowDelimiter" activity = {activity.title} extra="headers"/>
                                            {/* columns */}
                                                <Text title="name" activity = {activity.title} extra="headers"/>
                                                <Check title="required" activity = {activity.title} extra="headers"/>
                                                <Num title="length" activity = {activity.title} extra="headers"/>
                                                <Text title="alignment" activity = {activity.title} extra="headers"/>
                                                <Text title="paddingCharacter" activity = {activity.title} extra="headers"/>
                                    {/* body */}
                                        <Radio title="format" options={format} activity = {activity.title} extra="body"/>
                                        <Text title="sql" activity = {activity.title} extra="body"/>
                                        {/* config */}
                                            <Text title="sep" activity = {activity.title} extra="body"/>
                                            <Text title="columns" activity = {activity.title} extra="body"/>
                                            <Check title="header" activity = {activity.title} extra="body"/>
                                            <Check title="index" activity = {activity.title} extra="body"/>
                                            <Text title="indexLabel" activity = {activity.title} extra="body"/>
                                            <Text title="lineTerminator" activity = {activity.title} extra="body"/>
                                            <Text title="chunkSize" activity = {activity.title} extra="body"/>
                                            <Text title="dateFormat" activity = {activity.title} extra="body"/>
                                            <Text title="rowDelimiter" activity = {activity.title} extra="body"/>
                                            {/* columns */}
                                                <Text title="name" activity = {activity.title} extra="body"/>
                                                <Check title="required" activity = {activity.title} extra="body"/>
                                                <Num title="length" activity = {activity.title} extra="body"/>
                                                <Text title="alignment" activity = {activity.title} extra="body"/>
                                                <Text title="paddingCharacter" activity = {activity.title} extra="body"/>
                                    {/* trailers */}
                                        <Radio title="format" options={format} activity = {activity.title} extra="trailers"/>
                                        <Text title="sql" activity = {activity.title} extra="trailers"/>
                                        {/* config */}
                                            <Text title="sep" activity = {activity.title} extra="trailers"/>
                                            <Text title="columns" activity = {activity.title} extra="trailers"/>
                                            <Check title="header" activity = {activity.title} extra="trailers"/>
                                            <Check title="index" activity = {activity.title} extra="trailers"/>
                                            <Text title="indexLabel" activity = {activity.title} extra="trailers"/>
                                            <Text title="lineTerminator" activity = {activity.title} extra="trailers"/>
                                            <Text title="chunkSize" activity = {activity.title} extra="trailers"/>
                                            <Text title="dateFormat" activity = {activity.title} extra="trailers"/>
                                            <Text title="rowDelimiter" activity = {activity.title} extra="trailers"/>
                                            {/* columns */}
                                                <Text title="name" activity = {activity.title} extra="trailers"/>
                                                <Check title="required" activity = {activity.title} extra="trailers"/>
                                                <Num title="length" activity = {activity.title} extra="trailers"/>
                                                <Text title="alignment" activity = {activity.title} extra="trailers"/>
                                                <Text title="paddingCharacter" activity = {activity.title} extra="trailers"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title==='WriteToStagingDb' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="WriteToStagingDbForm">
                                    <Text title="table" activity = {activity.title}/>
                                    <Text title="schema" activity = {activity.title}/>
                                    <Radio title="ifTableExists" options={ifTableExists} activity = {activity.title}/>
                                    <Check title="insertOnlyMappedColumns" activity = {activity.title}/>
                                    {/* voltageDecryption */}
                                        <Check title="enabled" activity = {activity.title}/>
                                        <Text title="connectionId" activity = {activity.title}/>
                                </form>
                            </td>
                        </tr>
                    )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
    );
}

export default MakeCheckboxes;