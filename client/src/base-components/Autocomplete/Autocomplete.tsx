import type { ChangeEvent, FC, ReactNode } from 'react';
import React from 'react';

import type { MuiColor, MuiInputVariant } from '@/types';
import TextField from '../TextField/TextField';
import { MuiAutocomplete } from './Autocomplete.styled';

interface AutocompleteProps {
    autoComplete?: boolean;
    autoHighlight?: boolean;
    autoSelect?: boolean;
    blurOnSelect?: boolean;
    clearOnEscape?: boolean;
    color?: MuiColor;
    disableClearable?: boolean;
    disableCloseOnSelect?: boolean;
    disabled?: boolean;
    disableListWrap?: boolean;
    disablePortal?: boolean;
    error?: boolean;
    focused?: boolean;
    freeSolo?: boolean;
    fullWidth?: boolean;
    getOptionLabel?: (option: unknown) => string;
    includeInputInList?: boolean;
    label?: string;
    limitTags?: number;
    multiple?: boolean;
    name?: string;
    onChange?: (event: ChangeEvent<unknown>, value: unknown) => void;
    openOnFocus?: boolean;
    options?: string[];
    placeholder?: string;
    readOnly?: boolean;
    selectOnFocus?: boolean;
    helperText?: string;
    variant?: MuiInputVariant;
    value?: unknown;
    [key: string]: unknown;
}

const Autocomplete: FC<AutocompleteProps> = (props): ReactNode => {
    const {
        autoComplete = undefined,
        autoHighlight,
        autoSelect,
        blurOnSelect,
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
        getOptionLabel = (option: string) => option,
        includeInputInList,
        label = '',
        limitTags,
        multiple,
        name,
        onChange,
        openOnFocus,
        options = [],
        placeholder,
        readOnly,
        selectOnFocus,
        helperText,
        variant = 'outlined',
        value,
        ...rest
    } = props;
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
            value={value}
            {...rest}
        />
    );
};

export default Autocomplete;
