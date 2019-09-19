import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    getTruncDesc,
    getAbbrMonth,
    getDay,
    getEventDate,
    getEventTime,
} from '../helpers/displayEvent';
import EventFilters from './filter';
import AddCal from './addCal'
import buildEventWrapperFilters from '../helpers/buildEventWrapperFilters';
import {EventImg} from './partials';

const ModernStandardInner = props => {
    const {event, addcal, thumbnail, excerptlength, itemclass} = props;

    /**
     *
     * @param {obj} event_types An array of events.
     * @return {string} Html string
     */
    const tagStr = event_types => {
        if (event_types) {
            const spanStr = event_types.map(element => {
                return <span key={element.id} className="inline-events-type">{element.name}</span>
            });
            return spanStr;
        }
    };

    const eventTime = getEventTime(event);

    return (
        <div className={`card event-node ${itemclass}`}>
            <div className="events">
                <a
                    href={event.localist_url}
                    className="group-link-wrapper field-group-link"
                >
                    <time
                        title={getEventDate(event)}
                        dateTime={eventTime}
                    >
                        <span className="month">{getAbbrMonth(event)}</span>
                        <span className="day">{getDay(event)}</span>
                    </time>
                    <div className="field title">
                        <h3>{event.title}</h3>
                    </div>
                    <div className="field meta">
                        <p>
                            {eventTime}{ event.location_name ? `, ${event.location_name}` : '' }
                            {tagStr(event.filters.event_types)}
                        </p>
                    </div>
                    <div className="field field-name-summary summary">
                        <p>
                            <EventImg
                                photoUrl={event.photo_url}
                                title={event.title}
                                thumbnail={thumbnail}
                                photoCrop='big'
                            />
                            {getTruncDesc(event, excerptlength)} read more
                        </p>
                    </div>
                </a>
                {
                    addcal === 'true'
                        ? <AddCal event={event} />
                        : ''
                }
            </div>

        </div>
    )
}

ModernStandardInner.propTypes = {
    event: PropTypes.object.isRequired,
    addcal: PropTypes.string.isRequired,
    excerptlength: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    itemclass: PropTypes.string.isRequired,
};

const ModernStandard= props =>{
    const {
        events,
        filterby,
        usefilterby,
        addcal,
        excerptlength,
        thumbnail,
        itemclass,
        listclass,
        wrapperclass} = props;
    const [filterEvents, handleEventFilter] = useState(events);
    const filterObjs = buildEventWrapperFilters(events, filterby);
    const thumbNailClass = (thumbnail === 'false') ? 'no-thumbnails' : '';
    return (
        <section className='events-modern-standard modern' title="Events List">
            <div className="main-body">
                <div className={`cwd-component cwd-card-grid three-card singles events-listing ${thumbNailClass} ${wrapperclass}`}>
                    { usefilterby === 'true'
                        ? <EventFilters
                            filterObjs={filterObjs}
                            events={events}
                            handleEventFilter={handleEventFilter}
                            filterby={filterby}
                        />
                        : ''}
                    <div className={`events-list view-content ${listclass}`}>
                        {filterEvents.length > 0
                            ? filterEvents.map( event => {
                                return (
                                    <ModernStandardInner
                                        key={event.event.id}
                                        event={event.event}
                                        filterby={filterby}
                                        addcal={addcal}
                                        excerptlength={excerptlength}
                                        thumbnail={thumbnail}
                                        itemclass={itemclass}
                                    />
                                )
                            })
                            : <p>There are no upcomming events.</p>}
                    </div>
                </div>
            </div>
        </section>
    );

}

ModernStandard.propTypes = {
    events: PropTypes.array,
    filterby: PropTypes.string.isRequired,
    usefilterby: PropTypes.string,
    addcal: PropTypes.string,
    excerptlength: PropTypes.string,
    thumbnail: PropTypes.string,
    wrapperclass: PropTypes.string,
    listclass: PropTypes.string,
    itemclass: PropTypes.string,
};

ModernStandard.defaultProps = {
    events: [],
    usefilterby: 'true',
    addcal: 'false',
    excerptlength: '250',
    thumbnail: 'true',
    wrapperclass: '', //cwd-card-grid three-card',
    listclass: '', //cards',
    itemclass: '', //card',

};
export default ModernStandard;
