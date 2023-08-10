import React from 'react';
import PropTypes from 'prop-types';

import { MuiAutocomplete } from './Autocomplete.styled';
import TextField from '../TextField/TextField';

export default function Autocomplete({
    autoComplete,
    autoHighlight,
    autoSelect,
    blurOnSelect,
    children,
    clearOnEscape,
    disableClearable,
    disableCloseOnSelect,
    disabled,
    disableListWrap,
    disablePortal,
    error,
    freeSolo,
    fullWidth,
    getOptionLabel,
    includeInputInList,
    label,
    limitTags,
    multiple,
    name,
    openOnFocus,
    options,
    placeholder,
    readOnly,
    selectOnFocus,
    // For some reason if it wasn't lowercase, mui throws error
    textfieldhelpertext,
    variant,
    ...props
}) {
    return (
        <MuiAutocomplete
            autoComplete={autoComplete}
            autoHighlight={autoHighlight}
            autoSelect={autoSelect}
            blurOnSelect={blurOnSelect}
            clearOnEscape={clearOnEscape}
            disableClearable={disableClearable}
            disableCloseOnSelect={disableCloseOnSelect}
            disabled={disabled}
            disableListWrap={disableListWrap}
            disablePortal={disablePortal}
            fullWidth={fullWidth}
            freeSolo={freeSolo}
            getOptionLabel={getOptionLabel}
            includeInputInList={includeInputInList}
            limitTags={limitTags}
            multiple={multiple}
            openOnFocus={openOnFocus}
            options={options}
            readOnly={readOnly}
            renderInput={(params) => (
                <TextField
                    name={name}
                    fullWidth
                    helperText={textfieldhelpertext}
                    label={label}
                    placeholder={placeholder}
                    variant={variant}
                    error={error}
                    {...params}
                />
            )}
            selectOnFocus={selectOnFocus}
            textfieldhelpertext={textfieldhelpertext}
            {...props}
        >
            {label}
            {children}
        </MuiAutocomplete>
    );
}

Autocomplete.propTypes = {
    autoComplete: PropTypes.bool,
    autoHighlight: PropTypes.bool,
    autoSelect: PropTypes.bool,
    blurOnSelect: PropTypes.bool,
    clearOnEscape: PropTypes.bool,
    disableClearable: PropTypes.bool,
    disableCloseOnSelect: PropTypes.bool,
    disabled: PropTypes.bool,
    disableListWrap: PropTypes.bool,
    disablePortal: PropTypes.bool,
    freeSolo: PropTypes.bool,
    fullWidth: PropTypes.bool,
    error: PropTypes.bool,
    getOptionLabel: PropTypes.func,
    includeInputInList: PropTypes.bool,
    label: PropTypes.string,
    limitTags: PropTypes.number,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    openOnFocus: PropTypes.bool,
    // Options can be array of objects/other types so its not predictable
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.array,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    selectOnFocus: PropTypes.bool,
    textfieldhelpertext: PropTypes.string,
    variant: PropTypes.oneOf(['filled', 'standard', 'outlined']),
};

Autocomplete.defaultProps = {
    autoComplete: undefined,
    autoHighlight: undefined,
    autoSelect: undefined,
    blurOnSelect: undefined,
    clearOnEscape: undefined,
    disableClearable: undefined,
    disableCloseOnSelect: undefined,
    disabled: undefined,
    disableListWrap: undefined,
    disablePortal: undefined,
    freeSolo: undefined,
    fullWidth: undefined,
    error: undefined,
    getOptionLabel: (option) => option,
    includeInputInList: undefined,
    label: '',
    limitTags: undefined,
    multiple: undefined,
    name: undefined,
    openOnFocus: undefined,
    options: [],
    placeholder: undefined,
    readOnly: undefined,
    selectOnFocus: undefined,
    textfieldhelpertext: undefined,
    variant: 'filled',
};
