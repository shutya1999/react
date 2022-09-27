import React, { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/slices/filterSlice";

export const Search = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const inputRef = useRef();
    const clearInput = () => {
        inputRef.current.focus();
        dispatch(setSearchValue(""));
        setValue("");
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 300),
        []
    );

    const onChangeInput = (e) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    return (
        <div className={styles.root}>
            <input
                ref={inputRef}
                value={value}
                onInput={onChangeInput}
                type="text"
                placeholder="Пошук"
            />
            {value && <button onClick={clearInput}></button>}
        </div>
    );
};
