//takes a value/data/timestamp -> validate -> readable date
export const formatDate = (value) => {
    if (!value) return "-";
    const d = new Date(value);
    if(Number.isNaN(d.getTime()))
        return d.toLocaleDateString();
};

export const formatDateTime = (value) => {
    if (!value) return "-";
    const d = new Date(value);
    if(Number.isNaN(d.getTime()))
        return d.toLocaleString();
}