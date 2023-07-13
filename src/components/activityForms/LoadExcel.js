import Text from '../textbox';

function LoadExcel(){
    return(
        <tr>
            <td colSpan={2}>
                <form id="LoadExcelForm">
                    <Text title="blobContainer" activity = "LoadExcel"/>
                    <Text title="blobPath" activity = "LoadExcel"/>
                    <Text title="excelConfig" activity = "LoadExcel"/>
                    <Text title="excelSchema" activity = "LoadExcel"/>
                    <Text title="excelTable" activity = "LoadExcel"/>
                </form>
            </td>
        </tr>
        
    )
}

export default LoadExcel;