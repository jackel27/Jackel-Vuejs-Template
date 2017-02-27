export default [
  {
    path: '/',
    name: 'landing',
    component: require('components/Landing')
  },
  // examples below..
  // {
  //   path: '/somesubpage',
  //   name: 'some-sub-page',
  //   component: require('components/SomeSubPage')
  // },
  // {
  //   path: '/invitation/:id',
  //   name: 'event-invitation',
  //   component: require('components/EventInvitation')
  // },
  {
    path: '*',
    redirect: '/'
  }
]
