import React, { useContext } from 'react';

import { NewsContext } from '../context/NewsContext';
import { addCategory } from '../actions/actions';
import { useSelect } from '../hooks/useSelect';
import styles from './Form.module.css';

const LIST_OF_CATEGORIES = [
    { value: 'general', label: 'General' },
    { value: 'business', label: 'Business' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'health', label: 'Health' },
    { value: 'science', label: 'Science' },
    { value: 'sports', label: 'Sports' },
    { value: 'technology', label: 'Technology' },
];

const Form = () => {
    const [category, SelectNews] = useSelect('general', LIST_OF_CATEGORIES);

    const { dispatch } = useContext(NewsContext);

    const handleSubmit = event => {
        event.preventDefault();

        dispatch(addCategory(category));
    };

    return (
        <div className={`row ${styles.finder}`}>
            <div className="col s12 m8 offset-m2">
                <h2 className={styles.heading}>Find news by category</h2>

                <form onSubmit={handleSubmit}>
                    <SelectNews />

                    <div className="input-field col s12">
                        <button
                            className={`btn-large amber darken-2 ${styles['btn-block']}`}
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
