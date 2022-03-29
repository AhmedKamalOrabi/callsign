import * as React from 'react';
import { mount } from '@cypress/react';
import { ExpandContextArgs } from '../../Provider/Accordion/ExpandContext';
import { Accordion } from './Accordion';

const ExpandContext = React.createContext<ExpandContextArgs | null>(null);

it('should render Accordion', () => {
  const value: ExpandContextArgs = { isExpand: true, toggleExpand: () => {} };
  mount(
    <Accordion>
      <ExpandContext.Provider value={value}>test</ExpandContext.Provider>
    </Accordion>,
  );
  cy.findByText('test').should('be.visible');
});
