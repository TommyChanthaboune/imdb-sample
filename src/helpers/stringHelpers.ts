export const parseUrlParam = (param: string): string =>
  param
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ')
    .replace('-', ' ');

export const parseOptions = (option: string): string =>
  option.replace(/([A-Z])/g, ' $1').replace(/^./, (text) => text.toUpperCase());
