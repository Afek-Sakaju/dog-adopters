import React from 'react';
import PropTypes from 'prop-types';

import { MUI_VARIANTS } from '@utils';
import { MuiAutocomplete } from './Autocomplete.styled';
import TextField from '../TextField/TextField';

export default function Autocomplete({
    autoComplete,
    autoHighlight,
    autoSelect,
    blurOnSelect,
    children,
    clearOnEscape,
    color,
    disableClearable,
    disableCloseOnSelect,
    disabled,
    disableListWrap,
    disablePortal,
    error,
    focused,
    freeSolo,
    fullWidth,
    getOptionLabel,
    includeInputInList,
    label,
    limitTags,
    multiple,
    name,
    onChange,
    openOnFocus,
    options,
    placeholder,
    readOnly,
    selectOnFocus,
    helperText,
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
            onChange={onChange}
            openOnFocus={openOnFocus}
            options={options}
            readOnly={readOnly}
            renderInput={(params) => (
                <TextField
                    name={name}
                    focused={focused}
                    fullWidth
                    helperText={helperText}
                    label={label}
                    placeholder={placeholder}
                    variant={variant}
                    error={error}
                    color={color}
                    {...params}
                />
            )}
            selectOnFocus={selectOnFocus}
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
    color: PropTypes.string,
    disableClearable: PropTypes.bool,
    disableCloseOnSelect: PropTypes.bool,
    disabled: PropTypes.bool,
    disableListWrap: PropTypes.bool,
    disablePortal: PropTypes.bool,
    error: PropTypes.bool,
    focused: PropTypes.bool,
    freeSolo: PropTypes.bool,
    fullWidth: PropTypes.bool,
    getOptionLabel: PropTypes.func,
    includeInputInList: PropTypes.bool,
    label: PropTypes.string,
    limitTags: PropTypes.number,
    multiple: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    openOnFocus: PropTypes.bool,
    // Options can be array of objects or types so its not predictable
    // eslint-disable-next-line react/forbid-prop-types
    options: PropTypes.array,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    selectOnFocus: PropTypes.bool,
    helperText: PropTypes.string,
    variant: PropTypes.oneOf(MUI_VARIANTS.INPUT),
};

Autocomplete.defaultProps = {
    autoComplete: undefined,
    autoHighlight: undefined,
    autoSelect: undefined,
    blurOnSelect: undefined,
    clearOnEscape: undefined,
    color: undefined,
    disableClearable: undefined,
    disableCloseOnSelect: undefined,
    disabled: undefined,
    disableListWrap: undefined,
    disablePortal: undefined,
    error: undefined,
    focused: undefined,
    freeSolo: undefined,
    fullWidth: undefined,
    getOptionLabel: (option) => option,
    includeInputInList: undefined,
    label: '',
    limitTags: undefined,
    multiple: undefined,
    name: undefined,
    onChange: undefined,
    openOnFocus: undefined,
    options: [],
    placeholder: undefined,
    readOnly: undefined,
    selectOnFocus: undefined,
    helperText: undefined,
    variant: MUI_VARIANTS.INPUT[0],
};
