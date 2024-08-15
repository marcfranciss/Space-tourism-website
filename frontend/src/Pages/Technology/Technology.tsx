import { useEffect, useState } from "react";
import { fetchAPIbyCategory } from "../../Components/utils";
import PageHeader from "../../Components/PageHeader/PageHeader";
import Selectors from "../../Components/Selectors/Selectors";
import Topic from "../../Components/Topic/Topic";
import "./technology.scss";

interface TechnologyData {
  name: string;
  images: { orientaion?: string };
  description: string;
}

const Technology = () => {
  const [componentData, setComponentData] = useState<TechnologyData[]>([]);
  const [display, setDisplay] = useState<number>(0);
  const [pageWidth, setPageWidth] = useState<number>(window.innerWidth);

  /* Will set components data to fetch data*/
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: TechnologyData[] = await fetchAPIbyCategory("technology");
        setComponentData(data);
      } catch (error) {
        console.error("Please check for error in fetching data.");
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleWidthChange = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", handleWidthChange);
    return () => window.addEventListener("resize", handleWidthChange);
  });
  return (
    <main id='technologyPage'>
      <section className='inner-container'>
        <PageHeader title='Space Launch 101' pageNum='03' />
        {componentData.map(
          (tech: any, indexNum: number) =>
            display == indexNum && (
              <article key={tech.name} className='content-container'>
                <div className='details-container'>
                  <Selectors
                    selectorType={"numbers"}
                    selectorCount={componentData.length}
                    selectorFn={setDisplay}
                    currActive={display}
                  />
                  <div className='inner-container'>
                    <h2 className='inner-header'>The Terminology…</h2>
                    <Topic title={tech.name} description={tech.description} />
                  </div>
                </div>
                <div className='image-container'>
                  <img
                    src={
                      pageWidth >= 1024
                        ? tech.images.portrait
                        : tech.images.landscape
                    }
                    loading='lazy'
                    alt={tech.name}
                    className='img-tech'
                  />
                </div>
              </article>
            )
        )}
      </section>
    </main>
  );
};

export default Technology;
