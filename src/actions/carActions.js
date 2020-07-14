//action that adds feature to car state 
export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (newFeature) => {
    return {
        type: ADD_FEATURE,
        payload: newFeature
    }
}

//action that remove added features
export const REMOVE_ADD_FEATURE = "REMOVE_ADD_FEATURE";
export const removeAddFeature = (featureId) => {
    return {
        type: REMOVE_ADD_FEATURE,
        payload: featureId
    }
}
