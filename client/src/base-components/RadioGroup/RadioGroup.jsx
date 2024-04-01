import React from 'react';
import PropTypes from 'prop-types';

import { MUI_SIZES_LIST, MUI_PLACEMENTS } from '#utils';
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    HelperText,
    MuiRadioGroup,
    Radio,
} from './RadioGroup.styled';

export default function RadioGroup({
    color,
    disabled,
    error,
    helperText,
    label,
    labelPlacement,
    onChange,
    options,
    row,
    size,
    value,
}) {
    const onRadioChange = (event) => {
        onChange?.(event.target.value);
    };

    return (
        <FormControl error={error} disabled={disabled}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup onChange={onRadioChange} row={row} value={value}>
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
            <HelperText isError={error}>{helperText}</HelperText>
        </FormControl>
    );
}

RadioGroup.propTypes = {
    color: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    value: PropTypes.any,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    helperText: PropTypes.string,
    label: PropTypes.string,
    labelPlacement: PropTypes.oneOf(MUI_PLACEMENTS.RADIO_GROUP_LABEL.LIST),
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            // eslint-disable-next-line react/forbid-prop-types
            value: PropTypes.any,
            color: PropTypes.string,
            size: PropTypes.oneOf(MUI_SIZES_LIST),
        })
    ),
    row: PropTypes.bool,
    size: PropTypes.oneOf(MUI_SIZES_LIST),
};

RadioGroup.defaultProps = {
    color: undefined,
    value: '',
    disabled: undefined,
    error: undefined,
    helperText: undefined,
    label: undefined,
    labelPlacement: undefined,
    onChange: undefined,
    options: undefined,
    row: undefined,
    size: undefined,
};
