export const assertFullnameSpaces = (str, ctx) => {
    if (!str) return true;

    const endsWithSpace = str?.[0] === ' ';
    const startsWithSpace = str?.[str.length - 1] === ' ';
    const haveAdjacentSpaces = / {2,}/.test(str);
    const haveNumber = /\d/.test(str);

    if (endsWithSpace || startsWithSpace || haveAdjacentSpaces || haveNumber) {
        return ctx.createError({
            message: 'Full name should have space only between names',
        });
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
