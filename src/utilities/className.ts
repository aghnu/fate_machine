import { type ClassName } from '@/types/className';

export function getClassName(...args: ClassName[]) {
  const classNameArray: string[] = [];

  args.forEach((className) => {
    if (className === undefined || className === null || className === '')
      return;

    // string
    if (typeof className === 'string') {
      classNameArray.push(className);
      return;
    }

    // object
    Object.keys(className).forEach((key) => {
      if (className[key]) {
        classNameArray.push(key);
      }
    });
  });

  return classNameArray.join(' ');
}
