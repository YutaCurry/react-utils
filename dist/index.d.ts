/// <reference types="react" />
import { CheckChangeState, ChecksState, SelectChangeState, ValueElement } from './types';
/**
 * useStateのHTMLInputElement ver
 * @param initialValue
 * @returns
 */
export declare function useStateWithInputChange(initialValue?: string): [
    string,
    (e: React.ChangeEvent<ValueElement>) => void,
    React.Dispatch<React.SetStateAction<string>>
];
/**
 * useStateのHTMLSelectElement ver
 * @param initial
 * @returns
 */
export declare function useStateWithSelectChange(initial?: SelectChangeState): [
    SelectChangeState,
    (e: React.ChangeEvent<HTMLSelectElement>) => void,
    React.Dispatch<React.SetStateAction<SelectChangeState>>
];
/**
 * useStateのCheckBox ver
 * @param initial
 * @returns
 */
export declare function useStateWithCheckChange(initial?: CheckChangeState): [CheckChangeState, (e: React.ChangeEvent<HTMLInputElement>) => void];
/**
 * useStateの複数CheckBox ver
 */
export declare function useStateWithInputChecks(): [
    ChecksState,
    (e: React.ChangeEvent<HTMLInputElement>) => void,
    React.Dispatch<React.SetStateAction<ChecksState>>
];
export declare function useStateWithErrorMessageField(initMsg?: string): [string, boolean, (msg: string, isError?: boolean) => void];
//# sourceMappingURL=index.d.ts.map