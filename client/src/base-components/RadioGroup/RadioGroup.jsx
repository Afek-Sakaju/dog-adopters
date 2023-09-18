import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from './RadioGroup.styled';

export default function RadioButtonsGroup({
    color,
    defaultValue,
    disabled,
    error,
    label,
    labelPlacement,
    onRadioSelect,
    options,
    row,
    size,
}) {
    const [selectedValue, setSelectedValue] = useState(defaultValue);

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        onRadioSelect?.(event.target.value);
    };

    return (
        <FormControl error={error} disabled={disabled}>
            <FormLabel>{label}</FormLabel>
            <RadioGroup
                onChange={handleRadioChange}
                row={row}
                value={selectedValue}
            >
                {options?.map(
                    /* Although RadioGroup has a color/size prop, added here a color/size option to improve 
										the flexibility in adjusting the style of individual radio button within the group. */
                    ({
                        label: radioLabel,
                        value,
                        color: radioColor,
                        size: radioSize,
                    }) => (
                        <FormControlLabel
                            key={radioLabel}
                            control={
                                <Radio
                                    size={radioSize || size}
                                    color={
                                        error ? 'error' : radioColor || color
                                    }
                                />
                            }
                            label={radioLabel}
                            labelPlacement={labelPlacement}
                            value={value}
                        />
                    )
                )}
            </RadioGroup>
        </FormControl>
    );
}

RadioButtonsGroup.propTypes = {
    color: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    labelPlacement: PropTypes.oneOf(['top', 'start', 'bottom', 'end']),
    onRadioSelect: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.string),
    row: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

RadioButtonsGroup.defaultProps = {
    color: undefined,
    defaultValue: undefined,
    disabled: undefined,
    error: undefined,
    label: undefined,
    labelPlacement: undefined,
    onRadioSelect: undefined,
    options: undefined,
    row: undefined,
    size: undefined,
};
