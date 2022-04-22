import MultipleSelect from "./fragments/multiple-select";
import labels from "./data/filter-data";

import './filters.scss';

const Filter = () => {
    return (
        <div className="filters">
            <MultipleSelect
                id="diet-labels"
                items={labels.dietLabel} 
                tag="Diet" />
            <MultipleSelect
                id="meal-labels"
                items={labels.mealLabel} 
                tag="Meal type" />
            <MultipleSelect
                id="health-restrictions"
                items={labels.healthLabel} 
                tag="Health restrictions" />
        </div>
    )
};

export default Filter;