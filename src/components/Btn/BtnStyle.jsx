import { style } from './btnStyle.module.css'

const txtBtn = "";

function Btn ( {backgroundColor, fontSize, txtBtn} ) {
    return <button style = {
        {
            backgroundColor: backgroundColor,
            fontSize: fontSize,
            txtBtn: txtBtn
        }
    }> {txtBtn} 
        </button>
}

const BtnStyle = () => { 

    return(
        
        <Btn backgroundColor="#1d2c49" fontSize="1em" txtBtn="" />
    )
}
    
    



export default BtnStyle