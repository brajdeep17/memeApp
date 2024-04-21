import { LANG } from "../utils/langConstants";

const About = ({ lang }) => {
  const data = LANG[lang];
  return (
    <div>
      <h1 className="font-bold text-2xl">{data.title}</h1>
      <p className="bg-gray-200 py-5">{data.desc}</p>
      <h1 className="font-bold text-2xl">{data.title2}</h1>
      <p className="bg-gray-200 py-5">{data.desc2}</p>
    </div>
  );
};

export default About;
