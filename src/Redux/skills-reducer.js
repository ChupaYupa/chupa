export const SET_SKILL = "SET_SKILL";


const initialState = {
    skills: [
        { "id": 1, "title": "One", photo: "https://dmitro.pro/wp-content/uploads/2018/03/js-logo.png"},
        { "id": 2, "title": "Two", photo: "https://d2xzmw6cctk25h.cloudfront.net/post/1403/og_cover_image/a0453d83d3f29be288671047596cb546"},
        { "id": 3, "title": "Three", photo: "https://itproger.com/img/courses/1476977488.jpg"}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SKILL:
            return {
                ...state, skills: action.skills.map(tl => ({
                    ...tl }))
            }
    }
    return state
    }
export default reducer;