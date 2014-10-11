## 简介

	FIS-PLUS 自动打包快速上手demo
	
## 使用

### npm安装node和fisp环境

执行 `npm install -g fis-plus`进行安装，fisp用户应该都有此环境。具体安装方法参考[说明文档](http://fis.baidu.com/fis-plus/userdoc/%E5%AE%89%E8%A3%85%E4%BD%BF%E7%94%A8)

### npm安装自动打包插件 

执行 'npm install -g fis-packager-autopack' 全局安装打包插件之后，就可以开始使用自动打包了。

### 使用自动打包

fis-conf.js中已经进行了基本的配置，在`home`文件夹根目录下执行`fisp release -pd output`。插件就会跟进现有模块情况从平台获取计算好的打包配置。根目录下会生成一个`fis-pack.json`文件，这个就是自动生成的资源合并配置，具体的合并文件在`home/output/static/home/pkg`内。

## 配置说明

下面是autopack插件主要的配置说明。

```javascript
	settings : {
		packager : {
			autopack : {
				fid : 'baidunuomi', //项目ID
				type : 'simple',  //打包版本类型，simple表示简版，高端版需要借助线上统计
				partKeys : ['loadType'],  //资源分组依据,默认为loadType,按照加载类型分组，设置[]表示不使用分组依据
				otherRes : 'hide', //是否添加other包，show/hide
				platform : 'pc',   //项目终端，pc/mobile，计算参数会不一样
				weights : {   //页面权重，默认为1,配置各个页面的权重越高表示PV比例越高
			        "ajax_shop_list.tpl" : 10,
			        "detail.tpl" : 5000,
			        "shop_map.tpl" : 20,
			        "ugc.tpl" : 20
			    }
			}
		}
	}
```

### 页面权重说明

简版采取配置重点页面权重来表示主要页面pv占比情况，默认为1，如果某重点页面是其他页面的PV的100倍，则可以填写100，这里只需要预估。平台计算结果时将侧重重点页面。如demo中，index2.tpl的pv很高，他只使用了`html5.js`一个js文件，尽管`index.tpl`同时使用了三个js文件，自动打包结果`html5.js`也不会和另外两个合并在一起，这符合性能角度的全站优化。