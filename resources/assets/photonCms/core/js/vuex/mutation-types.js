/**
 * Defines mutations used in stores
 * TODO: NOTE that there probably are some unused mutations here
 */

/**
 * admin mutations
 */
export const ADMIN_CLEANUP = 'ADMIN_CLEANUP';
export const ADMIN_ERROR_DISPATCH = 'ADMIN_ERROR_DISPATCH';
export const CHANGE_ADMIN_MODE = 'CHANGE_ADMIN_MODE';
export const CLEAR_ADMIN_ERRORS = 'CLEAR_ADMIN_ERRORS';
export const CONCAT_LAZY_LOADED_NODES = 'CONCAT_LAZY_LOADED_NODES';
export const CONFIRM_ENTRY_DELETE = 'CONFIRM_ENTRY_DELETE';
export const CREATE_ANOTHER = 'CREATE_ANOTHER';
export const DELETE_ASSET_ENTRY_SUCCESS = 'DELETE_ASSET_ENTRY_SUCCESS';
export const DELETE_DYNAMIC_MODULE_ENTRY_SUCCESS = 'DELETE_DYNAMIC_MODULE_ENTRY_SUCCESS';
export const DISABLE_AUTOMATIC_SLUG_GENERATION = 'DISABLE_AUTOMATIC_SLUG_GENERATION';
export const EMPTY_LAZY_LOADED_NODES = 'EMPTY_LAZY_LOADED_NODES';
export const LOAD_DYNAMIC_MODULE_ENTRY_SUCCESS = 'LOAD_DYNAMIC_MODULE_ENTRY_SUCCESS';
export const LOAD_MODULE_ENTRIES_SUCCESS = 'LOAD_MODULE_ENTRIES_SUCCESS';
export const SAVE_DYNAMIC_MODULE_ENTRIES_SUCCESS = 'SAVE_DYNAMIC_MODULE_ENTRIES_SUCCESS';
export const SAVE_DYNAMIC_MODULE_ENTRY_SUCCESS = 'SAVE_DYNAMIC_MODULE_ENTRY_SUCCESS';
export const SET_CREATE_ENTRY_UI = 'SET_CREATE_ENTRY_UI';
export const SET_ASSET_MANAGER_SEARCH_FILTER = 'SET_ASSET_MANAGER_SEARCH_FILTER';
export const SET_DASHBOARD_WIDGET_FILTER = 'SET_DASHBOARD_WIDGET_FILTER';
export const SET_DASHBOARD_WIDGET_RESULT = 'SET_DASHBOARD_WIDGET_RESULT';
export const SET_ENTRY_FILTER = 'SET_ENTRY_FILTER';
export const SET_MASS_EDITOR_VISIBILITY = 'SET_MASS_EDITOR_VISIBILITY';
export const SET_SCOPE_MODULES = 'SET_SCOPE_MODULES';
export const SUBMIT_IN_PROGRESS = 'SUBMIT_IN_PROGRESS';
export const TOGGLE_ENTRY_UPDATED = 'TOGGLE_ENTRY_UPDATED';
export const UPDATE_ADMIN_SELECTED_MODULE = 'UPDATE_ADMIN_SELECTED_MODULE';
export const UPDATE_ENTRY = 'UPDATE_ENTRY';
export const UPDATE_MODULE_ENTRY_FIELD = 'UPDATE_MODULE_ENTRY_FIELD';
export const UPDATE_SELECTED_NODE = 'UPDATE_SELECTED_NODE';

/**
 * advancedSearch mutations
 */
export const CLEAR_ADVANCED_SEARCH_FILTER = 'CLEAR_ADVANCED_SEARCH_FILTER';
export const LOAD_DYNAMIC_MODULE_ENTRIES_PAGINATION = 'LOAD_DYNAMIC_MODULE_ENTRIES_PAGINATION';
export const SET_ADVANCED_SEARCH_FILTER = 'SET_ADVANCED_SEARCH_FILTER';
export const UPDATE_CURRENT_PAGE_NUMBER = 'UPDATE_CURRENT_PAGE_NUMBER';
export const UPDATE_FILTER_VALUE = 'UPDATE_FILTER_VALUE';
export const UPDATE_FILTERED_ENTRIES = 'UPDATE_FILTERED_ENTRIES';

/**
 * assetsManager mutations
 */
