/**
 *   @todo add prop type validation.
 * @param {obj} builtData A buildEvents.js obj.
 * @return {string} Html string
 */
export const cuenergyEventsInner = builtData => /* html */ `
    <div class="views-row">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 event-title-and-location">
                    <div>
                        <a href="${builtData.event.localist_url}"
                            >${builtData.event.title}</a
                        >
                    </div>
                    <div>
                        <span class="event-date">${builtData.event_date}</span>
                        -
                        ${builtData.event_time}${
    builtData.event.location_name ? ` | ${builtData.event.location_name}` : ''
}
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

/**
 *   @todo add prop type validation.
 * @param {string} inner The html inner string.
 * @return {string} Html string
 */
export const cuenergyEventsWrapper = inner => /* html */ `
    <div class="view view-events view-id-events cuenergy-events">
        <div class="view-content">
            ${inner}
        </div>
    </div>
`;

/**
 *
 * @param {obj} builtData A buildEvents.js obj.
 * @return {string} Html string
 */
export const cuenergyCompactInner = builtData => /* html */ `
    <div class="views-row">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-2 event-month-and-day">
                    <div>
                        <span class="event-month">${builtData.abbrMonth}</span
                        ><span class="event-day">${builtData.day}</span>
                    </div>
                </div>
                <div class="col-sm-10 event-title-and-location">
                    <div>
                        <a href="${builtData.event.localist_url}"
                            >${builtData.event.title}</a
                        >
                    </div>
                    <div>
                        ${builtData.event_time}${
    builtData.event.location_name ? ` | ${builtData.event.location_name}` : ''
}
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

/**
 *
 * @param {string} inner The html inner string.
 * @return {string} Html string
 */
export const cuenergyCompactWrapper = inner => /* html */ `
    <div class="form-group">
        <div class="view view-events view-id-events">
            <div class="view-content">
                ${inner}
            </div>
        </div>
    </div>
`;
