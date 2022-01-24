import React from 'react';
import Link from 'next/link';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useTheme } from '../../../contexts/ThemeContext';
import { HeaderWrapper, Nav } from './styles';

export type Item = {
  label: string;
  path: string;
};

export type HeaderTemplateProps = {
  data: Item[];
};

const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ data }) => {
  const { ToggleTheme,theme } = useTheme();
  console.log(theme.title)
  return (
    <HeaderWrapper>
      <div className="brand">
        <h3>Example</h3>
      </div>
      <Nav>
        <ul>
          {data.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
          <li>
            <a className={`icon ${theme.title === "dark" && "sun"}`}role="button" aria-pressed="false" onClick={() => ToggleTheme()}>
              {theme.title === "dark" ? <BsFillSunFill/> : <BsFillMoonFill/>}
            </a>
          </li>
        </ul>
        {/* Outra forma de fazer */}
        {/* {data.map((link, index) => {
          return (
            <ul key={index}>
              <Link href={link.path}>
                {link.label}
              </Link>
            </ul>
          );
        })} */}
      </Nav>
    </HeaderWrapper>
  );
};

export default HeaderTemplate;
