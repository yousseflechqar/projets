import React from 'react';

const RadioField = ({ input, meta, label, options }) => {

    return (

        <div className="form-group">
            <label>{label}</label>
            { options.map((option) => (
                <div className="form-check" key={option.value}>
                    <input
                        className="form-check-input"
                        type="radio"
                        // 
                        // {...input}
                        value={ option.value }
                        checked={ option.value === input.value }
                        onChange={input.onChange}
                    />
                    <label className="form-check-label">
                        {option.label}
                    </label>
                </div>
            )) }
        </div>

    )

}

export default RadioField;