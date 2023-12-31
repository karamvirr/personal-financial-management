const openTab = url => {
  window.open(url, '_blank');
};

const SocialLink = ({ link, icon, name }) => {
  let colorClass = null;
  if (name === 'linkedin') {
    colorClass = 'text-linkedin';
  } else if (name === 'github') {
    colorClass = 'text-github';
  }

  return (
    <div
      className={`${colorClass} cursor-pointer text-2xl opacity-75
        transition-opacity duration-200 hover:opacity-100`}
      onClick={() => {
        openTab(link);
      }}>
      {icon}
    </div>
  );
};

export default SocialLink;
