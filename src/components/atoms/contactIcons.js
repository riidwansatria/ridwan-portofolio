import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../utilities/social-media';

const contactIcons = () => (
  <ul className="flex space-x-4 mr-0 ml-auto">
    {data.map((s) => (
      <li key={s.label}>
        <a alt={s.label} href={s.link} className="text-gray-800 hover:text-gray-600">
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default contactIcons;