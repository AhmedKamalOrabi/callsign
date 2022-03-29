import { CSSProperties } from 'react';

type BaseProps = {
  'data-testId'?: string;
};

type TagProps = {
  id?: string;
  className?: string;
  style?: CSSProperties;
};

type AccessibilityProps = {
  'aria-label'?: string;
  'aria-controls'?: string;
  role?: string;
};

export { BaseProps, TagProps, AccessibilityProps };
