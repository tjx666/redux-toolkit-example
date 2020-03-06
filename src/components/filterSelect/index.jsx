import React from 'react';
import { connect } from 'react-redux';

import { VisibilityFilters, setVisibilityFilter } from 'reducers/filtersSlice';

import Link from './link';

function FilterSelect({ visibilityFilter, setVisibilityFilter }) {
    const renderLinks = () => {
        return Object.entries(VisibilityFilters).map(([filterKey, filterValue]) => (
            <Link
                key={filterKey}
                filter={filterValue}
                active={visibilityFilter === filterValue}
                onClick={() => setVisibilityFilter(filterValue)}
            >
                {filterKey.slice(filterKey.lastIndexOf('_') + 1).toLowerCase()}
            </Link>
        ));
    };

    return (
        <div>
            <span>Show: </span>
            {renderLinks()}
        </div>
    );
}

const mapStateToProps = state => ({
    visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = {
    setVisibilityFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSelect);
