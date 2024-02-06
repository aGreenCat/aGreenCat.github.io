export const Date = ({month, year} : {month: number, year: number}) => {
    let months : string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "NOV", "DEC"];

    return (
        <div className="font-normal text-sm text-gray-500">{months[month-1] + " " + year}</div>
    )
}