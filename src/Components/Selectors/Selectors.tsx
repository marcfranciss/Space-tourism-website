import "./selectors.scss";

interface Props {
  selectorType: "texts" | "bullets" | "numbers";
  selectorCount: number;
  selectorNames?: any;
  selectorFn: (index: number, fn?: number) => void;
  currActive: number;
}

const Selectors = ({
  selectorType,
  selectorCount,
  selectorNames,
  selectorFn,
  currActive,
}: Props) => {
  const countArr = [...Array(selectorCount).keys()];

  return (
    <nav id='topicSelector'>
      {selectorType == "texts" && (
        <div className='text-selector'>
          {selectorNames.map((names: any, index: number) => {
            return (
              <h3
                key={names.name}
                className={`${currActive == index && "activeIndex"}`}
                onClick={() => selectorFn(index)}>
                {names.name}
              </h3>
            );
          })}
        </div>
      )}
      {selectorType == "bullets" && (
        <div className='bullets-selector'>
          {countArr.map((count: number, index: number) => {
            return (
              <div
                key={count}
                className={`bullets ${currActive == index && "activeIndex"}`}
                onClick={() => selectorFn(index)}></div>
            );
          })}
        </div>
      )}
      {selectorType == "numbers" && (
        <div className='numbers-selector'>
          {countArr.map((count: number, index: number) => {
            return (
              <div
                key={count}
                className={`numbers ${currActive == index && "activeIndex"}`}
                onClick={() => selectorFn(count)}>
                {index + 1}
                {/* <h3>{index + 1}</h3> */}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default Selectors;
