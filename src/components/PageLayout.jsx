import PropTypes from 'prop-types';

export default function PageLayout({ children }) {
  return <div className="page-layout">{children}</div>;
}

PageLayout.propTypes = {
  children: PropTypes.array,
};
