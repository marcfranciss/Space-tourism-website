import "./topic.scss";

interface TopicProps {
  title: string;
  description: string;
}

const Topic = ({ title, description }: TopicProps) => {
  return (
    <dl id='pageTopic'>
      <dt>{title}</dt>
      <dd>{description}</dd>
    </dl>
  );
};

export default Topic;
