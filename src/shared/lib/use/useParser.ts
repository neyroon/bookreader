import { ParsedXML, Parser } from '../parser';
import { useMemo } from 'react';

export const useParser = (unparsedText: string): ParsedXML[] => {
  return useMemo(() => {
    const parser = new Parser();
    return parser.parseFromString(unparsedText);
  }, [unparsedText]);
};
