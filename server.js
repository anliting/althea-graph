let g=require('./server/g')
module.exports=althea=>{
    althea.addPagemodule(env=>{
        let path=env.analyze.request.parsedUrl.pathname.split('/')
        return path[1]=='g'||path[1]=='graph'
    },g)
}
