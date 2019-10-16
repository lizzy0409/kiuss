import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'

//Делим код на чанки, которые потом будем подгружать по запросу
const Hello = r => require.ensure([], () => r(require('./components/hello.vue')))
const About = r => require.ensure([], () => r(require('./components/about.vue')))
const TheApexOfCulture = r => require.ensure([], () => r(require('./components/the_apex_of_culture.vue')))
const ThePalaceOfCulture = r => require.ensure([], () => r(require('./components/the_palace_of_culture.vue')))
const Treads = r => require.ensure([], () => r(require('./components/threads.vue')))
const SimulationWalfare = r => require.ensure([], () => r(require('./components/simulation_walfare.vue')))
const StrangePosters = r => require.ensure([], () => r(require('./components/strange_posters.vue')))
const Neosuprematism = r => require.ensure([], () => r(require('./components/neosuprematism.vue')))
const Cursors = r => require.ensure([], () => r(require('./components/cursors.vue')))
const DisposableTableware = r => require.ensure([], () => r(require('./components/disposable_tableware.vue')))
const Scaffolding = r => require.ensure([], () => r(require('./components/scaffolding.vue')))
const MigrantWorkersUnderProtection = r => require.ensure([], () => r(require('./components/migrant_workers_under_protection.vue')))
const WhenTheTrafficLightsAreOff = r => require.ensure([], () => r(require('./components/when_the_traffic_lights_are_off.vue')))
const ToJestFilm = r => require.ensure([], () => r(require('./components/to_jest_film.vue')))
const DriftFest = r => require.ensure([], () => r(require('./components/drift_fest.vue')))
const AbsurdInscriptions = r => require.ensure([], () => r(require('./components/absurd_inscriptions.vue')))
const MonotonousObjects = r => require.ensure([], () => r(require('./components/monotonous_objects.vue')))
const HereWasVasya = r => require.ensure([], () => r(require('./components/here_was_vasya.vue')))
const Circles = r => require.ensure([], () => r(require('./components/circles.vue')))
const DadaPosters = r => require.ensure([], () => r(require('./components/dada_posters.vue')))
const Other = r => require.ensure([], () => r(require('./components/other.vue')))
const CasualPasserby = r => require.ensure([], () => r(require('./components/casual_passerby.vue')))
const AnotherView = r => require.ensure([], () => r(require('./components/another_view.vue')))
const TheArkOfCulture = r => require.ensure([], () => r(require('./components/the_ark_of_culture.vue')))
const ConcreteAround = r => require.ensure([], () => r(require('./components/concrete_around.vue')))

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueLazyload, {
    preLoad: 9.9,
    loading: 'src/assets/favicons/loading.png',
    attempt: 1
  })

var router = new VueRouter({
    //Привязываем маршруты к компонентам
    routes: [
        {path: '/', redirect: '/hello' },
        {path: '/hello', component: Hello},
        {path: '/about', component: About},
        {path: '/the_high_of_culture', component: TheApexOfCulture},
        {path: '/the_mansion_of_culture', component: ThePalaceOfCulture},
        {path: '/threads', component: Treads},
        {path: '/simulation_of_welfare', component: SimulationWalfare},
        {path: '/strange_posters', component: StrangePosters},
        {path: '/neosuprematism', component: Neosuprematism},
        {path: '/screen_painting', component: Cursors},
        {path: '/disposable_tableware', component: DisposableTableware},
        {path: '/reserved_scaffolding', component: Scaffolding},
        {path: '/gastarbeiters_under_protection', component: MigrantWorkersUnderProtection},
        {path: '/when_the_traffic_lights_are_off', component: WhenTheTrafficLightsAreOff},
        {path: '/to_jest_film', component: ToJestFilm},
        {path: '/derive_fest', component: DriftFest},
        {path: '/absurd_inscriptions', component: AbsurdInscriptions},
        {path: '/monotonous_objects', component: MonotonousObjects},
        {path: '/here_was_vasya', component: HereWasVasya},
        {path: '/circles', component: Circles},
        {path: '/dada_posters', component: DadaPosters},
        {path: '/other', component: Other},
        {path: '/casual_passerby', component: CasualPasserby},
        {path: '/another_view', component: AnotherView},
        {path: '/the_ark_of_culture', component: TheArkOfCulture},
        {path: '/concrete_around', component: ConcreteAround}
    ]
})

new Vue({
  el: '#app',
  router: router
})

