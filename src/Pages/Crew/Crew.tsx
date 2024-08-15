import { useEffect, useState } from "react";
import {
  fetchAPIbyCategory,
  fetchLocalbyCategory,
} from "../../Components/utils";
import "./crew.scss";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Topic from "../../Components/Topic/Topic";
import Selectors from "../../Components/Selectors/Selectors";

interface CrewData {
  name: string;
  images: { png: string };
  role: string;
  bio: string;
}

const Crew = () => {
  const [componentData, setComponentData] = useState<CrewData[]>([]);
  const [display, setDisplay] = useState<number>(0);

  /* Will set components data to fetch data*/
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const data: CrewData[] = await fetchAPIbyCategory("crew");
    //     setComponentData(data);
    //   } catch (error) {
    //     console.error("Please check for error in fetching data.");
    //   }
    // };
    // fetchData();

    /* NOTE: Local API connetion for now, still can't find solution for Backend */
    const getData = async () => {
      try {
        const data: CrewData[] = await fetchLocalbyCategory("crew");
        setComponentData(data);
      } catch (error) {
        console.error("Please check for error in fetching data.");
      }
    };
    getData();
  }, []);
  return (
    <main id='crewPage'>
      <section className='inner-container'>
        <PageHeader title='Meet your crew' pageNum='02' />
        {componentData.map(
          (crews: any, indexNum: number) =>
            display == indexNum && (
              <article key={crews.name} className='content-container'>
                <div id='crews-name' className='details-container'>
                  <h2 className='inner-header'>{crews.role}</h2>
                  <Topic title={crews.name} description={crews.bio} />
                  <Selectors
                    selectorType={"bullets"}
                    selectorCount={componentData.length}
                    selectorFn={setDisplay}
                    currActive={display}
                  />
                </div>
                <div className='image-container'>
                  <img
                    className='contain'
                    loading='lazy'
                    src={crews.images.webp}
                    alt={crews.name}
                  />
                </div>
              </article>
            )
        )}
      </section>
    </main>
  );
};

export default Crew;
