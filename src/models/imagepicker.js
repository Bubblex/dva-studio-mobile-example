export default {
    namespace: 'imagepicker',
    state: {
        images: [],
    },
    reducers: {
        saveUploadImage(state, { image }) {
            const stateCopy = state
            stateCopy.images.push({ url: image })
            return {
                ...stateCopy,
            }
        },

        removeUploadImage(state, { index }) {
            const stateCopy = state
            stateCopy.images.splice(index, 1)
            return {
                ...stateCopy,
            }
        },
    },
    effects: {},
    subscriptions: {},
}
