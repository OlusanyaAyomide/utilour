
export const getMonthDate = ()=>{
    const arrayOfObjects = Array.from({ length: 27 }, (_, index) => ({
        name: `${index + 1}${index === 0 ? 'st' : index === 1 ? 'nd' : 'th'}`,
        day: index + 1,
    }));

    return [...arrayOfObjects,{name:"Month End",day:30}]
}