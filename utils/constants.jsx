// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

/* eslint-disable no-magic-numbers */

import keyMirror from 'key-mirror';

import audioIcon from 'images/icons/audio.svg';
import codeIcon from 'images/icons/code.svg';
import excelIcon from 'images/icons/excel.svg';
import genericIcon from 'images/icons/generic.svg';
import patchIcon from 'images/icons/patch.png';
import pdfIcon from 'images/icons/pdf.svg';
import pptIcon from 'images/icons/ppt.svg';
import videoIcon from 'images/icons/video.svg';
import wordIcon from 'images/icons/word.svg';
import logoImage from 'images/logo_compact.png';
import githubIcon from 'images/themes/code_themes/github.png';
import monokaiIcon from 'images/themes/code_themes/monokai.png';
import solarizedDarkIcon from 'images/themes/code_themes/solarized-dark.png';
import solarizedLightIcon from 'images/themes/code_themes/solarized-light.png';
import mattermostThemeImage from 'images/themes/mattermost.png';
import mattermostDarkThemeImage from 'images/themes/mattermost_dark.png';
import defaultThemeImage from 'images/themes/organization.png';
import windows10ThemeImage from 'images/themes/windows_dark.png';
import logoWebhook from 'images/webhook_icon.jpg';

import githubCSS from '!!file-loader?name=files/code_themes/[hash].[ext]!highlight.js/styles/github.css';

// eslint-disable-line import/order
import monokaiCSS from '!!file-loader?name=files/code_themes/[hash].[ext]!highlight.js/styles/monokai.css';

// eslint-disable-line import/order
import solarizedDarkCSS from '!!file-loader?name=files/code_themes/[hash].[ext]!highlight.js/styles/solarized-dark.css';

// eslint-disable-line import/order
import solarizedLightCSS from '!!file-loader?name=files/code_themes/[hash].[ext]!highlight.js/styles/solarized-light.css'; // eslint-disable-line import/order

export const SettingsTypes = {
    TYPE_TEXT: 'text',
    TYPE_NUMBER: 'number',
    TYPE_BOOL: 'bool',
    TYPE_RADIO: 'radio',
    TYPE_BANNER: 'banner',
    TYPE_DROPDOWN: 'dropdown',
    TYPE_GENERATED: 'generated',
    TYPE_USERNAME: 'username',
    TYPE_BUTTON: 'button',
    TYPE_LANGUAGE: 'language',
    TYPE_JOBSTABLE: 'jobstable',
    TYPE_CUSTOM: 'custom',
};

export const Preferences = {
    CATEGORY_CHANNEL_OPEN_TIME: 'channel_open_time',
    CATEGORY_DIRECT_CHANNEL_SHOW: 'direct_channel_show',
    CATEGORY_GROUP_CHANNEL_SHOW: 'group_channel_show',
    CATEGORY_DISPLAY_SETTINGS: 'display_settings',
    CATEGORY_SIDEBAR_SETTINGS: 'sidebar_settings',
    CATEGORY_ADVANCED_SETTINGS: 'advanced_settings',
    TUTORIAL_STEP: 'tutorial_step',
    CHANNEL_DISPLAY_MODE: 'channel_display_mode',
    CHANNEL_DISPLAY_MODE_CENTERED: 'centered',
    CHANNEL_DISPLAY_MODE_FULL_SCREEN: 'full',
    CHANNEL_DISPLAY_MODE_DEFAULT: 'full',
    MESSAGE_DISPLAY: 'message_display',
    MESSAGE_DISPLAY_CLEAN: 'clean',
    MESSAGE_DISPLAY_COMPACT: 'compact',
    MESSAGE_DISPLAY_DEFAULT: 'clean',
    LINK_PREVIEW_DISPLAY: 'link_previews',
    LINK_PREVIEW_DISPLAY_DEFAULT: 'true',
    COLLAPSE_DISPLAY: 'collapse_previews',
    COLLAPSE_DISPLAY_DEFAULT: 'false',
    USE_MILITARY_TIME: 'use_military_time',
    USE_MILITARY_TIME_DEFAULT: 'false',
    CATEGORY_THEME: 'theme',
    CATEGORY_FLAGGED_POST: 'flagged_post',
    CATEGORY_NOTIFICATIONS: 'notifications',
    CATEGORY_FAVORITE_CHANNEL: 'favorite_channel',
    EMAIL_INTERVAL: 'email_interval',
    INTERVAL_IMMEDIATE: 30, // "immediate" is a 30 second interval
    INTERVAL_FIFTEEN_MINUTES: 15 * 60,
    INTERVAL_HOUR: 60 * 60,
    INTERVAL_NEVER: 0,
    NAME_NAME_FORMAT: 'name_format',
};

