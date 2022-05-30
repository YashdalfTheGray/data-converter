import './Title.scss';

export type HeadingProps = {
  children: string;
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export default (props: HeadingProps) => {
  const { children, type } = props;

  const className = `heading-${type}`;

  return <div className={className}>{children}</div>;
};