export const CONCAT_ASSETS = 'CONCAT_ASSETS';
export const INSERT_ENTRY_SUCCESS = 'INSERT_ENTRY_SUCCESS';
export const SELECT_ACTIVE_ASSET = 'SELECT_ACTIVE_ASSET';
export const SELECT_AFTER_UPLOAD = 'SELECT_AFTER_UPLOAD';
export const SELECT_ASSET = 'SELECT_ASSET';
export const SET_ASSET_MANAGER_VISIBLE = 'SET_ASSET_MANAGER_VISIBLE';
export const SET_ASSETS_MANAGER_EDITOR_MODE = 'SET_ASSETS_MANAGER_EDITOR_MODE';
export const SET_FILTER = 'SET_FILTER';
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const SET_MULTIPLE = 'SET_MULTIPLE';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_SELECTED_ASSETS = 'SET_SELECTED_ASSETS';
export const SET_SELECTED_ASSETS_IDS = 'SET_SELECTED_ASSETS_IDS';
export const SET_SORTING = 'SET_SORTING';
export const UNSET_ASSETS = 'UNSET_ASSETS';
export const UNSHIFT_ASSETS = 'UNSHIFT_ASSETS';
export const UPDATE_ASSET_MODULE_ENTRY_FIELD = 'UPDATE_ASSET_MODULE_ENTRY_FIELD';
export const UPDATE_ASSET_SELECTED_MODULE = 'UPDATE_ASSET_SELECTED_MODULE';
export const UPDATE_RESIZED_IMAGE = 'UPDATE_RESIZED_IMAGE';

/**
 * error mutations
 */
export const UPDATE_ERROR_PAGE = 'UPDATE_ERROR_PAGE';

/**
 * generator mutations (module options)
 */
export const POPULATE_NODES = 'POPULATE_NODES';
export const SET_CREATE_SHORTCUT = 'SET_CREATE_SHORTCUT';
export const UPDATE_GENERATOR_SELECTED_MODULE = 'UPDATE_GENERATOR_SELECTED_MODULE';
export const UPDATE_GENERATOR_SELECTED_MODULE_ANCHOR_HTML = 'UPDATE_GENERATOR_SELECTED_MODULE_ANCHOR_HTML';
export const UPDATE_GENERATOR_SELECTED_MODULE_ANCHOR_TEXT = 'UPDATE_GENERATOR_SELECTED_MODULE_ANCHOR_TEXT';
export const UPDATE_GENERATOR_SELECTED_MODULE_CATEGORY = 'UPDATE_GENERATOR_SELECTED_MODULE_CATEGORY';
export const UPDATE_GENERATOR_SELECTED_MODULE_ICON = 'UPDATE_GENERATOR_SELECTED_MODULE_ICON';
export const UPDATE_GENERATOR_SELECTED_MODULE_NAME = 'UPDATE_GENERATOR_SELECTED_MODULE_NAME';
export const UPDATE_GENERATOR_SELECTED_MODULE_SLUG = 'UPDATE_GENERATOR_SELECTED_MODULE_SLUG';
export const UPDATE_GENERATOR_SELECTED_MODULE_TABLE_NAME = 'UPDATE_GENERATOR_SELECTED_MODULE_TABLE_NAME';
export const UPDATE_GENERATOR_SELECTED_MODULE_TYPE = 'UPDATE_GENERATOR_SELECTED_MODULE_TYPE';

/**
 * generator mutations (module fields)
 */
export const CLEAR_GENERATOR_ERRORS = 'CLEAR_GENERATOR_ERRORS';
export const CLEAR_MODULE_CREATION_REPORT = 'CLEAR_MODULE_CREATION_REPORT';
export const CREATE_GENERATOR_SELECTED_MODULE_FIELD = 'CREATE_GENERATOR_SELECTED_MODULE_FIELD';
export const DELETE_GENERATOR_SELECTED_MODULE_FIELD = 'DELETE_GENERATOR_SELECTED_MODULE_FIELD';
export const GENERATOR_CLEANUP = 'GENERATOR_CLEANUP';
export const GENERATOR_ERROR_DISPATCH = 'GENERATOR_ERROR_DISPATCH';
export const MODULE_CREATION_REPORT_SUCCESS = 'MODULE_CREATION_REPORT_SUCCESS';
export const MODULE_CREATION_SUCCESS = 'MODULE_CREATION_SUCCESS';
export const MODULE_DELETE_REPORT_SUCCESS = 'MODULE_DELETE_REPORT_SUCCESS';
export const MODULE_DELETION_SUCCESS = 'MODULE_DELETION_SUCCESS';
export const MODULE_UPDATE_REPORT_SUCCESS = 'MODULE_UPDATE_REPORT_SUCCESS';
export const MODULE_UPDATE_SUCCESS = 'MODULE_UPDATE_SUCCESS';
export const SET_GENERATOR_REFRESH_FORM = 'SET_GENERATOR_REFRESH_FORM';
export const UPDATE_GENERATOR_FIELD_PROPERTY = 'UPDATE_GENERATOR_FIELD_PROPERTY';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_COLUMN_NAME = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_COLUMN_NAME';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_ID = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_ID';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_EDITABLE = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_EDITABLE';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_DISABLED = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_DISABLED';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_HIDDEN = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_HIDDEN';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_IS_SYSTEM = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_IS_SYSTEM';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_LAZY_LOADING = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_LAZY_LOADING';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_CAN_CREATE_SEARCH_CHOICE = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_CAN_CREATE_SEARCH_CHOICE';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_NULLABLE = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_NULLABLE';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_INDEXED = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_INDEXED';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_IS_DEFAULT_SEARCH_CHOICE = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_IS_DEFAULT_SEARCH_CHOICE';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_FLATTEN_TO_OPTGROUPS = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_FLATTEN_TO_OPTGROUPS';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_DEFAULT = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_DEFAULT';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_LOCAL_KEY = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_LOCAL_KEY';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_FOREIGN_KEY = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_FOREIGN_KEY';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_IS_ACTIVE_ENTRY_FILTER = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_IS_ACTIVE_ENTRY_FILTER';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_NAME = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_NAME';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_ORDER = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_ORDER';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_PIVOT_TABLE = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_PIVOT_TABLE';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_RELATED_MODULE = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_RELATED_MODULE';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_RELATION_NAME = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_RELATION_NAME';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_TOOLTIP_TEXT = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_TOOLTIP_TEXT';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_TYPE = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_TYPE';
export const UPDATE_GENERATOR_SELECTED_MODULE_FIELD_VALIDATION_RULES = 'UPDATE_GENERATOR_SELECTED_MODULE_FIELD_VALIDATION_RULES';