export const ActionTypes = keyMirror({
    RECEIVED_ERROR: null,
    CLICK_CHANNEL: null,
    CREATE_CHANNEL: null,
    CREATE_POST: null,
    CREATE_COMMENT: null,
    POST_DELETED: null,
    POST_UPDATED: null,
    REMOVE_POST: null,

    RECEIVED_CHANNELS: null,
    RECEIVED_CHANNEL: null,
    RECEIVED_CHANNEL_MEMBER: null,
    RECEIVED_MORE_CHANNELS: null,
    RECEIVED_CHANNEL_STATS: null,
    RECEIVED_MY_CHANNEL_MEMBERS: null,
    RECEIVED_MEMBERS_IN_CHANNEL: null,

    FOCUS_POST: null,
    RECEIVED_POSTS: null,
    RECEIVED_FOCUSED_POST: null,
    RECEIVED_POST: null,
    RECEIVED_EDIT_POST: null,
    EDIT_POST: null,
    SELECT_POST: null,
    RECEIVED_POST_SELECTED: null,
    RECEIVED_MENTION_DATA: null,
    RECEIVED_ADD_MENTION: null,
    RECEIVED_POST_PINNED: null,
    RECEIVED_POST_UNPINNED: null,
    INCREASE_POST_VISIBILITY: null,
    LOADING_POSTS: null,

    UPDATE_RHS_STATE: null,
    UPDATE_RHS_SEARCH_TERMS: null,
    UPDATE_RHS_SEARCH_RESULTS_TERMS: null,

    UPDATE_MOBILE_VIEW: null,

    SEARCH_FLAGGED_POSTS_REQUEST: null,
    SEARCH_FLAGGED_POSTS_SUCCESS: null,
    SEARCH_FLAGGED_POSTS_FAILURE: null,

    SEARCH_PINNED_POSTS_REQUEST: null,
    SEARCH_PINNED_POSTS_SUCCESS: null,
    SEARCH_PINNED_POSTS_FAILURE: null,

    RECEIVED_PROFILES: null,
    RECEIVED_PROFILES_IN_TEAM: null,
    RECEIVED_PROFILES_NOT_IN_TEAM: null,
    RECEIVED_PROFILE: null,
    RECEIVED_PROFILES_IN_CHANNEL: null,
    RECEIVED_PROFILES_NOT_IN_CHANNEL: null,
    RECEIVED_PROFILES_WITHOUT_TEAM: null,
    RECEIVED_ME: null,
    RECEIVED_SESSIONS: null,
    RECEIVED_AUDITS: null,
    RECEIVED_TEAMS: null,
    RECEIVED_STATUSES: null,
    RECEIVED_PREFERENCE: null,
    RECEIVED_PREFERENCES: null,
    DELETED_PREFERENCES: null,
    RECEIVED_FILE_INFOS: null,
    RECEIVED_ANALYTICS: null,

    RECEIVED_INCOMING_WEBHOOKS: null,
    RECEIVED_INCOMING_WEBHOOK: null,
    UPDATED_INCOMING_WEBHOOK: null,
    REMOVED_INCOMING_WEBHOOK: null,
    RECEIVED_OUTGOING_WEBHOOKS: null,
    RECEIVED_OUTGOING_WEBHOOK: null,
    UPDATED_OUTGOING_WEBHOOK: null,
    REMOVED_OUTGOING_WEBHOOK: null,
    RECEIVED_COMMANDS: null,
    RECEIVED_COMMAND: null,
    UPDATED_COMMAND: null,
    REMOVED_COMMAND: null,
    RECEIVED_OAUTHAPPS: null,
    RECEIVED_OAUTHAPP: null,
    REMOVED_OAUTHAPP: null,

    RECEIVED_CUSTOM_EMOJIS: null,
    RECEIVED_CUSTOM_EMOJI: null,
    UPDATED_CUSTOM_EMOJI: null,
    REMOVED_CUSTOM_EMOJI: null,

    RECEIVED_REACTIONS: null,
    ADDED_REACTION: null,
    REMOVED_REACTION: null,

    RECEIVED_MSG: null,

    RECEIVED_TEAM: null,
    RECEIVED_MY_TEAM: null,
    CREATED_TEAM: null,
    UPDATE_TEAM: null,

    SET_NAVIGATION_BLOCKED: null,
    DEFER_NAVIGATION: null,
    CANCEL_NAVIGATION: null,
    CONFIRM_NAVIGATION: null,
    RECEIVED_CONFIG: null,
    RECEIVED_LOGS: null,
    RECEIVED_SERVER_AUDITS: null,
    RECEIVED_SERVER_COMPLIANCE_REPORTS: null,
    RECEIVED_ALL_TEAMS: null,
    RECEIVED_ALL_TEAM_LISTINGS: null,
    RECEIVED_MY_TEAM_MEMBERS: null,
    RECEIVED_MY_TEAMS_UNREAD: null,
    RECEIVED_MEMBERS_IN_TEAM: null,
    RECEIVED_TEAM_STATS: null,

    RECEIVED_LOCALE: null,

    UPDATE_OPEN_GRAPH_METADATA: null,
    RECIVED_OPEN_GRAPH_METADATA: null,

    SHOW_SEARCH: null,

    TOGGLE_ACCOUNT_SETTINGS_MODAL: null,
    TOGGLE_SHORTCUTS_MODAL: null,
    TOGGLE_IMPORT_THEME_MODAL: null,
    TOGGLE_INVITE_MEMBER_MODAL: null,
    TOGGLE_LEAVE_TEAM_MODAL: null,
    TOGGLE_DELETE_POST_MODAL: null,
    TOGGLE_GET_POST_LINK_MODAL: null,
    TOGGLE_GET_TEAM_INVITE_LINK_MODAL: null,
    TOGGLE_GET_PUBLIC_LINK_MODAL: null,
    TOGGLE_QUICK_SWITCH_MODAL: null,
    TOGGLE_CHANNEL_HEADER_UPDATE_MODAL: null,
    TOGGLE_CHANNEL_PURPOSE_UPDATE_MODAL: null,
    TOGGLE_CHANNEL_NAME_UPDATE_MODAL: null,
    TOGGLE_LEAVE_PRIVATE_CHANNEL_MODAL: null,
    SHOW_EDIT_POST_MODAL: null,
    HIDE_EDIT_POST_MODAL: null,

    SUGGESTION_PRETEXT_CHANGED: null,
    SUGGESTION_RECEIVED_SUGGESTIONS: null,
    SUGGESTION_CLEAR_SUGGESTIONS: null,
    SUGGESTION_COMPLETE_WORD: null,
    SUGGESTION_SELECT_NEXT: null,
    SUGGESTION_SELECT_PREVIOUS: null,

    BROWSER_CHANGE_FOCUS: null,

    EMOJI_POSTED: null,

    RECEIVED_PLUGIN_COMPONENTS: null,
    RECEIVED_PLUGIN_POST_TYPES: null,
    RECEIVED_PLUGIN_MENU_ACTIONS: null,
    RECEIVED_WEBAPP_PLUGINS: null,
    RECEIVED_WEBAPP_PLUGIN: null,
    REMOVED_WEBAPP_PLUGIN: null,

    MODAL_OPEN: null,
    MODAL_CLOSE: null,

    POPOVER_MENTION_KEY_CLICK: null,

    SELECT_CHANNEL_WITH_MEMBER: null,

    INCREMENT_EMOJI_PICKER_PAGE: null,

    TOGGLE_LHS: null,
    OPEN_LHS: null,
    CLOSE_LHS: null,

    TOGGLE_RHS_MENU: null,
    OPEN_RHS_MENU: null,
    CLOSE_RHS_MENU: null,

    INIT_WEBRTC: null,
    CLOSE_WEBRTC: null,

    STORE_REHYDRATION_FAILED: null,
});

