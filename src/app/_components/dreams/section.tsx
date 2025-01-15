import Caption from "../commons/caption";
import CardDream from "./card";

const SectionDreams = () => {
  return (
    <div className="space-y-2">
      <Caption title="Meus Dreams" textTooltip="qualquer texto aqui" />
      <div>
        {/* <p>dream 1</p>
        <p>dream 2</p> */}
        <CardDream />
      </div>
    </div>
  );
};

export default SectionDreams;
