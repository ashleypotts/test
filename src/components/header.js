import Text from './textbox';

function GenerateHeader() {
    return(
    <div>
        <div>
            <h1>Backoffice ETL Config File Generator Utility</h1>
        </div>
    
        <table>
            <Text title="Config Name"/>
            <Text title="Client"/>
            <Text title="Process"/>
        </table>

    </div>

  
    )
}

export default GenerateHeader;