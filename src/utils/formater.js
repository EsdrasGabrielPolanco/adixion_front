
export const formatJobUrl = (title, type) => {
    let newTitle = decodeURI(title).split('_').join(' ');
    let newType = decodeURI(type.charAt(0).toUpperCase() + type.slice(1)).split('_').join(' ');

    return { vertical: newType, jobTitle: newTitle};
}