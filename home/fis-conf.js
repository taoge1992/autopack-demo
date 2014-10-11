fis.config.merge({
    namespace : 'home',
    modules : {     
        packager : 'autopack' //自动打包插件
    },
    settings : {
        packager : {
            autopack : {
                fid : 'demo',  //项目标示
                type: 'simple', //简版自动打包
                weights : {  //页面权重配置
                    'index2.tpl' : 1000
                }
            }
        }
    }
});