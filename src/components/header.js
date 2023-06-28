import Text from './textbox';

function GenerateHeader() {
    return(
    <div>
        <div>
            <h3>Backoffice ETL Config File Generator Utility</h3>
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