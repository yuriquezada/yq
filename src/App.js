import React from 'react';
import {ScrollingProvider, Section} from 'react-scroll-section';
import Menu from './Menu';

const App = () => (
  <ScrollingProvider>
    <Menu />
    <Section id={0}>Home section</Section>
    <Section id={1}>About section</Section>
    <Section id={2}>About section</Section>
    <Section id={3}>About section</Section>
    <Section id={4}>About section</Section>
  </ScrollingProvider>
);

export default App;

// @styled-icons/heroicons-outline/Home