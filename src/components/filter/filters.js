import MultipleSelect from "./fragments/multiple-select";
import labels from "./data/filter-data";

import './filters.scss';

const Filter = () => {
    return (
        <div className="filters">
            <MultipleSelect items={labels.dietLabel} tag="Diet"/>
            <MultipleSelect items={labels.mealLabel} tag="Meal type"/>
            <MultipleSelect items={labels.mealLabel} tag="Meal type"/>
        </div>
    )
};

export default Filter;