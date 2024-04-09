import {
    FILE_IMAGE_TYPES,
    MAX_DOG_RACE_TEXT_LENGTH,
} from './constants/data.constants';
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

export const getDogRaceText = (race) => {
    const isRaceTextTooLong = race.length > MAX_DOG_RACE_TEXT_LENGTH;
    const shortenedDogRace = isRaceTextTooLong
        ? `${race.slice(0, MAX_DOG_RACE_TEXT_LENGTH - 3)}...`
        : race;

    const dogRaceText = shortenedDogRace ? `| ${shortenedDogRace}` : '';
    return dogRaceText;
};

export const getDogAgeText = (age) => {
    const isSmallerThenOneYear = age < 1;
    age = isSmallerThenOneYear ? '0-1' : age;

    const dogAgeText = `Age: ${age}`;
    return dogAgeText;
};
