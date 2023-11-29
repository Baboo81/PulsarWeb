import { style } from './btn.moduel.css'

const txtBtn = "";

function BtnStyle ( {backgroundColor, fontSize, txtBtn} ) {
    return <button style = {
        {
            backgroundColor: backgroundColor,
            fontSize: fontSize
        }
    }> {txtBtn} </button>
}

const Btn = () => (
    <BtnStyle  />
    
);


export default BtnStyle