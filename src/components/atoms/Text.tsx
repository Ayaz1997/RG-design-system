import React from 'react';
import { ChakraText, ChakraTextProps } from '../chakra';

export interface TextProps extends ChakraTextProps {
  /**
   * Text content
   */
  content: string;
  /**
   * What text color to use
   */
  color?: string;
  /**
   * Truncate the text and end with ellipsis on limit
   */
  truncated?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg' | '2xl' | '4xl' | '6xl';
  /**
   * variant to determine styles from themes/components/Text
   */
  variant: 'textOne' | 'textTwo';
}

/**
 * Primary UI component for text
 */
export const Text: React.FC<TextProps> = ({
  size,
  color,
  content,
  truncated,
  variant = 'textOne',
  ...props
}) => (
  <ChakraText
    bg='transparent'
    fontSize={size}
    isTruncated={truncated}
    color={color}
    variant={variant}
    {...props}
  >
    {content}
  </ChakraText>
);
