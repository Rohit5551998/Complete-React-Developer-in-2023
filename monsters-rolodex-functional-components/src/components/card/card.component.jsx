import './card.styles.css';

const Card = ({ monster }) => {
  const { name, id, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`Monster: ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=250x250`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );

}

export default Card;