/**
 * menuEditor mutations
 */
export const CLEAR_MENU_EDITOR_ERRORS = 'CLEAR_MENU_EDITOR_ERRORS';
export const CONFIRM_MENU_DELETE = 'CONFIRM_MENU_DELETE';
export const CREATE_ANOTHER_MENU = 'CREATE_ANOTHER_MENU';
export const CREATE_MENU_SUCCESS = 'CREATE_MENU_SUCCESS';
export const DELETE_MENU_SUCCESS = 'DELETE_MENU_SUCCESS';
export const LOAD_MENU_SUCCESS = 'LOAD_MENU_SUCCESS';
export const MENU_EDITOR_ERROR_DISPATCH = 'MENU_EDITOR_ERROR_DISPATCH';
export const MENU_EDITOR_SET_CREATE_ENTRY_UI = 'MENU_EDITOR_SET_CREATE_ENTRY_UI';
export const MENU_EDITOR_SUBMIT_IN_PROGRESS = 'MENU_EDITOR_SUBMIT_IN_PROGRESS';
export const UPDATE_MENU_FIELD = 'UPDATE_MENU_FIELD';
export const UPDATE_MENU_SUCCESS = 'UPDATE_MENU_SUCCESS';

/**
 * menuItemsEditor item mutations
 */
export const CLEAR_MENU_ITEMS_EDITOR_ERRORS = 'CLEAR_MENU_ITEMS_EDITOR_ERRORS';
export const CONFIRM_MENU_ITEM_DELETE = 'CONFIRM_MENU_ITEM_DELETE';
export const CREATE_ANOTHER_MENU_ITEM = 'CREATE_ANOTHER_MENU_ITEM';
export const CREATE_MENU_ITEM_SUCCESS = 'CREATE_MENU_ITEM_SUCCESS';
export const DELETE_MENU_ITEM_SUCCESS = 'DELETE_MENU_ITEM_SUCCESS';
export const LOAD_ALL_MENUS_SUCCESS = 'LOAD_ALL_MENUS_SUCCESS';
export const LOAD_MENU_ITEM_SUCCESS = 'LOAD_MENU_ITEM_SUCCESS';
export const MENU_ITEMS_EDITOR_ERROR_DISPATCH = 'MENU_ITEMS_EDITOR_ERROR_DISPATCH';
export const MENU_ITEMS_EDITOR_BOOTSTRAP_IN_PROGRESS = 'MENU_ITEMS_EDITOR_BOOTSTRAP_IN_PROGRESS';
export const MENU_ITEMS_EDITOR_SET_CREATE_ENTRY_UI = 'MENU_ITEMS_EDITOR_SET_CREATE_ENTRY_UI';
export const MENU_ITEMS_EDITOR_SUBMIT_IN_PROGRESS = 'MENU_ITEMS_EDITOR_SUBMIT_IN_PROGRESS';
export const UNSET_MENU_ITEM_ADMIN_ENTRY = 'UNSET_MENU_ITEM_ADMIN_ENTRY';
export const UPDATE_MENU_ITEM_FIELD = 'UPDATE_MENU_ITEM_FIELD';
export const UPDATE_MENU_ITEM_SELECTED_NODE = 'UPDATE_MENU_ITEM_SELECTED_NODE';
export const UPDATE_MENU_ITEM_SUCCESS = 'UPDATE_MENU_ITEM_SUCCESS';
export const UPDATE_SELECTED_MENU = 'UPDATE_SELECTED_MENU';

