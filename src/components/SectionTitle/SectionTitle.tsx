import React, { FC } from 'react';

interface ISectionTitle {
  section: string;
  title: string;
  inline?: boolean;
}

export const SectionTitle: FC<ISectionTitle> = ({ section, title, inline }) => (
  <div className={`section-title ${inline && 'section-title--inline'}`}>
    <h2>
      <span className="section-title__section">
        {section}
        {inline && <>:</>}
      </span>
      <span className="section-title__title">{title}</span>
    </h2>
  </div>
);
