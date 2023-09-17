import './card.css';
const Cards = (props) => {
    const { ocassion, src, message } = props;
    return (
      <div className="card_container" style={{padding:'2rem'}}>
        <p>{ocassion}</p>
        <img src={src} alt="ocassion" loading="lazy" style={{width:'100%'}}/>
        <div className="messs">{message}</div>
      </div>
    );
  };
  
  export default Cards;
  