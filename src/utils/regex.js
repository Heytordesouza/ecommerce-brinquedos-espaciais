export const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const validNumberHome = new RegExp(
    /^\d{2}$/
);

export const validNumberCard = new RegExp(
    /^\d{16}$/
);

export const validCvv = new RegExp(
    /^\d{3}$/
);