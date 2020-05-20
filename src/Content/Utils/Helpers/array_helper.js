export const updateObjectInArray = (items, objItem, userId, objProps) => {
    items.map(u => u[objItem] === userId ? {...u, ...objProps} : u);
};
