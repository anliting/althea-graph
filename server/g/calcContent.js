module.exports=calcContent
function calcContent(env){
    return`
<!doctype html>
<title>Graph</title>
<base href=${env.config.root}>
<meta name=viewport content='width=device-width,initial-scale=1'>
${env.althea.loadModule(env.envVars,'graph.js',null,1)}
`
}
