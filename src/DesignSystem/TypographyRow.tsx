/**
 * @author Vighnesh Raut <rvighnes@amazon.com>
 */

import React from 'react';
import { Typography, useTheme } from '@material-ui/core';
import { Variant } from '@material-ui/core/styles/createTypography';

interface TypographyRowProps {
  variant: string;
}

export const TypographyRow: React.FC<TypographyRowProps> = (props) => {
  const theme = useTheme();
  const variant = props.variant.toLowerCase() as Variant;

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          flexWrap: 'nowrap',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <p
          style={{
            minWidth: 200,
            margin: 0,
            fontWeight: 'bold',
            lineHeight: '1em',
          }}
        >
          {props.variant}
          &nbsp; (
          {theme.typography[variant].fontSize}
          )
        </p>
        <Typography
          variant={variant}
          style={{
            whiteSpace: 'nowrap',
            lineHeight: '1em',
          }}
        >
          The quick brown fox jumps over the lazy dog.
        </Typography>
      </div>
      <hr
        style={{
          width: '100%',
          zIndex: 1,
        }}
      />
      <div
        style={{
          inset: 0,
          position: 'absolute',
          zIndex: 2,
          boxShadow: `
              inset -15px 0 10px -10px rgba(255, 255, 255, 1),
              inset -60px 0 10px -10px rgba(255, 255, 255, 0.5)
            `,
        }}
      />
    </div>
  );
};

export default TypographyRow;
