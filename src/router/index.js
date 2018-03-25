import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Class from "@/components/Class";
import Find from "@/components/Find";
import User from "@/components/User";
import Article from "@/components/Article";

Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      redirect: "/home"
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/class",
      name: "Class",
      component: Class
    },
    {
      path: "/find",
      name: "Find",
      component: Find
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
     {
        path:"/article/:id",
        name:"Article",
        component:Article
    }
  ]
})
