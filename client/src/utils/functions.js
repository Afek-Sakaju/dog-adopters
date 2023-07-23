// eslint-disable-next-line import/prefer-default-export
export const assertFullnameSpaces = (str, ctx) => {
    if (!str) return true;

    const endsWithSpace = str?.[0] === ' ';
    const startsWithSpace = str?.[str.length - 1] === ' ';
    const regex = / {2,}/;
    const haveAdjacentSpaces = regex.test(str);
    if (endsWithSpace || startsWithSpace || haveAdjacentSpaces) {
        return ctx.createError({
            message: 'Full name should have space only between names',
        });
    }

    return true;
};
