const Card = ({ children, className }) => {
  return <div className={`${className} bg-white shadow-md`}>{children}</div>;
};

export default Card;
