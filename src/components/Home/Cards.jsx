const Cards = (props) => {
  const { ocassion, src, message } = props;
  return (
    <div className="card_container">
      <p>{ocassion}</p>
      <img src={src} alt="ocassion" id="imgS1" loading="lazy" />
      <div className="messs">{message}</div>
    </div>
  );
};

export default Cards;