export const WebrtcActionTypes = keyMirror({
    INITIALIZE: null,
    NOTIFY: null,
    CHANGED: null,
    ANSWER: null,
    DECLINE: null,
    CANCEL: null,
    NO_ANSWER: null,
    BUSY: null,
    FAILED: null,
    UNSUPPORTED: null,
    MUTED: null,
    IN_PROGRESS: null,
    DISABLED: null,
});

export const ModalIdentifiers = {
    CHANNEL_INFO: 'channel_info',
    DELETE_CHANNEL: 'delete_channel',
    CHANNEL_NOTIFICATIONS: 'channel_notifications',
    CHANNEL_INVITE: 'channel_invite',
    CREATE_DM_CHANNEL: 'create_dm_channel',
    EDIT_CHANNEL_HEADER: 'edit_channel_header',
    DELETE_POST: 'delete_post',
};

export const UserStatuses = {
    OFFLINE: 'offline',
    AWAY: 'away',
    ONLINE: 'online',
    DND: 'dnd',
};

export const UserSearchOptions = {
    ALLOW_INACTIVE: 'allow_inactive',
    WITHOUT_TEAM: 'without_team',
};

export const SocketEvents = {
    POSTED: 'posted',
    POST_EDITED: 'post_edited',
    POST_DELETED: 'post_deleted',
    POST_UPDATED: 'post_updated',
    CHANNEL_CREATED: 'channel_created',
    CHANNEL_DELETED: 'channel_deleted',
    CHANNEL_UPDATED: 'channel_updated',
    CHANNEL_VIEWED: 'channel_viewed',
    CHANNEL_MEMBER_UPDATED: 'channel_member_updated',
    DIRECT_ADDED: 'direct_added',
    NEW_USER: 'new_user',
    ADDED_TO_TEAM: 'added_to_team',
    JOIN_TEAM: 'join_team',
    LEAVE_TEAM: 'leave_team',
    UPDATE_TEAM: 'update_team',
    DELETE_TEAM: 'delete_team',
    USER_ADDED: 'user_added',
    USER_REMOVED: 'user_removed',
    USER_UPDATED: 'user_updated',
    USER_ROLE_UPDATED: 'user_role_updated',
    MEMBERROLE_UPDATED: 'memberrole_updated',
    ROLE_ADDED: 'role_added',
    ROLE_REMOVED: 'role_removed',
    ROLE_UPDATED: 'role_updated',
    TYPING: 'typing',
    PREFERENCE_CHANGED: 'preference_changed',
    PREFERENCES_CHANGED: 'preferences_changed',
    PREFERENCES_DELETED: 'preferences_deleted',
    EPHEMERAL_MESSAGE: 'ephemeral_message',
    STATUS_CHANGED: 'status_change',
    HELLO: 'hello',
    WEBRTC: 'webrtc',
    REACTION_ADDED: 'reaction_added',
    REACTION_REMOVED: 'reaction_removed',
    EMOJI_ADDED: 'emoji_added',
    PLUGIN_ACTIVATED: 'plugin_activated',
    PLUGIN_DEACTIVATED: 'plugin_deactivated',
};

export const TutorialSteps = {
    INTRO_SCREENS: 0,
    POST_POPOVER: 1,
    CHANNEL_POPOVER: 2,
    MENU_POPOVER: 3,
    FINISHED: 999,
};

export const PostTypes = {
    JOIN_LEAVE: 'system_join_leave',
    JOIN_CHANNEL: 'system_join_channel',
    LEAVE_CHANNEL: 'system_leave_channel',
    ADD_TO_CHANNEL: 'system_add_to_channel',
    REMOVE_FROM_CHANNEL: 'system_remove_from_channel',
    ADD_REMOVE: 'system_add_remove',
    JOIN_TEAM: 'system_join_team',
    LEAVE_TEAM: 'system_leave_team',
    ADD_TO_TEAM: 'system_add_to_team',
    REMOVE_FROM_TEAM: 'system_remove_from_team',
    HEADER_CHANGE: 'system_header_change',
    DISPLAYNAME_CHANGE: 'system_displayname_change',
    PURPOSE_CHANGE: 'system_purpose_change',
    CHANNEL_DELETED: 'system_channel_deleted',
    FAKE_PARENT_DELETED: 'system_fake_parent_deleted',
    EPHEMERAL: 'system_ephemeral',
    EPHEMERAL_ADD_TO_CHANNEL: 'system_ephemeral_add_to_channel',
    REMOVE_LINK_PREVIEW: 'remove_link_preview',
};

export const StatTypes = keyMirror({
    TOTAL_USERS: null,
    TOTAL_PUBLIC_CHANNELS: null,
    TOTAL_PRIVATE_GROUPS: null,
    TOTAL_POSTS: null,
    TOTAL_TEAMS: null,
    TOTAL_FILE_POSTS: null,
    TOTAL_HASHTAG_POSTS: null,
    TOTAL_IHOOKS: null,
    TOTAL_OHOOKS: null,
    TOTAL_COMMANDS: null,
    TOTAL_SESSIONS: null,
    POST_PER_DAY: null,
    USERS_WITH_POSTS_PER_DAY: null,
    RECENTLY_ACTIVE_USERS: null,
    NEWLY_CREATED_USERS: null,
    TOTAL_WEBSOCKET_CONNECTIONS: null,
    TOTAL_MASTER_DB_CONNECTIONS: null,
    TOTAL_READ_DB_CONNECTIONS: null,
    DAILY_ACTIVE_USERS: null,
    MONTHLY_ACTIVE_USERS: null,
});

export const SearchTypes = keyMirror({
    SET_MODAL_SEARCH: null,
});

export const StorageTypes = keyMirror({
    SET_ITEM: null,
    REMOVE_ITEM: null,
    SET_GLOBAL_ITEM: null,
    REMOVE_GLOBAL_ITEM: null,
    CLEAR: null,
    ACTION_ON_GLOBAL_ITEMS_WITH_PREFIX: null,
    ACTION_ON_ITEMS_WITH_PREFIX: null,
    STORAGE_REHYDRATE: null,
});

