import React from 'react';

import AutoComplete from './autocomplete/AutoComplete';
import SelectedAC from './SelectedAC'

////////////// helpers

const fieldCss = (meta) => `form-control ${gotError(meta) ? 'is-invalid' : ''}`;

const gotError = ({ touched, error, dirty }) => {
    if ( (dirty || touched) && error ) return true;
    return false;
}

const renderErrorField = (meta) => {
    if (gotError(meta)) {
        return (<div className="invalid-feedback">{meta.error}</div>)
    }
}

////////////// SIMPLE FIELD

export const SimpleField = ({ children, meta, label, errors }) => {

    // console.log('SimpleField RENDERING ---------------------------->')

    // const hasErors = errors !== undefined ? true : false
    return (
        <div className="form-group simple-field-wr">
            { label && <label className="field-label form-label">{label}</label> }
            { children }
            { meta && renderErrorField(meta) }
        </div>
    )
}

export const SimpleField2 = ({ children, label, error }) => (

    // const hasErors = errors !== undefined ? true : false

    <div className="form-group simple-field-wr">
        <label className="field-label form-label">{label}</label>
        { children }
        { error && <div className="error-feedback">{error}</div> }
    </div>
)


// props -> { input, meta }

// meta 
// active: false
// asyncValidating: false
// autofilled: false
// dirty: false
// dispatch: ƒ ()
// error: "Required"
// form: "projetForm"
// initial: "YOUSSEF PROJET"
// invalid: true
// pristine: true
// submitFailed: false
// submitting: false
// touched: false
// valid: false
// visited: false
// warning: undefined

// input 
// name: "intitule"
// onBlur: ƒ (event)
// onChange: ƒ (event)
// onDragStart: ƒ (event)
// onDrop: ƒ (event)
// onFocus: ƒ (event)
// value: "..."


////////////// TEXT TEXTAREA

export const TextField = (props) => {

    const { input, meta, label, fieldType } = props;
    // console.log('TextField', props);

    const fieldProps = {
        ...input, // (provided by the redux-form HOC)
        className: fieldCss(meta),
    };

    let renderTextField;

    if (fieldType === 'input') {
        renderTextField = <input type="text" {...fieldProps} autoComplete="off" />
    }

    else if (fieldType === 'textarea') {
        renderTextField = <textarea {...fieldProps} />
    }
    
    return (
        <SimpleField label={label} meta={meta} >
            { renderTextField }
        </SimpleField>
    )
}


////////////// AUTO COMPLETE

export const AutoCompleteField = ({ input, meta, label, onSelect, url, onDelete }) => {

    // const acProps = { ...ac, meta }

    return (
        <SimpleField label={label} meta={meta} >
            { input.value ?
                <SelectedAC suggestion={input.value} onDelete={onDelete} />
                // <SelectedAC suggestion={suggestion} onDelete={onDelete} />
                :
                // <div className={`${fieldCss(meta)}`}>
                    <AutoComplete onSelect={onSelect} url={url} /> 
                // </div>
                // fieldCss(meta)
            }
        </SimpleField>
    )


}



////////////// RADIO

export const RadioField = ({ input, meta, label, options }) => {

    return (

        <SimpleField label={label} meta={meta} >
            {options.map((option) => (
                <div className="form-check" key={option.value}>
                    <input
                        id={`${option.value}`}
                        // style={{ display: 'none' }}
                        className="form-check-input"
                        type="radio"
                        value={option.value}
                        checked={option.value === input.value}
                        onChange={(e) => input.onChange(option.value)}
                    />
                    {/* {   option.value === input.value ? 
                        <i className="fas fa-dot-circle"></i>
                        :
                        <i className="far fa-dot-circle"></i>
                    } */}
                    <label htmlFor={`${option.value}`} className="radio-label form-check-label">
                        {option.label}
                    </label>
                </div>
            ))}
        </SimpleField>

    )

}

