//action that adds feature to car state 
export const ADD_FEATURE = "ADD_FEATURE";
export const addFeature = (newFeature) => {
    console.log('in action: ', newFeature)
    return {
        type: ADD_FEATURE,
        payload: newFeature
    }
}