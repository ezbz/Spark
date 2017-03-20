var get_default_enum = function(enu) {
    return enu.find(function(e) {
        return e.default;
    }).id;
};

var get_enum = function(enu) {
    return enu.map(function(e) {
        return e.id;
    })
};

var user_genders = [
    {id: 'male'},
    {id: 'female'},
    {id: 'other', default: true}
];

var npo_membership_statuses = [
    {id: 'not_member', default: true}, 
    {id: 'request_approved'}, 
    {id: 'member_paid'}, 
    {id: 'member_should_pay'}, 
    {id: 'banned'}, 
    {id: 'request_rejected'}, 
    {id: 'applied_for_membership'}
];

module.exports = {

    // -- system constant --
    // note: Future release will change the event_id
    CURRENT_EVENT_ID: "MIDBURN2017",

    // -- table names --
    
    USERS_TABLE_NAME: "users",
    PAYMENTS_TABLE_NAME: "payments",
    NPO_MEMBERS_TABLE_NAME: "npo_members",
    CAMPS_TABLE_NAME: "camps",
    CAMP_DETAILS_TABLE_NAME: "camp_details",
    CAMP_MEMBERS_TABLE_NAME: "camp_members",
    DRUPAL_USERS_TABLE_NAME: "drupal_users",

    VOL_DEPARTMENTS_TABLE_NAME: "vol_departments",
    VOLUNTEERS_TABLE_NAME: "volunteers",
    VOL_DEPARTMENT_ROLES_TABLE_NAME: "vol_departments_roles",
    VOL_TYPES_IN_SHIFT_TABLE_NAME: "vol_types_in_shift",
    VOL_SHIFTS_TABLE_NAME: "vol_shifts",
    VOL_SCHEDULE_TABLE_NAME: "vol_schedule",

    // -- enums --
    
    USER_GENDERS: get_enum(user_genders), 
    USER_GENDERS_DEFAULT: get_default_enum(user_genders),
    
    NPO_MEMBERSHIP_STATUSES: get_enum(npo_membership_statuses), 
    NPO_MEMBERSHIP_STATUSES_DEFAULT: get_default_enum(npo_membership_statuses),
    
    CAMP_TYPES: ['food', 'drinking/bar', 'music', 'workshops', 'art-supporting', 'other'],
    
    CAMP_STATUSES: ['deleted', 'open', 'closed', 'inactive'],
    
    CAMP_ACTIVITY_TIMES: ['morning', 'noon' ,'evening' ,'night'],
    
    CAMP_NOISE_LEVELS: ['quiet' ,'medium' ,'noisy' ,'very noisy'],

    CAMP_MEMBER_STATUS: ['approved','pending','mgr_pending','rejected'],

};