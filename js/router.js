export class Router{
  routes = {}

  add(routename, page){
    this.routes[routename] = page
  }
  route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }

  handle(){
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['home']

    fetch(route)
    .then(data => data.text())
    .then(page => {
      document.querySelector('.content').innerHTML = page
    })
  }


}
