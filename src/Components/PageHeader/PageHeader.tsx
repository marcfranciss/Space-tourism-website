import "./pageHeader.scss";

interface Props {
  title: string;
  pageNum: string;
}

const PageHeader = ({ title, pageNum }: Props) => {
  return (
    <div id='pageHeader'>
      <h1>
        <strong>{pageNum}</strong>
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
