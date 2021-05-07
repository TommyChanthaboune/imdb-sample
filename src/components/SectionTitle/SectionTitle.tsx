import React, { FC } from 'react';
import PropTypes from 'prop-types';

interface ISectionTitle {
  section: string;
  title: string;
  highlight?: boolean;
}

const SectionTitle: FC<ISectionTitle> = ({ section, title, highlight }) => (
  <div className={`section-title ${highlight && 'section-title--highlight'}`}>
    <h2>
      <span className="section-title__section">
        {section}
        {highlight && <>:</>}
      </span>
      <span className="section-title__title">{title}</span>
    </h2>
  </div>
);

SectionTitle.propTypes = {
  section: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  highlight: PropTypes.bool
};

SectionTitle.defaultProps = {
  highlight: false
};

export default SectionTitle;
