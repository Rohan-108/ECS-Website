import {Navigate} from 'react-router-dom';
import './Spectare.css';
function Card(props){
    return(
        <div className='cardSpectare' style={{margin:'2rem',border:'0 solid transparent',borderRadius:'2rem'}}>
            <div style={{zIndex:'6',backgroundImage:`url(${props.img})`,width:'100%',backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',height:'80%',border:'0px solid transparent',borderTopRightRadius:'2rem',borderTopLeftRadius:'2rem'}}>
                <div id='p' style={{display:'flex',alignItems:'center',justifyContent:'center',zIndex:'7',backgroundColor:'#00000055',color:'#ffffff',border:'0px solid transparent',borderTopLeftRadius:'2rem',borderTopRightRadius:'2rem',height:'100%',width:'100%',marginTop:'auto'}}>
                    {props.description}
                </div>
            </div>
            <a className='magLink' target='_blank' href={props.link}>Click Here</a>
        </div>
    );
}
export default Card;