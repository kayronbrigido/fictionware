import { InfoCardType } from "../../models/interfaces";
import "./InfoCardStyles.css"
const InfoCard = (props: any) => {
  const informations: InfoCardType[] = props.data
  return (
    <>
      {informations.map(({ image, imageDescription }) => {
        return (
          <div className="infoCard">
            <p>{image}</p>
            <p>{imageDescription}</p>
          </div>
        )
      })}
    </>
  )
}

export default InfoCard;