export const StoragePrefixes = {
    EMBED_VISIBLE: 'isVisible_',
    COMMENT_DRAFT: 'comment_draft_',
    DRAFT: 'draft_',
    LOGOUT: '__logout__',
    LOGIN: '__login__',
    ANNOUNCEMENT: '__announcement__',
};

export const ErrorPageTypes = {
    LOCAL_STORAGE: 'local_storage',
    OAUTH_MISSING_CODE: 'oauth_missing_code',
    PAGE_NOT_FOUND: 'page_not_found',
    PERMALINK_NOT_FOUND: 'permalink_not_found',
};

export const JobTypes = {
    DATA_RETENTION: 'data_retention',
    ELASTICSEARCH_POST_INDEXING: 'elasticsearch_post_indexing',
    LDAP_SYNC: 'ldap_sync',
    MESSAGE_EXPORT: 'message_export',
};

export const JobStatuses = {
    PENDING: 'pending',
    IN_PROGRESS: 'in_progress',
    SUCCESS: 'success',
    ERROR: 'error',
    CANCEL_REQUESTED: 'cancel_requested',
    CANCELED: 'canceled',
};

export const ErrorBarTypes = {
    LICENSE_EXPIRING: 'error_bar.license_expiring',
    LICENSE_EXPIRED: 'error_bar.license_expired',
    LICENSE_PAST_GRACE: 'error_bar.past_grace',
    PREVIEW_MODE: 'error_bar.preview_mode',
    SITE_URL: 'error_bar.site_url',
    WEBSOCKET_PORT_ERROR: 'channel_loader.socketError',
};

export const FileTypes = {
    IMAGE: 'image',
    AUDIO: 'audio',
    VIDEO: 'video',
    SPREADSHEET: 'spreadsheet',
    CODE: 'code',
    WORD: 'word',
    PRESENTATION: 'presentation',
    PDF: 'pdf',
    PATCH: 'patch',
    SVG: 'svg',
    OTHER: 'other',
};

export const NotificationLevels = {
    DEFAULT: 'default',
    ALL: 'all',
    MENTION: 'mention',
    NONE: 'none',
};

export const NotificationSections = {
    MARK_UNREAD: 'markUnread',
    DESKTOP: 'desktop',
    PUSH: 'push',
    NONE: '',
};

export const RHSStates = {
    MENTION: 'mention',
    SEARCH: 'search',
    FLAG: 'flag',
    PIN: 'pin',
};

export const UploadStatuses = {
    LOADING: 'loading',
    COMPLETE: 'complete',
    DEFAULT: '',
};

export const GroupUnreadChannels = {
    DISABLED: 'disabled',
    DEFAULT_ON: 'default_on',
    DEFAULT_OFF: 'default_off',
};