export const RadioList = ({options, input}) => 
    options.map((option) => (
        <div className="form-check" key={option.label}>
            <input id={option.label} className="form-check-input" type="radio"
                value={option.value}
                checked={option.value === input.value}
                onChange={(e) => input.onChange(option.value)}
            />
            <label htmlFor={option.label} className="radio-label form-check-label">
                {option.label}
            </label>
        </div>
    ))


export const LineRadio = ({input, label, btnText, btnOnClick}) => {

    return (
        <div className="radio-line form-group">
            
            <label className="field-label form-label">{label}</label>

            {/* <div className="radio-list">
                <RadioList options={options} input={input} />
            </div> */}

            <SwitchSlider onChange={ (e) => input.onChange(e.target.checked) } checked={input.value ? true:false} />

            <input type="button" className={`btn btn-info show-modal ${input.value ? '':'op-hide'}`} 
                    value={btnText} onClick={btnOnClick}
            />
            
        </div>
    )
}

const SwitchSlider = (props) => (
    <label className="switch">
        <input type="checkbox" name="cloture" {...props} />
        <div className="slider round"></div>
    </label>
)

////////////// SELECT

export const SelectField = ({ input, meta, label, options }) => {

    // console.log('SelectField -> ', options)
    return (
        <SimpleField label={label} meta={meta} >
            <select
                className={`${fieldCss(meta)}`}
                onChange={input.onChange}
                value={input.value}
            >
                <option value=''>...</option>
                {options.map((op) => <option key={op.value} value={op.value}>{op.label}</option>)}
            </select>
        </SimpleField>
    )
}

////////////// CHECKBOX

export const CheckboxField = ({ input, meta, label, options }) => {

    return (

        <SimpleField label={label} meta={meta} >
            <div className={ `check-control check-array` }>
            {/* <div className={ meta && `${fieldCss(meta)}` }> */}
                { options.map((option) => {
                    let checked = input.value.indexOf(option.value) !== -1
                    return (
                    <div className="form-check" key={option.value}>
                        <input
                            id={option.value}
                            className="form-check-input hide"
                            type="checkbox"
                            checked={checked}
                            //
                            onChange={(e) => {
                                const newValues = [...input.value];
                                if (e.target.checked) {
                                    newValues.push(option.value);
                                } else {
                                    newValues.splice(newValues.indexOf(option.value), 1);
                                }
                                // console.log('Checkbox', newValues)
                                input.onChange(newValues); // it's like dispatch(change(newValues))
                                // change(form:String, field:String, value:any)

                            }}
                        />

                        <i className={ `fa-${ checked ? 'check-square checked fas' : 'square far' }` }/>

                        <label className="checkbox-label form-check-label" htmlFor={option.value}>
                            {option.label}
                        </label>
                    </div>
                )}
                
                )}
            </div>

            { meta.error && <div className="error-feedback">{meta.error}</div> }
        </SimpleField>

    )

}


/////////////////// TOGGLE

export const ToggleField = ({label, input}) => {

    const checked = input.value ? true:false

    return (
        <div className="form-group simple-field-wr">
            <input 
                id={`toggle-field`}
                type="checkbox"
                className="hide"
                checked={checked}
                onFocus={ input.onFocus }
                onChange={ (e) => input.onChange(e.target.checked) }
            />
            <i className={
                `_fa_check fa-${ checked ? 'check-square checked fas' : 'square far' }`
            } />

            <label 
                className={`field-label form-check-label`}
                // className={`form-check-label`}
                htmlFor={`toggle-field`}
            >
                {label}
            </label>
        </div>
    )
}




////////////// SIMPLE FIELD

export const TextInput = ({ input, meta, placeholder='', type='text', autoComplete='off' }) => (
    <div className="in_wr">
        <input 
            type={type} placeholder={placeholder} autoComplete={autoComplete}  
            className={`form-control ${ meta.error ? 'has-errors' : '' }`} 
            { ...input } 
        />
        { meta.error && <div className="error-feedback">{meta.error}</div> }
    </div>
)