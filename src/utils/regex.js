export const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const validNumberHome = new RegExp(
    /^\d{1}$/
);

export const validNumberCard = new RegExp(
    /^\d{4}( \d{4}){3}$/
);

export const validCvv = new RegExp(
    /^\d{3}$/
);