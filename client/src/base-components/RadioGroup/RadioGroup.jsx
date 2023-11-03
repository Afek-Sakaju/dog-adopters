import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { MUI_SIZES } from '@utils';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    MuiRadioGroup,
} from './RadioGroup.styled';

export default function RadioGroup({
    color,
    value,
    disabled,
    error,
    label,
    labelPlacement,
    onRadioSelect,
    options,
    row,
    size,
}) {
    const [selectedValue, setSelectedValue] = useState(value);

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
        onRadioSelect?.(event.target.value);
    };

    useEffect(() => {
        setSelectedValue(value);
    }, [value]);

    return (
        <FormControl error={error} disabled={disabled}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                onChange={handleRadioChange}
                row={row}
                value={selectedValue}
            >
                {options?.map(
                    /* Although RadioGroup has a color/size prop, added here a color/size option to improve 
										the flexibility in adjusting the style of individual radio button within the group. */
                    ({
                        label: radioLabel,
                        value: radioValue,
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
                            value={radioValue}
                        />
                    )
                )}
            </MuiRadioGroup>
        </FormControl>
    );
}

RadioGroup.propTypes = {
    color: PropTypes.string,
    value: PropTypes.PropTypes.shape({
        label: PropTypes.string,
        // eslint-disable-next-line react/forbid-prop-types
        value: PropTypes.any,
        color: PropTypes.string,
        size: PropTypes.oneOf(MUI_SIZES),
    }),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    label: PropTypes.string,
    labelPlacement: PropTypes.oneOf(['top', 'start', 'bottom', 'end']),
    onRadioSelect: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            // eslint-disable-next-line react/forbid-prop-types
            value: PropTypes.any,
            color: PropTypes.string,
            size: PropTypes.oneOf(MUI_SIZES),
        })
    ),
    row: PropTypes.bool,
    size: PropTypes.oneOf(MUI_SIZES),
};

RadioGroup.defaultProps = {
    color: undefined,
    value: '',
    disabled: undefined,
    error: undefined,
    label: undefined,
    labelPlacement: undefined,
    onRadioSelect: undefined,
    options: undefined,
    row: undefined,
    size: undefined,
};
