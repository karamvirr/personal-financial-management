const Card = ({ children, className, onClick, id }) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-white shadow-lg
        ring-1 ring-slate-900/5`}
      onClick={onClick}
      key={id}>
      {children}
    </div>
  );
};

export default Card;
