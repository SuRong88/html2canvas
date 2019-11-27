import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [{
		path: "/",
		redirect: "index",
	}, {
		path: "/index",
		name: "index",
		component: resolve => require(['views/index'], resolve)
	},
	{
		path: "/promise",
		name: "promise",
		component: resolve => require(['views/promise'], resolve)
	},
	{
		path: '/experience',
		name: 'experience',
		component: resolve => require(['views/experience'], resolve)
	}
];
const router = new VueRouter({
	mode:'history',
	routes
});
router.afterEach((to,from)=>{
	window.scrollTo(0,0)
})
// 加入百度统计
router.beforeEach((to, from, next) => {
  if (_hmt) {
    if (to.path) {
      window._hmt.push(['_trackPageview', '/#' + to.fullPath])
    }
  }
  next()
})
export default router;
