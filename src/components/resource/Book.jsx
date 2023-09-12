const Book = ({ href, src, bookName }) => {
  return (
    <div
      className="box"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url(${src})`,
      }}
    >
      <a href={href} target="_blank" rel="noreferrer">
        <div className="card-content">
          <h2 className="card-title">{bookName}</h2>
        </div>
      </a>
    </div>
  );
};

export default Book;
