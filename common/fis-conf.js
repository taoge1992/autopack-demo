fis.config.merge({
	namespace : 'common',
    modules : {     
        packager : 'autopack' //自动打包插件
    },
    settings : {
        packager : {
            autopack : {
                fid : 'demo',  //项目标示
                type: 'simple' //简版自动打包
            }
        }
    }
});