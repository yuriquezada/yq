import React from 'react';
import {ScrollingProvider, Section} from 'react-scroll-section';
import Menu from './Menu';

const App = () => (
  <ScrollingProvider>
    <Menu />
    <Section id="home">Home section</Section>
    <Section id="about">About section</Section>
  </ScrollingProvider>
);

export default App;

// @styled-icons/heroicons-outline/Home