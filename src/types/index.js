
// const SUGGESTIONS = '[Suggestions]';
const externalForms = '[external forms]';
const checkbox = '[checkbox]';
const users = '[users]';

const types = {

    SET_REDUX_FORM: '[redux-form] SET',
    AC_SELECT: '[ac] SELECT',
    AC_INIT: '[ac] INIT',

    TOGGLE_MODAL: 'TOGGLE_MODAL',
    SHOW_MODAL: 'SHOW_MODAL',
    HIDE_MODAL: 'HIDE_MODAL',


    ADD_ITEM_LOCALISATION: `${externalForms} ADD_ITEM_LOCALISATION`,
    INIT_LOCALISATION: `${externalForms} INIT_LOCALISATION`,

    ADD_ITEM: `${externalForms} ADD_ITEM`,
    DELETE_ITEM_BY_INDEX: `${externalForms} DELETE_ITEM_BY_INDEX`,
    DELETE_ITEM_BY_VALUE: `${externalForms} DELETE_ITEM_BY_VALUE`,
    DELETE_ITEM_BY_PATH: `${externalForms} DELETE_ITEM_BY_PATH`,
    UPDATE_ITEM: `${externalForms} UPDATE_ITEM`,
    SET_ARRAY: `${externalForms} SET_ARRAY`,

    EDIT_FORM_VALUES: `${externalForms} EDIT_FORM_VALUES`,



    SET_CHECKBOX_PROP: `${checkbox} SET_PROP`,


    ///// USERS
    
    ADD_USER: `${users} ADD`,


    SET_BREAD_CRUMB: `SET_BREAD_CRUMB`,

    LOGIN: `LOGIN`,
    LOGOUT: `LOGOUT`,
}


export default types;

export const constants = {
    PROVINCE_TAOURIRT: 8,
    INDH: 1,
    PRDTS: 2,
}

export const TYPE_OS = {
    ARRET: 1,
    REPRISE: 2,
}

export const USER_PROFILES = {
    root: 1, charge_suivi: 2, division_supervisor: 3, supervisor_general: 4, consultation: 5
}

export const SRC_FINANCEMENT = {
    BG: 1, BP: 2, INDH: 3, PRDTS_INDH: 4, PRDTS_FDRZM: 5, CT: 10
}

export const fieldType = {
    TEXT: 'text',
    SELECT: 'select',
    RADIO: 'radio',
    CHECKBOX: 'checkbox',
}

