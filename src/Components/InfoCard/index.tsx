import { InfoCardType } from "../../models/interfaces";
import "./InfoCardStyles.tsx"
import { H2, Text } from "./InfoCardStyles"

const InfoCard = (props: any) => {
  const informations: InfoCardType[] = props.data
  return (
    <>
      {informations.map(({ image, imageDescription }) => {
        return (
          <div className="infoCard">
            <p>{image}</p>
            <H2>HEADER</H2>
            <Text>{imageDescription}</Text>
            <p>{imageDescription}</p>
          </div>
        )
      })}
    </>
  )
}

export default InfoCard;