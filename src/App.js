import React from 'react';
import {ScrollingProvider, Section} from 'react-scroll-section';
import Menu from './Menu';

const App = () => (
  <ScrollingProvider>
    <Menu />
    <Section id="home">Home section</Section>
    <Section id="about">About section</Section>
    <Section id="skills">About section</Section>
    <Section id="work">About section</Section>
    <Section id="contact">About section</Section>
  </ScrollingProvider>
);

export default App;

// @styled-icons/heroicons-outline/Home