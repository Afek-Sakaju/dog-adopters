import { FILE_IMAGE_TYPES } from './constants/data.constants';
import { noDigitsRegExp } from './constants/regex.constants';

export const assertArrayOfNames = (arr) => {
    const isValidArray = arr.every((name) => {
        const isNameValid = noDigitsRegExp.test(name);
        return isNameValid;
    });

    return isValidArray;
};

export const getUrlFromParams = ({ baseUrl, id, path } = {}) => {
    if (!baseUrl) return;

    let url;
    switch (true) {
        case !!path && !!id:
            url = `${baseUrl}/${path}/${id}`;
            break;
        case !!path:
            url = `${baseUrl}/${path}`;
            break;
        case !!id:
            url = `${baseUrl}/${id}`;
            break;
        default:
            url = baseUrl;
    }

    return url;
};

export function getCapitalLetters(str) {
    const chars =
        str
            ?.split(' ')
            .filter((v) => !!v)
            .map((word) => word[0].toUpperCase()) ?? undefined;

    if (!chars) return undefined;

    const [firstChar, secondChar] = [chars?.[0], chars?.slice(-1)];
    return chars.length > 1 ? [firstChar, secondChar] : [firstChar];
}

export const assertFileImageType = (value) => {
    const fileType = value?.replace('data:', '')?.split(';')[0];

    const isFileImageType = FILE_IMAGE_TYPES?.includes(fileType?.toLowerCase());
    return isFileImageType;
};

export const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
};

export const getDogFullSummaryText = (name, age) => {
    const dogNameText = `I am ${name}`;
    const dogFullSummaryText = `I am ${name} ${`(${age})`}`;

    return age === undefined ? dogNameText : dogFullSummaryText;
};

export const getDogRaceText = (race) => `My race is ${race}`;
