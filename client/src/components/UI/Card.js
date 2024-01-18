const Card = ({ children, className, onClick }) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-white shadow-lg
        ring-1 ring-slate-900/5`}
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
