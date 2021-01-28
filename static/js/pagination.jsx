"use strict";

function Pagination ({goToNextPage, goToPreviousPage}) {
    return (
        <div>
            {/* if goToPreviousPage function then run the second half of function  */}
            {goToPreviousPage && <button onClick={goToPreviousPage}>Previous</button>}
            {/* if goToPreviousPage function then run the second half of function  */}
            {goToNextPage && <button onClick={goToNextPage}>Next</button>}
        </div>
    );
}