export const cardNormalizeText = (text) => {
    if (text.length > 184) {
        return text.substr(0, 183) + '...';
    }

    return text;
}
