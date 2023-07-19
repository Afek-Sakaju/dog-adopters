// eslint-disable-next-line import/prefer-default-export
export const assertSpacesValidity = (str) => {
    let isInvalidSpaceExist = false;

    for (let i = 0; i < str.length; i++) {
        const next = str[i + 1];
        const prev = str[i - 1];

        const isSpace = str[i] === ' ';
        // Char - non space character, if its undefined it doesn't count as char
        const dontHaveCharAfter = next !== undefined && next !== ' ';
        const dontHaveCharBefore = prev !== undefined && prev !== ' ';

        if (isSpace && (dontHaveCharAfter || dontHaveCharBefore)) {
            isInvalidSpaceExist = true;
        }
    }

    return isInvalidSpaceExist;
};
