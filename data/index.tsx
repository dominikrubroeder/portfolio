import ToolsAndTechnologies from '../components/ToolsAndTechnologies';

export enum LocalStorageKeys {
  Theme = 'DR_THEME'
}

export enum Theme {
  Dark = 'dark',
  Light = 'light',
  Auto = 'auto'
}

export const defaultPageSectionData = [
  { title: 'Section 1', content: <p>Section 1</p> },
  { title: 'Section 2', content: <p>Section 2</p> },
  { title: 'Section 3', content: <p>Section 3</p> }
];

export const homePageSectionData = [
  { title: 'Tools & Technologies', content: <ToolsAndTechnologies /> },
  { title: 'Projects', content: <p>Projects</p> },
  { title: 'Socials', content: <p>Socials</p> }
];

export const themeSwitchData = [
  { option: 'Dark', value: 'dark' },
  { option: 'Light', value: 'light' },
  { option: 'Auto', value: 'auto' }
];
