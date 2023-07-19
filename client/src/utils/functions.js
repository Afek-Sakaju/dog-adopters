// eslint-disable-next-line import/prefer-default-export
export const trimObjectValues = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
        acc[key] = obj[key]?.trim();
        return acc;
    }, {});
};
