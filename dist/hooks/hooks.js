var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useState } from 'react';
/**
 * useStateのHTMLInputElement ver
 * @param initialValue
 * @returns
 */
export function useStateWithInputChange(initialValue) {
    if (initialValue === void 0) { initialValue = ''; }
    var _a = useState(initialValue), what = _a[0], setWhat = _a[1];
    function onChangeEvent(event) {
        setWhat(event.target.value);
    }
    return [what, onChangeEvent, setWhat];
}
/**
 * useStateのHTMLSelectElement ver
 * @param initial
 * @returns
 */
export function useStateWithSelectChange(initial) {
    if (initial === void 0) { initial = {
        value: '',
        text: '',
    }; }
    var _a = useState(initial), what = _a[0], setWhat = _a[1];
    function onChangeEvent(event) {
        setWhat({
            value: event.target.value,
            text: event.target.selectedOptions[0].text,
        });
    }
    return [what, onChangeEvent, setWhat];
}
/**
 * useStateのCheckBox ver
 * @param initial
 * @returns
 */
export function useStateWithCheckChange(initial) {
    if (initial === void 0) { initial = {
        id: '',
        name: '',
        value: '',
        checked: false,
    }; }
    var _a = useState(initial), whatChangeState = _a[0], setWhatChangeState = _a[1];
    function onChangeEvent(event) {
        setWhatChangeState({
            id: event.target.id,
            name: event.target.name,
            value: event.target.value,
            checked: event.target.checked,
        });
    }
    return [whatChangeState, onChangeEvent];
}
/**
 * useStateの複数CheckBox ver
 */
export function useStateWithInputChecks() {
    var _a = useState({}), checks = _a[0], setChecks = _a[1];
    console.log('useStateWithInputChecks', checks);
    function onChangeEvent(event) {
        var _a;
        setChecks(__assign(__assign({}, checks), (_a = {}, _a[event.target.id] = {
            id: event.target.id,
            name: event.target.name,
            value: event.target.value,
            checked: event.target.checked,
        }, _a)));
    }
    return [checks, onChangeEvent, setChecks];
}
export function useStateWithErrorMessageField(initMsg) {
    if (initMsg === void 0) { initMsg = ''; }
    var _a = useState(initMsg), msg = _a[0], setMsg = _a[1];
    var _b = useState(true), isError = _b[0], setError = _b[1];
    function onChange(msg, isError) {
        if (isError === void 0) { isError = true; }
        setMsg(msg);
        setError(isError);
    }
    return [msg, isError, onChange];
}
//# sourceMappingURL=hooks.js.map