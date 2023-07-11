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
      <td>
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
                    activity.title=='ApiPost' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="ApiPostForm">
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
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='BigPandaAlert' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="BigPandaAlertForm">
                                    <Text title="pandaClient"/>
                                    <Text title="pandaProcess"/>
                                    <Text title="errorType"/>
                                    <Text title="errorMessage"/>
                                    <Text title="trandactionDetails"/>
                                    <Check title="alertAtoc"/>
                                    <Text title="alertAssignmentGroup"/>
                                    <Text title="runbook"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='DatabaseLookup' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="DatabaseLookupForm">
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
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='DbStaging' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="DbStagingForm">
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
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='EventGridPost' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="EventGridPostForm">
                                    <Text title="id"/>
                                    <Text title="topicEndpoint"/>
                                    <Text title="topicKey"/>
                                    <Text title="eventType"/>
                                    <Text title="subject"/>
                                    <Text title="data"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='ExecuteSql' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="ExecuteSqlForm">
                                    <Text title="connectionString"/>
                                    <Text title="sql"/>
                                    <Text title="parameters"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='JsonFlatten' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="JsonFlattenForm">
                                    <Text title="keyPath"/>
                                    <Text title="dataPath"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='JsonMap' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="JsonMapForm">
                                    <Text title="map"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='LoadCsv' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="LoadCsvForm">
                                    <Text title="blobContainer"/>
                                    <Text title="blobPath"/>
                                    <Text title="csvConfig"/>
                                    <Text title="sqlConfig"/>
                                    <Text title="name"/>
                                    <Text title="stripDecimals"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='LoadCsvBulk' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="LoadCsvBulkForm">
                                    <Text title="blobContainer"/>
                                    <Text title="blobPath"/>
                                    <Num title="firstRow"/>
                                    <Text title="formatFileContainer"/>
                                    <Text title="formatFilePath"/>
                                    <Text title="dbTableSchema"/>
                                    <Text title="dbTableName"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='LoadExcel' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="LoadExcelForm">
                                    <Text title="blobContainer"/>
                                    <Text title="blobPath"/>
                                    <Text title="excelConfig"/>
                                    <Text title="excelSchema"/>
                                    <Text title="excelTable"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='SerialNumberConversion' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="SerialNumberConversionForm">
                                    <Text title="serialNumber"/>
                                    <Radio title="format" options={format}/>
                                    <Text title="separator"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='Sleep' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="SleepForm">
                                    <Text title="sleepSeconds"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='SnsPost' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="SnsPostForm">
                                    <Text title="id"/>
                                    <Text title="topicArn"/>
                                    <Text title="awsAccessKeyId"/>
                                    <Text title="awsSecretAccessKey"/>
                                    <Text title="message"/>
                                    <Text title="attributes"/>
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='WriteFile' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="WriteFileForm">
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
                                </form>
                            </td>
                        </tr>
                    )}
                    {selectedCheckboxes.includes(activity.title) && 
                    activity.title=='WriteToStagingDb' && 
                    (
                        <tr>
                            <td colSpan={2}>
                                <form id="WriteToStagingDbForm">
                                    <Text title="table"/>
                                    <Text title="schema"/>
                                    <Radio title="ifTableExists" options={ifTableExists}/>
                                    <Check title="insertOnlyMappedColumns"/>
                                    {/* voltageDecryption */}
                                        <Check title="enabled"/>
                                        <Text title="connectionId"/>
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