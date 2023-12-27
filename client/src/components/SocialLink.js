const openTab = url => {
  window.open(url, '_blank');
};

const SocialLink = ({ link, icon, name }) => {
  return (
    <div
      className={`text-${name} cursor-pointer text-2xl opacity-75
        transition-opacity duration-200 hover:opacity-100`}
      onClick={() => {
        openTab(link);
      }}>
      {icon}
    </div>
  );
};

export default SocialLink;
