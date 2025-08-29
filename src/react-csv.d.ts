declare module 'react-csv' {
  import * as React from 'react';

  export interface LinkProps {
    data: string | any[];
    headers?: any[];
    enclosingCharacter?: string;
    separator?: string;
    filename?: string;
    uFEFF?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void | boolean;
    asyncOnClick?: boolean;
    target?: string;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  export class CSVLink extends React.Component<LinkProps> {}
  export class CSVDownload extends React.Component<LinkProps> {}
}