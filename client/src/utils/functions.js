// eslint-disable-next-line import/prefer-default-export
export const removeSpacesFromObjectValues = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = obj[key]?.split(' ').join('');
        return acc;
    }, {});
};
