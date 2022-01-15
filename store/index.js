export const state = () => ({
  languageMarker: true, // Английский по-умолчанию
  languageIsInit: false, // Загорается, когда вопрос с языком решён
  projectsOn: false, // Меню с проектами закрыто по-умолчанию
  showImg: null,
})

export const mutations = {
  changeLanguageMarker(state) {
    state.languageMarker = !state.languageMarker
  },
  changeLanguageIsInitMarker(state) {
    state.languageIsInit = !state.languageIsInit
  },
  changeProjectsMarker(state) {
    state.projectsOn = !state.projectsOn
  },
  changeProjectsMarkerOnFalse(state) {
    state.projectsOn = false
  },
  changeShowImg(state, imgUrl) {
    state.showImg = imgUrl
  },
}
