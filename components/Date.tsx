export const Date = ({month, year} : {month: number, year: number}) => {
    let months : string[] = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "NOV", "DEC"];

    return (
        <div className="font-light text-sm">{months[month] + " " + year}</div>
    )
}