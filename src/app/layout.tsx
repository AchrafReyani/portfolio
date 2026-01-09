import {ReactNode} from 'react';
import '../styles/globals.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({children}: Props) {
  return children;
}
