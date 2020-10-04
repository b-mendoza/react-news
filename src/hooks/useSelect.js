import React, { useState } from 'react';

export const useSelect = (initialState, listOfOptions = []) => {
    const [state, setState] = useState(initialState);

    const handleChange = ({ target }) => setState(target.value);

    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={handleChange}
        >
            {listOfOptions.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );

    return [state, SelectNews];
};
