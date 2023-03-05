const ElSiteHeaderToggler = document.querySelector(".site-header__toggler")
const ElSiteNav = document.querySelector(".site-nav")

if (ElSiteHeaderToggler) {
  ElSiteHeaderToggler.addEventListener('click', function () {
    ElSiteNav.classList.toggle("site-nav__open")
  })
}