/**
 * notification mutations
 */
export const NOTIFICATIONS_ADD = 'NOTIFICATIONS_ADD';
export const NOTIFICATIONS_EMPTY = 'NOTIFICATIONS_EMPTY';
export const NOTIFICATIONS_READ = 'NOTIFICATIONS_READ';
export const NOTIFICATIONS_UPDATE_BADGE = 'NOTIFICATIONS_UPDATE_BADGE';
export const NOTIFICATIONS_UPDATE_UNREAD = 'NOTIFICATIONS_UPDATE_UNREAD';

/**
 * photonField mutations
 */
export const GET_ALL_FIELD_TYPES_SUCCESS = 'GET_ALL_FIELD_TYPES_SUCCESS';

/**
 * photonModule mutations
 */
export const GET_ALL_MODULES_SUCCESS = 'GET_ALL_MODULES_SUCCESS';
export const GET_MODULE_INFORMATION_SUCCESS = 'GET_MODULE_INFORMATION_SUCCESS';
export const MODULE_NOT_FOUND = 'MODULE_NOT_FOUND';

/**
 * sidebar mutations
 */
export const UI_SIDEBAR_EXTENDED_STATE = 'UI_SIDEBAR_EXTENDED_STATE';
export const UI_UPDATE_SIDEBAR_TYPE = 'UI_UPDATE_SIDEBAR_TYPE';
export const UI_UPDATE_HAS_NODES = 'UI_UPDATE_HAS_NODES';

/**
 * subscription mutations
 */
export const ADD_SUBSCRIBED_USER = 'ADD_SUBSCRIBED_USER';
export const REMOVE_SUBSCRIBED_USER = 'REMOVE_SUBSCRIBED_USER';
export const SET_SUBSCRIBED_USERS = 'SET_SUBSCRIBED_USERS';
export const SUBSCRIBE = 'SUBSCRIBE';
export const UNSET_SUBSCRIBED_USERS = 'UNSET_SUBSCRIBED_USERS';
export const UNSUBSCRIBE = 'UNSUBSCRIBE';

/**
 * ui mutations
 */
export const UI_BODY_RESIZE = 'UI_BODY_RESIZE';
export const UI_LOAD_MAIN_MENU_SUCCESS = 'UI_LOAD_MAIN_MENU_SUCCESS';
export const UI_LOAD_QUICK_LAUNCH_MENU_SUCCESS = 'UI_LOAD_QUICK_LAUNCH_MENU_SUCCESS';
export const UI_LOAD_USER_MENU_SUCCESS = 'UI_LOAD_USER_MENU_SUCCESS';
export const UI_SET_TITLE = 'UI_SET_TITLE';
export const UI_SET_TITLE_ICON = 'UI_SET_TITLE_ICON';
export const UI_SET_TITLE_SUBTEXT = 'UI_SET_TITLE_SUBTEXT';
export const UI_UPDATE_BODY_CLASS = 'UI_UPDATE_BODY_CLASS';
export const UI_UPDATE_BREADCRUMB_ITEMS = 'UI_UPDATE_BREADCRUMB_ITEMS';

/**
 * user mutations
 */
export const AUTH_CLEAR_ERRORS = 'AUTH_CLEAR_ERRORS';
export const AUTH_ERROR_DISPATCH = 'AUTH_ERROR_DISPATCH';
export const AUTH_IMPERSONATING_OFF = 'AUTH_IMPERSONATING_OFF';
export const AUTH_IMPERSONATING_ON = 'AUTH_IMPERSONATING_ON';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const IMPERSONATE_ERROR_DISPATCH = 'IMPERSONATE_ERROR_DISPATCH';
export const SET_LICENSE_EXPIRING = 'SET_LICENSE_EXPIRING';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';

/**
 * widget mutations
 */
export const CREATE_NEW_WIDGET = 'CREATE_NEW_WIDGET';
export const DELETE_WIDGET = 'DELETE_WIDGET';
export const GET_WIDGETS_SUCCESS = 'GET_WIDGETS_SUCCESS';
export const RESET_WIDGET_MODEL = 'RESET_WIDGET_MODEL';
export const UPDATE_WIDGET = 'UPDATE_WIDGET';
export const UPDATE_WIDGET_PROPERTY = 'UPDATE_WIDGET_PROPERTY';
export const UPDATE_WIDGET_MODULE_FIELDS = 'UPDATE_WIDGET_MODULE_FIELDS';
