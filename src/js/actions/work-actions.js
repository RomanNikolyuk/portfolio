const requestWork = () => {
    return {
        type: 'work-requested'
    };
};

const receivedWork = (payload) => {
    return {
        type: 'work-received',
        payload
    };
};

const workChange = (newWorkAlias) => {
    return {
        type: 'work-change',
        payload: newWorkAlias
    };
};

const workAliasChange = (newNewWorkAlias) => {
    return {
        type: 'work-alias-change',
        payload: newNewWorkAlias
    };
};

const worksRequested = () => {
    return {
        type: 'works-requested'
    };
};

const worksReceived = (works) => {
    return {
        type: 'works-received',
        payload: works
    };
};

export {
    requestWork,
    receivedWork,
    workChange,
    workAliasChange,
    worksRequested,
    worksReceived
};