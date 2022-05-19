import { Container } from "./styles.js";
import PhotographerCard from "../PhotographerCard/index.jsx";
import { usePhotographerList } from "../../providers/PhotographerList/index";
import { useEffect } from "react";

const PhotographerList = ({ eventData }) => {
  const { photographerList, getPhotographers } = usePhotographerList();

  useEffect(() => {
    if (!eventData) {
      return;
    }

    const { type, states } = eventData;

    getPhotographers({ type, states });
  }, [eventData]);

  return (
    <Container>
      {photographerList.length === 0 && (
        <span>Não há fotógrafos compatíveis perto de você.</span>
      )}
      {photographerList.length > 0 &&
        photographerList.map((photographer, index) => {
          return (
            <PhotographerCard
              key={index}
              info={photographer}
              event={eventData}
            />
          );
        })}
    </Container>
  );
};

export default PhotographerList;
