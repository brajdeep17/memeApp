const Memecard = ({ data }) => {
  const { url, title, author } = data;
  return (
    <div className="p-5 m-5 border border-black rounded-lg">
      <img className="w-56 h-56" alt="meme" src={url} />
      <p>{author}</p>
      {/* <p className="text-sm ">{title}</p> */}
    </div>
  );
};

export default Memecard;
