import {
  AdvertisementDiv,
  AdvertisementImg,
} from "../Styles/Advertisement.style";
import advertisementimg from "../assets/cakebackground.jpg";
import decorationAds from "../assets/ad.jpg"
import speakerAds from "../assets/headphoneAds.jpg"

export default function Advertisements(props: any) {
  return (
    <>
      <AdvertisementDiv>
        {
          props?.type == "cake" ?
            <>
              <AdvertisementImg src={advertisementimg}></AdvertisementImg>
              <AdvertisementImg src={advertisementimg}></AdvertisementImg>
              <AdvertisementImg src={advertisementimg}></AdvertisementImg>
              <AdvertisementImg src={advertisementimg}></AdvertisementImg>
            </>

            :
            props.type == "speakers" ?
              <>
                <AdvertisementImg src={speakerAds}></AdvertisementImg>
                <AdvertisementImg src={speakerAds}></AdvertisementImg>
                <AdvertisementImg src={speakerAds}></AdvertisementImg>
                <AdvertisementImg src={speakerAds}></AdvertisementImg>
              </>
              :
              <>
                <AdvertisementImg src={decorationAds}></AdvertisementImg>
                <AdvertisementImg src={decorationAds}></AdvertisementImg>
                <AdvertisementImg src={decorationAds}></AdvertisementImg>
              </>
        }

      </AdvertisementDiv>
    </>
  );
}
