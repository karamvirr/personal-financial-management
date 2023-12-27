const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-white shadow-lg
        ring-1 ring-slate-900/5`}>
      {children}
    </div>
  );
};

export default Card;
