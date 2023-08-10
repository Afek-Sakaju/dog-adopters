/* This function used for yup validations, to trim a string 
and to assure that it doesn't contain numbers/double spaces */
export const assertNameStringInput = (str) => {
    if (!str) return true;

    const endsWithSpace = str?.[0] === ' ';
    const startsWithSpace = str?.[str.length - 1] === ' ';
    const haveAdjacentSpaces = / {2,}/.test(str);
    const haveNumber = /\d/.test(str);

    if (endsWithSpace || startsWithSpace || haveAdjacentSpaces || haveNumber) {
        return false;
    }

    return true;
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
