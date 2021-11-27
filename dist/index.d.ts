import * as constants from './lib/constants';
import * as format from './lib/format';
import * as slack from './lib/slack';
declare const _default: {
    clean: <T extends Record<string, unknown>>(o: T) => T;
    constants: typeof constants;
    countup: (arr: (string | number)[]) => Map<string | number, number>;
    format: typeof format;
    getEnv: (key: string, defaultValue?: string, required?: boolean, requiredCallback?: () => never) => string;
    getOne: (v: string | string[]) => string;
    invert: <T_1 extends PropertyKey>(obj: Record<string, T_1>) => Record<string, string>;
    makeMap: <T_2>(keys: string[], defaultValue?: T_2) => Map<string, T_2>;
    makeObj: <T_3>(keys: string[], defaultValue?: T_3) => {
        [k: string]: T_3;
    };
    noop: (..._args: unknown[]) => void;
    slack: typeof slack;
};
export default _default;
