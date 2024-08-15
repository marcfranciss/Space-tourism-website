import PageHeader from "../../Components/PageHeader/PageHeader";
import Selectors from "../../Components/Selectors/Selectors";
import Topic from "../../Components/Topic/Topic";
import {
  fetchAPIbyCategory,
  fetchLocalbyCategory,
} from "../../Components/utils";
import "./destination.scss";
import { useEffect, useState } from "react";

interface DestinationData {
  name: string;
  images: { png: string };
  description: string;
  distance: string;
  travel: string;
}
const Destination = () => {
  const [componentData, setComponentData] = useState<DestinationData[]>([]);
  const [display, setDisplay] = useState<number>(0);
  /* Will set components data to fetch data*/
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const data: DestinationData[] = await fetchAPIbyCategory(
    //       "destinations"
    //     );
    //     setComponentData(data);
    //   } catch (error) {
    //     console.error("Please check for error in fetching data.");
    //   }
    // };
    // fetchData();

    /* NOTE: Local API connetion for now, still can't find solution for Backend */
    const getData = async () => {
      try {
        const data: DestinationData[] = await fetchLocalbyCategory(
          "destinations"
        );
        setComponentData(data);
      } catch (error) {
        console.error("Please check for error in fetching data.");
      }
    };
    getData();
  }, []);

  return (
    <main id='destinationPage'>
      <section className='inner-container'>
        <PageHeader title='Pick your destination' pageNum='01' />
        {componentData.map(
          (destinations: any, indexNum: number) =>
            display == indexNum && (
              <article key={destinations.name} className='content-container'>
                <div className='image-container'>
                  <img
                    loading='lazy'
                    className='planets-image'
                    src={destinations.images.webp}
                    alt={destinations.name}
                  />
                </div>
                <div className='details-container'>
                  <Selectors
                    selectorType={"texts"}
                    selectorNames={componentData}
                    selectorCount={componentData.length}
                    selectorFn={setDisplay}
                    currActive={display}
                  />
                  <Topic
                    title={destinations.name}
                    description={destinations.description}
                  />
                  <hr />
                  <div className='misc-container'>
                    <dl className='distance-details'>
                      <dt>Ave. Distance</dt>
                      <dd>{destinations.distance}</dd>
                    </dl>
                    <dl className='time-details'>
                      <dt>Est. Travel Time</dt>
                      <dd>{destinations.travel}</dd>
                    </dl>
                  </div>
                </div>
              </article>
            )
        )}
      </section>
    </main>
  );
};

export default Destination;
