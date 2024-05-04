import {
    FILE_IMAGE_TYPES,
    MAX_DOG_RACE_TEXT_LENGTH,
} from './constants/data.constants';
import { noDigitsRegExp } from './constants/regex.constants';
import type { UrlDataParams } from '../types/function.types';

export const assertArrayOfNames = (arr: string[]): boolean => {
    const isValidArray: boolean = arr.every((name: string) => {
        const isNameValid: boolean = noDigitsRegExp.test(name);
        return isNameValid;
    });

    return isValidArray;
};

export const getUrlFromParams = ({
    baseUrl,
    id,
    path,
}: UrlDataParams): string => {
    if (!baseUrl) return;

    let url: string;
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

export function getCapitalLetters(
    str: string
): (string | string[])[] | undefined {
    const chars: string[] =
        str
            ?.split(' ')
            .filter((v) => !!v)
            .map((word) => word[0].toUpperCase()) ?? undefined;

    if (!chars) return;

    const [firstChar, secondChar] = [chars?.[0], chars?.slice(-1)];
    return chars.length > 1 ? [firstChar, secondChar] : [firstChar];
}

export const assertFileImageType = (fileName: string): boolean => {
    const fileType: string = fileName?.replace('data:', '')?.split(';')[0];

    const isFileImageType: boolean = FILE_IMAGE_TYPES?.includes(
        fileType?.toLowerCase()
    );
    return isFileImageType;
};

export const capitalizeFirstLetter = (str: string): string => {
    const textWithCapFirstLetter: string = str[0].toUpperCase() + str.slice(1);
    return textWithCapFirstLetter;
};

export const getDogRaceText = (race: string): string => {
    const isRaceTextTooLong: boolean = race.length > MAX_DOG_RACE_TEXT_LENGTH;
    const shortenedDogRace: string = isRaceTextTooLong
        ? `${race.slice(0, MAX_DOG_RACE_TEXT_LENGTH - 3)}...`
        : race;

    const dogRaceText: string = shortenedDogRace ? `| ${shortenedDogRace}` : '';
    return dogRaceText;
};

export const getDogAgeText = (age: number): string => {
    const isSmallerThenOneYear: boolean = age < 1;
    const updatedAgeValue: number | string = isSmallerThenOneYear ? '0-1' : age;

    const dogAgeText: string = `Age: ${updatedAgeValue}`;
    return dogAgeText;
};
