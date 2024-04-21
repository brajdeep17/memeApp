import { useEffect, useState } from "react";
import Memecard from "./Memecard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    fetchMemes();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      console.log("FETCH MORE DATA");
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const data = await fetch("https://meme-api.com/gimme/20");
    const json = await data.json();
    console.log(json);
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  return (
    <div className="flex flex-wrap">
      {memes.map((meme, i) => {
        return (
          <div>
            <Memecard key={i} data={meme} />
          </div>
        );
      })}
      {showShimmer && <Shimmer />}
    </div>
  );
};

export default Body;