export const Constants = {
    SettingsTypes,
    JobTypes,
    Preferences,
    SocketEvents,
    ActionTypes,
    WebrtcActionTypes,
    UserStatuses,
    UserSearchOptions,
    TutorialSteps,
    PostTypes,
    ErrorPageTypes,
    ErrorBarTypes,
    FileTypes,

    MAX_POST_VISIBILITY: 1000000,

    IGNORE_POST_TYPES: [PostTypes.JOIN_LEAVE, PostTypes.JOIN_TEAM, PostTypes.LEAVE_TEAM, PostTypes.JOIN_CHANNEL, PostTypes.LEAVE_CHANNEL, PostTypes.REMOVE_FROM_CHANNEL, PostTypes.ADD_REMOVE],

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null,
    }),

    StatTypes,
    STAT_MAX_ACTIVE_USERS: 20,
    STAT_MAX_NEW_USERS: 20,

    ScrollTypes: {
        FREE: 1,
        BOTTOM: 2,
        SIDEBBAR_OPEN: 3,
        NEW_MESSAGE: 4,
        POST: 5,
    },

    SPECIAL_MENTIONS: ['all', 'channel', 'here'],
    NOTIFY_ALL_MEMBERS: 5,
    DEFAULT_CHARACTER_LIMIT: 4000,
    IMAGE_TYPE_GIF: 'gif',
    IMAGE_TYPES: ['jpg', 'gif', 'bmp', 'png', 'jpeg'],
    AUDIO_TYPES: ['mp3', 'wav', 'wma', 'm4a', 'flac', 'aac', 'ogg', 'm4r'],
    VIDEO_TYPES: ['mp4', 'avi', 'webm', 'mkv', 'wmv', 'mpg', 'mov', 'flv'],
    PRESENTATION_TYPES: ['ppt', 'pptx'],
    SPREADSHEET_TYPES: ['xlsx', 'csv'],
    WORD_TYPES: ['doc', 'docx'],
    CODE_TYPES: ['as', 'applescript', 'osascript', 'scpt', 'bash', 'sh', 'zsh', 'clj', 'boot', 'cl2', 'cljc', 'cljs', 'cljs.hl', 'cljscm', 'cljx', 'hic', 'coffee', '_coffee', 'cake', 'cjsx', 'cson', 'iced', 'cpp', 'c', 'cc', 'h', 'c++', 'h++', 'hpp', 'cs', 'csharp', 'css', 'd', 'di', 'dart', 'delphi', 'dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm', 'diff', 'django', 'jinja', 'dockerfile', 'docker', 'erl', 'f90', 'f95', 'fsharp', 'fs', 'gcode', 'nc', 'go', 'groovy', 'handlebars', 'hbs', 'html.hbs', 'html.handlebars', 'hs', 'hx', 'java', 'jsp', 'js', 'jsx', 'json', 'jl', 'kt', 'ktm', 'kts', 'less', 'lisp', 'lua', 'mk', 'mak', 'md', 'mkdown', 'mkd', 'matlab', 'm', 'mm', 'objc', 'obj-c', 'ml', 'perl', 'pl', 'php', 'php3', 'php4', 'php5', 'php6', 'ps', 'ps1', 'pp', 'py', 'gyp', 'r', 'ruby', 'rb', 'gemspec', 'podspec', 'thor', 'irb', 'rs', 'scala', 'scm', 'sld', 'scss', 'st', 'styl', 'sql', 'swift', 'tex', 'txt', 'vbnet', 'vb', 'bas', 'vbs', 'v', 'veo', 'xml', 'html', 'xhtml', 'rss', 'atom', 'xsl', 'plist', 'yaml'],
    PDF_TYPES: ['pdf'],
    PATCH_TYPES: ['patch'],
    SVG_TYPES: ['svg'],
    ICON_FROM_TYPE: {
        audio: audioIcon,
        video: videoIcon,
        spreadsheet: excelIcon,
        presentation: pptIcon,
        pdf: pdfIcon,
        code: codeIcon,
        word: wordIcon,
        patch: patchIcon,
        other: genericIcon,
    },
    ICON_NAME_FROM_TYPE: {
        audio: 'audio',
        video: 'video',
        spreadsheet: 'excel',
        presentation: 'ppt',
        pdf: 'pdf',
        code: 'code',
        word: 'word',
        patch: 'patch',
        other: 'generic',
    },
    MAX_DISPLAY_FILES: 5,
    MAX_UPLOAD_FILES: 5,
    MAX_FILENAME_LENGTH: 35,
    THUMBNAIL_WIDTH: 128,
    THUMBNAIL_HEIGHT: 100,
    WEB_VIDEO_WIDTH: 640,
    WEB_VIDEO_HEIGHT: 480,
    MOBILE_VIDEO_WIDTH: 480,
    MOBILE_VIDEO_HEIGHT: 360,
    MOBILE_SCREEN_WIDTH: 768,
    SCROLL_DELAY: 2000,
    SCROLL_PAGE_FRACTION: 3,
    DEFAULT_CHANNEL: 'town-square',
    DEFAULT_CHANNEL_UI_NAME: 'Town Square',
    OFFTOPIC_CHANNEL: 'off-topic',
    OFFTOPIC_CHANNEL_UI_NAME: 'Off-Topic',
    GITLAB_SERVICE: 'gitlab',
    GOOGLE_SERVICE: 'google',
    OFFICE365_SERVICE: 'office365',
    EMAIL_SERVICE: 'email',
    LDAP_SERVICE: 'ldap',
    SAML_SERVICE: 'saml',
    USERNAME_SERVICE: 'username',
    SIGNIN_CHANGE: 'signin_change',
    PASSWORD_CHANGE: 'password_change',
    SIGNIN_VERIFIED: 'verified',
    SESSION_EXPIRED: 'expired',
    POST_CHUNK_SIZE: 60,
    PROFILE_CHUNK_SIZE: 100,
    POST_FOCUS_CONTEXT_RADIUS: 10,
    POST_LOADING: 'loading',
    POST_FAILED: 'failed',
    POST_DELETED: 'deleted',
    POST_UPDATED: 'updated',
    SYSTEM_MESSAGE_PREFIX: 'system_',
    SYSTEM_MESSAGE_PROFILE_IMAGE: logoImage,
    RESERVED_TEAM_NAMES: [
        'signup',
        'login',
        'admin',
        'channel',
        'post',
        'api',
        'oauth',
    ],
    RESERVED_USERNAMES: [
        'valet',
        'all',
        'channel',
        'here',
        'matterbot',
    ],
    MONTHS: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    MAX_DMS: 20,
    MAX_USERS_IN_GM: 8,
    MIN_USERS_IN_GM: 3,
    MAX_CHANNEL_POPOVER_COUNT: 100,
    DM_CHANNEL: 'D',
    GM_CHANNEL: 'G',
    OPEN_CHANNEL: 'O',
    PRIVATE_CHANNEL: 'P',
    INVITE_TEAM: 'I',
    OPEN_TEAM: 'O',
    MAX_POST_LEN: 4000,
    EMOJI_SIZE: 16,
    THEMES: {
        default: {
            type: 'Mattermost',
            sidebarBg: '#145dbf',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#4578bf',
            sidebarTextActiveBorder: '#579eff',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#1153ab',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#06d6a0',
            awayIndicator: '#ffbc42',
            dndIndicator: '#f74343',
            mentionBg: '#ffffff',
            mentionColor: '#145dbf',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#3d3c40',
            newMessageSeparator: '#ff8800',
            linkColor: '#2389d7',
            buttonBg: '#166de0',
            buttonColor: '#ffffff',
            errorTextColor: '#fd5960',
            mentionHighlightBg: '#ffe577',
            mentionHighlightLink: '#166de0',
            codeTheme: 'github',
            image: mattermostThemeImage,
        },
        organization: {
            type: 'Organization',
            sidebarBg: '#2071a7',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#136197',
            sidebarTextActiveBorder: '#7ab0d6',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#2f81b7',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#7dbe00',
            awayIndicator: '#dcbd4e',
            dndIndicator: '#ff6a6a',
            mentionBg: '#fbfbfb',
            mentionColor: '#2071f7',
            centerChannelBg: '#f2f4f8',
            centerChannelColor: '#333333',
            newMessageSeparator: '#ff8800',
            linkColor: '#2f81b7',
            buttonBg: '#1dacfc',
            buttonColor: '#ffffff',
            errorTextColor: '#a94442',
            mentionHighlightBg: '#f3e197',
            mentionHighlightLink: '#2f81b7',
            codeTheme: 'github',
            image: defaultThemeImage,
        },
        mattermostDark: {
            type: 'Mattermost Dark',
            sidebarBg: '#1b2c3e',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#4a5664',
            sidebarTextActiveBorder: '#66b9a7',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#1b2c3e',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#65dcc8',
            awayIndicator: '#c1b966',
            dndIndicator: '#e81023',
            mentionBg: '#b74a4a',
            mentionColor: '#ffffff',
            centerChannelBg: '#2f3e4e',
            centerChannelColor: '#dddddd',
            newMessageSeparator: '#5de5da',
            linkColor: '#a4ffeb',
            buttonBg: '#4cbba4',
            buttonColor: '#ffffff',
            errorTextColor: '#ff6461',
            mentionHighlightBg: '#984063',
            mentionHighlightLink: '#a4ffeb',
            codeTheme: 'solarized-dark',
            image: mattermostDarkThemeImage,
        },
        windows10: {
            type: 'Windows Dark',
            sidebarBg: '#171717',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#302e30',
            sidebarTextActiveBorder: '#196caf',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#1f1f1f',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#399fff',
            awayIndicator: '#c1b966',
            dndIndicator: '#e81023',
            mentionBg: '#0177e7',
            mentionColor: '#ffffff',
            centerChannelBg: '#1f1f1f',
            centerChannelColor: '#dddddd',
            newMessageSeparator: '#cc992d',
            linkColor: '#0d93ff',
            buttonBg: '#0177e7',
            buttonColor: '#ffffff',
            errorTextColor: '#ff6461',
            mentionHighlightBg: '#784098',
            mentionHighlightLink: '#a4ffeb',
            codeTheme: 'monokai',
            image: windows10ThemeImage,
        },
    },
    THEME_ELEMENTS: [
        {
            group: 'sidebarElements',
            id: 'sidebarBg',
            uiName: 'Sidebar BG',
        },
        {
            group: 'sidebarElements',
            id: 'sidebarText',
            uiName: 'Sidebar Text',
        },
        {
            group: 'sidebarElements',
            id: 'sidebarHeaderBg',
            uiName: 'Sidebar Header BG',
        },
        {
            group: 'sidebarElements',
            id: 'sidebarHeaderTextColor',
            uiName: 'Sidebar Header Text',
        },
        {
            group: 'sidebarElements',
            id: 'sidebarUnreadText',
            uiName: 'Sidebar Unread Text',
        },
        {
            group: 'sidebarElements',
            id: 'sidebarTextHoverBg',
            uiName: 'Sidebar Text Hover BG',
        },
        {
            group: 'sidebarElements',
            id: 'sidebarTextActiveBorder',
            uiName: 'Sidebar Text Active Border',
        },
        {
            group: 'sidebarElements',
            id: 'sidebarTextActiveColor',
            uiName: 'Sidebar Text Active Color',
        },
        {
            group: 'sidebarElements',
            id: 'onlineIndicator',
            uiName: 'Online Indicator',
        },
        {
            group: 'sidebarElements',
            id: 'awayIndicator',
            uiName: 'Away Indicator',
        },
        {
            group: 'sidebarElements',
            id: 'dndIndicator',
            uiName: 'Away Indicator',
        },
        {
            group: 'sidebarElements',
            id: 'mentionBg',
            uiName: 'Mention Jewel BG',
        },
        {
            group: 'sidebarElements',
            id: 'mentionColor',
            uiName: 'Mention Jewel Text',
        },
        {
            group: 'centerChannelElements',
            id: 'centerChannelBg',
            uiName: 'Center Channel BG',
        },
        {
            group: 'centerChannelElements',
            id: 'centerChannelColor',
            uiName: 'Center Channel Text',
        },
        {
            group: 'centerChannelElements',
            id: 'newMessageSeparator',
            uiName: 'New Message Separator',
        },
        {
            group: 'centerChannelElements',
            id: 'errorTextColor',
            uiName: 'Error Text Color',
        },
        {
            group: 'centerChannelElements',
            id: 'mentionHighlightBg',
            uiName: 'Mention Highlight BG',
        },
        {
            group: 'linkAndButtonElements',
            id: 'linkColor',
            uiName: 'Link Color',
        },
        {
            group: 'centerChannelElements',
            id: 'mentionHighlightLink',
            uiName: 'Mention Highlight Link',
        },
        {
            group: 'linkAndButtonElements',
            id: 'buttonBg',
            uiName: 'Button BG',
        },
        {
            group: 'linkAndButtonElements',
            id: 'buttonColor',
            uiName: 'Button Text',
        },
        {
            group: 'centerChannelElements',
            id: 'codeTheme',
            uiName: 'Code Theme',
            themes: [
                {
                    id: 'solarized-dark',
                    uiName: 'Solarized Dark',
                    cssURL: solarizedDarkCSS,
                    iconURL: solarizedDarkIcon,
                },
                {
                    id: 'solarized-light',
                    uiName: 'Solarized Light',
                    cssURL: solarizedLightCSS,
                    iconURL: solarizedLightIcon,
                },
                {
                    id: 'github',
                    uiName: 'GitHub',
                    cssURL: githubCSS,
                    iconURL: githubIcon,
                },
                {
                    id: 'monokai',
                    uiName: 'Monokai',
                    cssURL: monokaiCSS,
                    iconURL: monokaiIcon,
                },
            ],
        },
    ],
    DEFAULT_CODE_THEME: 'github',
    KeyCodes: {
        BACKSPACE: ['Backspace', 8],
        TAB: ['Tab', 9],
        ENTER: ['Enter', 13],
        SHIFT: ['Shift', 16],
        CTRL: ['Control', 17],
        ALT: ['Alt', 18],
        CAPS_LOCK: ['CapsLock', 20],
        ESCAPE: ['Escape', 27],
        SPACE: [' ', 32],
        PAGE_UP: ['PageUp', 33],
        PAGE_DOWN: ['PageDown', 34],
        END: ['End', 35],
        HOME: ['Home', 36],
        LEFT: ['ArrowLeft', 37],
        UP: ['ArrowUp', 38],
        RIGHT: ['ArrowRight', 39],
        DOWN: ['ArrowDown', 40],
        INSERT: ['Insert', 45],
        DELETE: ['Delete', 46],
        ZERO: ['0', 48],
        ONE: ['1', 49],
        TWO: ['2', 50],
        THREE: ['3', 51],
        FOUR: ['4', 52],
        FIVE: ['5', 53],
        SIX: ['6', 54],
        SEVEN: ['7', 55],
        EIGHT: ['8', 56],
        NINE: ['9', 57],
        A: ['a', 65],
        B: ['b', 66],
        C: ['c', 67],
        D: ['d', 68],
        E: ['e', 69],
        F: ['f', 70],
        G: ['g', 71],
        H: ['h', 72],
        I: ['i', 73],
        J: ['j', 74],
        K: ['k', 75],
        L: ['l', 76],
        M: ['m', 77],
        N: ['n', 78],
        O: ['o', 79],
        P: ['p', 80],
        Q: ['q', 81],
        R: ['r', 82],
        S: ['s', 83],
        T: ['t', 84],
        U: ['u', 85],
        V: ['v', 86],
        W: ['w', 87],
        X: ['x', 88],
        Y: ['y', 89],
        Z: ['z', 90],
        CMD: ['Meta', 91],
        MENU: ['ContextMenu', 93],
        NUMPAD_0: ['0', 96],
        NUMPAD_1: ['1', 97],
        NUMPAD_2: ['2', 98],
        NUMPAD_3: ['3', 99],
        NUMPAD_4: ['4', 100],
        NUMPAD_5: ['5', 101],
        NUMPAD_6: ['6', 102],
        NUMPAD_7: ['7', 103],
        NUMPAD_8: ['8', 104],
        NUMPAD_9: ['9', 105],
        MULTIPLY: ['*', 106],
        ADD: ['+', 107],
        SUBTRACT: ['-', 109],
        DECIMAL: ['.', 110],
        DIVIDE: ['/', 111],
        F1: ['F1', 112],
        F2: ['F2', 113],
        F3: ['F3', 114],
        F4: ['F4', 115],
        F5: ['F5', 116],
        F6: ['F6', 117],
        F7: ['F7', 118],
        F8: ['F8', 119],
        F9: ['F9', 120],
        F10: ['F10', 121],
        F11: ['F11', 122],
        F12: ['F12', 123],
        NUM_LOCK: ['NumLock', 144],
        SEMICOLON: [';', 186],
        EQUAL: ['=', 187],
        COMMA: [',', 188],
        DASH: ['-', 189],
        PERIOD: ['.', 190],
        FORWARD_SLASH: ['/', 191],
        TILDE: ['~', 192],
        OPEN_BRACKET: ['[', 219],
        BACK_SLASH: ['\\', 220],
        CLOSE_BRACKET: [']', 221],
    },
    CODE_PREVIEW_MAX_FILE_SIZE: 500000, // 500 KB
    HighlightedLanguages: {
        actionscript: {name: 'ActionScript', extensions: ['as'], aliases: ['as', 'as3']},
        applescript: {name: 'AppleScript', extensions: ['applescript', 'osascript', 'scpt']},
        bash: {name: 'Bash', extensions: ['bash', 'sh', 'zsh']},
        clojure: {name: 'Clojure', extensions: ['clj', 'boot', 'cl2', 'cljc', 'cljs', 'cljs.hl', 'cljscm', 'cljx', 'hic']},
        coffeescript: {name: 'CoffeeScript', extensions: ['coffee', '_coffee', 'cake', 'cjsx', 'cson', 'iced'], aliases: ['coffee', 'coffee-script']},
        cpp: {name: 'C/C++', extensions: ['cpp', 'c', 'cc', 'h', 'c++', 'h++', 'hpp'], aliases: ['c++']},
        cs: {name: 'C#', extensions: ['cs', 'csharp'], aliases: ['c#', 'csharp']},
        css: {name: 'CSS', extensions: ['css']},
        d: {name: 'D', extensions: ['d', 'di'], aliases: ['dlang']},
        dart: {name: 'Dart', extensions: ['dart']},
        delphi: {name: 'Delphi', extensions: ['delphi', 'dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm']},
        diff: {name: 'Diff', extensions: ['diff', 'patch'], aliases: ['patch', 'udiff']},
        django: {name: 'Django', extensions: ['django', 'jinja']},
        dockerfile: {name: 'Dockerfile', extensions: ['dockerfile', 'docker'], aliases: ['docker']},
        erlang: {name: 'Erlang', extensions: ['erl'], aliases: ['erl']},
        fortran: {name: 'Fortran', extensions: ['f90', 'f95']},
        fsharp: {name: 'F#', extensions: ['fsharp', 'fs']},
        gcode: {name: 'G-Code', extensions: ['gcode', 'nc']},
        go: {name: 'Go', extensions: ['go'], aliases: ['golang']},
        groovy: {name: 'Groovy', extensions: ['groovy']},
        handlebars: {name: 'Handlebars', extensions: ['handlebars', 'hbs', 'html.hbs', 'html.handlebars'], aliases: ['hbs', 'mustache']},
        haskell: {name: 'Haskell', extensions: ['hs'], aliases: ['hs']},
        haxe: {name: 'Haxe', extensions: ['hx']},
        java: {name: 'Java', extensions: ['java', 'jsp']},
        javascript: {name: 'JavaScript', extensions: ['js', 'jsx'], aliases: ['js']},
        json: {name: 'JSON', extensions: ['json']},
        julia: {name: 'Julia', extensions: ['jl'], aliases: ['jl']},
        kotlin: {name: 'Kotlin', extensions: ['kt', 'ktm', 'kts']},
        less: {name: 'Less', extensions: ['less']},
        lisp: {name: 'Lisp', extensions: ['lisp']},
        lua: {name: 'Lua', extensions: ['lua']},
        makefile: {name: 'Makefile', extensions: ['mk', 'mak'], aliases: ['make', 'mf', 'gnumake', 'bsdmake']},
        markdown: {name: 'Markdown', extensions: ['md', 'mkdown', 'mkd'], aliases: ['md', 'mkd']},
        matlab: {name: 'Matlab', extensions: ['matlab', 'm'], aliases: ['m']},
        objectivec: {name: 'Objective C', extensions: ['mm', 'objc', 'obj-c'], aliases: ['objective_c', 'objc']},
        ocaml: {name: 'OCaml', extensions: ['ml']},
        perl: {name: 'Perl', extensions: ['perl', 'pl'], aliases: ['pl']},
        php: {name: 'PHP', extensions: ['php', 'php3', 'php4', 'php5', 'php6'], aliases: ['php3', 'php4', 'php5']},
        powershell: {name: 'PowerShell', extensions: ['ps', 'ps1'], aliases: ['posh']},
        puppet: {name: 'Puppet', extensions: ['pp'], aliases: ['pp']},
        python: {name: 'Python', extensions: ['py', 'gyp'], aliases: ['py']},
        r: {name: 'R', extensions: ['r'], aliases: ['r', 's']},
        ruby: {name: 'Ruby', extensions: ['ruby', 'rb', 'gemspec', 'podspec', 'thor', 'irb'], aliases: ['rb']},
        rust: {name: 'Rust', extensions: ['rs'], aliases: ['rs']},
        scala: {name: 'Scala', extensions: ['scala']},
        scheme: {name: 'Scheme', extensions: ['scm', 'sld']},
        scss: {name: 'SCSS', extensions: ['scss']},
        smalltalk: {name: 'Smalltalk', extensions: ['st'], aliases: ['st', 'squeak']},
        sql: {name: 'SQL', extensions: ['sql']},
        stylus: {name: 'Stylus', extensions: ['styl'], aliases: ['styl']},
        swift: {name: 'Swift', extensions: ['swift']},
        tex: {name: 'TeX', extensions: ['tex'], aliases: ['latex']},
        text: {name: 'Text', extensions: ['txt']},
        vbnet: {name: 'VB.Net', extensions: ['vbnet', 'vb', 'bas'], aliases: ['vb', 'visualbasic']},
        vbscript: {name: 'VBScript', extensions: ['vbs']},
        verilog: {name: 'Verilog', extensions: ['v', 'veo']},
        xml: {name: 'HTML, XML', extensions: ['xml', 'html', 'xhtml', 'rss', 'atom', 'xsl', 'plist']},
        yaml: {name: 'YAML', extensions: ['yaml'], aliases: ['yml']},
    },
    PostsViewJumpTypes: {
        BOTTOM: 1,
        POST: 2,
        SIDEBAR_OPEN: 3,
    },
    NotificationPrefs: {
        MENTION: 'mention',
    },
    Integrations: {
        COMMAND: 'commands',
        PAGE_SIZE: '10000',
        START_PAGE_NUM: 0,
        INCOMING_WEBHOOK: 'incoming_webhooks',
        OUTGOING_WEBHOOK: 'outgoing_webhooks',
        OAUTH_APP: 'oauth2-apps',
    },
    FeatureTogglePrefix: 'feature_enabled_',
    PRE_RELEASE_FEATURES: {
        MARKDOWN_PREVIEW: {
            label: 'markdown_preview', // github issue: https://github.com/mattermost/platform/pull/1389
            description: 'Show markdown preview option in message input box',
        },
    },
    OVERLAY_TIME_DELAY_SMALL: 100,
    OVERLAY_TIME_DELAY: 400,
    WEBRTC_TIME_DELAY: 750,
    WEBRTC_CLEAR_ERROR_DELAY: 15000,
    DEFAULT_MAX_USERS_PER_TEAM: 50,
    DEFAULT_MAX_CHANNELS_PER_TEAM: 2000,
    DEFAULT_MAX_NOTIFICATIONS_PER_CHANNEL: 1000,
    MIN_TEAMNAME_LENGTH: 2,
    MAX_TEAMNAME_LENGTH: 15,
    MAX_TEAMDESCRIPTION_LENGTH: 50,
    MIN_CHANNELNAME_LENGTH: 2,
    MAX_CHANNELNAME_LENGTH: 22,
    MIN_USERNAME_LENGTH: 3,
    MAX_USERNAME_LENGTH: 22,
    MAX_NICKNAME_LENGTH: 22,
    MIN_PASSWORD_LENGTH: 5,
    MAX_PASSWORD_LENGTH: 64,
    MAX_POSITION_LENGTH: 128,
    MIN_TRIGGER_LENGTH: 1,
    MAX_TRIGGER_LENGTH: 128,
    MAX_SITENAME_LENGTH: 30,
    MIN_HASHTAG_LINK_LENGTH: 3,
    CHANNEL_SCROLL_ADJUSTMENT: 100,
    EMOJI_PATH: '/static/emoji',
    RECENT_EMOJI_KEY: 'recentEmojis',
    DEFAULT_WEBHOOK_LOGO: logoWebhook,
    MHPNS: 'https://push.mattermost.com',
    MTPNS: 'http://push-test.mattermost.com',
    BOT_NAME: 'BOT',
    MAX_PREV_MSGS: 100,
    POST_COLLAPSE_TIMEOUT: 1000 * 60 * 5, // five minutes
    PERMISSIONS_ALL: 'all',
    PERMISSIONS_CHANNEL_ADMIN: 'channel_admin',
    PERMISSIONS_TEAM_ADMIN: 'team_admin',
    PERMISSIONS_SYSTEM_ADMIN: 'system_admin',
    PERMISSIONS_DELETE_POST_ALL: 'all',
    PERMISSIONS_DELETE_POST_TEAM_ADMIN: 'team_admin',
    PERMISSIONS_DELETE_POST_SYSTEM_ADMIN: 'system_admin',
    ALLOW_EDIT_POST_ALWAYS: 'always',
    ALLOW_EDIT_POST_NEVER: 'never',
    ALLOW_EDIT_POST_TIME_LIMIT: 'time_limit',
    UNSET_POST_EDIT_TIME_LIMIT: -1,
    MENTION_CHANNELS: 'mention.channels',
    MENTION_MORE_CHANNELS: 'mention.morechannels',
    MENTION_UNREAD_CHANNELS: 'mention.unread.channels',
    MENTION_MEMBERS: 'mention.members',
    MENTION_NONMEMBERS: 'mention.nonmembers',
    MENTION_SPECIAL: 'mention.special',
    DEFAULT_NOTIFICATION_DURATION: 5000,
    STATUS_INTERVAL: 60000,
    AUTOCOMPLETE_TIMEOUT: 100,
    ANIMATION_TIMEOUT: 1000,
    SEARCH_TIMEOUT_MILLISECONDS: 100,
    DIAGNOSTICS_SEGMENT_KEY: 'fwb7VPbFeQ7SKp3wHm1RzFUuXZudqVok',
    TEST_ID_COUNT: 0,
    CENTER: 'center',
    RHS: 'rhs',
    RHS_ROOT: 'rhsroot',
    TEAMMATE_NAME_DISPLAY: {
        SHOW_USERNAME: 'username',
        SHOW_NICKNAME_FULLNAME: 'nickname_full_name',
        SHOW_FULLNAME: 'full_name',
    },
    SEARCH_POST: 'searchpost',
    CHANNEL_ID_LENGTH: 26,
    TRANSPARENT_PIXEL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
    PREV_CHANNEL_KEY: 'team_prev_channel:',
};

export default Constants;
