<!--
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2018-12-30 20:00:10
 * @LastEditTime: 2018-12-31 16:47:37
 -->
### 有兴趣的小伙伴，可以提`issue`，希望可以获得你们的宝贵意见
  
[Demo](https://rain120.github.io/charts/#/)

[Repo](https://github.com/Rain120/charts)

[掘金文章地址](https://juejin.im/post/5c2ad5f46fb9a049fa0fdb49)

[知乎](https://www.zhihu.com/people/yan-yang-nian-hua-120/activities)

[个人博客](https://rain120.github.io/)

#### 开发缘由：因为一个很重要的朋友需要绘制一些Charts，但是嫌弃手绘太慢，因此这次放假写了这个小东西

#### 当前进度：简单的Demo Charts展示，包括AreaChart, BarChart, ComposedChart, LineChart, PieChart

#### 测试文件：src/common/files/info.xlsx

附上
- [Recharts](http://recharts.org/)
- [React-Route](https://reacttraining.com/react-router/web/guides/quick-start)

先上两张照片吧

![Charts Demo](https://user-gold-cdn.xitu.io/2019/1/1/16807829b35f97e2?w=1919&h=907&f=png&s=137077)

![Charts](https://user-gold-cdn.xitu.io/2019/1/1/16807833d37134f3?w=1919&h=906&f=png&s=135975)

![Charts](https://user-gold-cdn.xitu.io/2019/1/1/1680783e8ccf13f9?w=1916&h=898&f=png&s=88708)

![Charts](https://user-gold-cdn.xitu.io/2019/1/1/168078442078da80?w=1918&h=905&f=png&s=128490)

![Excel Table](https://user-gold-cdn.xitu.io/2019/1/1/1680784b95d67c71?w=1648&h=901&f=png&s=54377)

![Charts](https://user-gold-cdn.xitu.io/2019/1/1/16807853a136f3dc?w=1913&h=905&f=png&s=199753)

#### 1、版本


![Antd](https://user-gold-cdn.xitu.io/2019/1/1/1680764de81e7b3a?w=382&h=71&f=png&s=5886)


![React,Recharts, TS](https://user-gold-cdn.xitu.io/2019/1/1/1680765a623e44a6?w=526&h=495&f=png&s=74650)

#### 2、创建项目
因为公司使用的 `react`+`antd`+`ts`, 虽然`antd`前两天搞了个圣诞惊吓，但是毋庸置疑，这个组件库做的确实很好啊，我不怕被喷，辩证一分为二，不能因为别人犯一点的错误，就否认人家吧，废话不多说，还是讲本文的主题吧
首先先安装`create-react-app`

```
npm i -g create-react-app
create-react-app Charts --scripts-version=react-scripts-ts-antd
```

然后安装`react-route-dom和recharts`
```
yarn add react-route-dom
or
npm i react-route-dom --save
npm i recharts --save
```
因为`TS`检查较为严格，所以，我对`TS`有一些我自己需要`rules`的配置
`tslint.js`
```
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "linterOptions": {
    "exclude": [
      "config/**/*.js",
      "node_modules/**/*.ts",
      "coverage/lcov-report/*.js"
    ]
  },
  "rules": {
    "no-string-throw": true,
    "no-unused-expression": false,
		"no-unused-variable": false,
    "no-use-before-declare": false,
    "no-duplicate-variable": false,
    "curly": true,
    "class-name": true,
    "triple-equals": [true, "allow-null-check"],
    "comment-format": [false, "check-space"],
    "eofline": true,
    "forin": false,
    "indent": [true, "spaces", 2],
    "label-position": true,
    "max-line-length": [true, 150],
    "member-access": false,
    "no-arg": true,
    "no-bitwise": false,
    "no-console": [true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-debugger": true,
    "no-empty": false,
    "no-eval": true,
    "no-inferrable-types": true,
    "no-shadowed-variable": false,
    "no-string-literal": false,
    "no-switch-case-fall-through": false,
    "no-trailing-whitespace": true,
    "no-var-keyword": false,
    "object-literal-sort-keys": false,
    "one-line": [true,
      "check-open-brace",
      "check-catch",
      "check-else"
    ],
    "radix": false,
    "typedef-whitespace": [true, {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    }],
    "variable-name": [true, "ban-keywords"],
    "whitespace": [true,
      "check-branch",
      "check-decl",
      "check-type",
      "check-preblock"
    ],
    "ordered-imports": false,
    "jsx-no-lambda": false,
    "interface-name": [true, "never-prefix"],
    "prefer-const": false
  }
}
```

[TS初试](https://zhuanlan.zhihu.com/p/40125375)

`React-Route 4.x`提供给我们使用的都是以组件形式存在的。我们使用的时候就像我们以前使用组件那样使用就行了，详见[React-Route官方文档](https://reacttraining.com/react-router/web/guides/quick-start)。

![router配置](https://user-gold-cdn.xitu.io/2019/1/1/168078626ed506ff?w=1920&h=1030&f=png&s=251575)

菜单栏，我觉得日后可能还会增加其他的`Charts`，所以我将菜单通过配置文件来控制，增加复用性。

`SideMenu.tsx`
```
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import moment from 'moment';
import './index.scss';
import { menus } from './menus';
import { Layout, Menu, Icon } from 'antd';
import Timer from 'src/components/Timer/Timer';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

interface SideMenuProps {
  children?: any;
}

export default class SideMenu extends Component<SideMenuProps, any> {
  public state = {
    collapsed: false,
    selectedKeys: [menus[0].key],
  };

  public toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { collapsed, selectedKeys, } = this.state

    return (
      <Layout className="side-menu">
        <Sider trigger={null} collapsible={true} collapsed={collapsed}>
          <div className="logo">
            <img src={require('src/common/images/logo.png')} />
            <a href="https://github.com/Rain120/charts" target="_blank">
              <span className={classnames("title")}><Icon type="github" /></span>
            </a>
            <a href="https://www.zhihu.com/people/yan-yang-nian-hua-120/activities" target="_blank">
              <span className={classnames("title")}><Icon type="zhihu" /></span>
            </a>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKeys}>
            {
              menus && menus.map(menu => (
                menu.children
                  ? (
                    <SubMenu key={menu.key} title={<span><Icon type={menu.icon} /><span>{menu.text}</span></span>}>
                      {
                        menu.children.map(item => (
                          <Menu.Item key={item.key}>
                            <Link to={item.path}>{item.text}</Link>
                          </Menu.Item>
                        ))
                      }
                    </SubMenu>
                  ) : (
                    <Menu.Item key={menu.key}>
                      <Link to={menu.path} style={{ overflow: 'hidden' }}><Icon type={menu.icon} />{menu.text}</Link>
                    </Menu.Item>
                  )
              ))
            }
          </Menu>
        </Sider>
        <Layout className="r-content">
          <Header>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Timer timerStyle="timer" />
          </Header>
          <Content style={{ margin: '1rem', padding: '1rem', background: '#fff', minHeight: '25rem', }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            ©{moment().format('YYYY')} Created by Rainy
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
```

`Menu.ts`

```
/*
 * @Author: Rainy
 * @Github: https://github.com/Rain120
 * @Date: 2018-12-30 15:43:12
 * @LastEditTime: 2018-12-31 13:28:04
 */

export const menus = [
  {
    key: 'menu-0',
    icon: 'bar-chart',
    text: 'Charts Demo Show',
    path: '/',
  },
  {
    key: 'menu-1',
    icon: 'dashboard',
    text: 'ReCharts',
    children: [
      {
        key: '1',
        text: 'Charts Drawer',
        path: '/charts/charts-drawer'
      },
    ]
  }
] as any;
```

获取`Excel`的数据是通过使用大佬的`xlsx`插件来实现的，详见[XLSX官网](https://sheetjs.com/)。
```
npm i xlsx -S
```

![XLSX](https://user-gold-cdn.xitu.io/2019/1/1/168078b316af554d?w=457&h=128&f=png&s=17176)

因为这次项目没有后端，所以其实我们对`Excel`文件的解析是在`upload`之前完成的
```
public beforeUpload = (file: any, fileList: any) => {
    var rABS = true;
    const f = fileList[0];
    var reader = new FileReader();
    reader.onload = (e: any) => {
        let data: any = e.target.result;
        if (!rABS) {
          data = new Uint8Array(data);
        }
        var workbook = XLSX.read(data, {
            type: rABS ? 'binary' : 'array'
        });
        // more sheet
        workbook.SheetNames.map(item => {
          var worksheet = workbook.Sheets[item];
          var jsonArr = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
          this.handleImpotedJson(jsonArr);
        })
    };
    if (rABS) {
      reader.readAsBinaryString(f);
    } else {
      reader.readAsArrayBuffer(f);
    }
    return false;
}
```

`upload config`

```
const props = {
      accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      name: 'file',
      headers: {
        authorization: 'authorization-text',
      },
      multiple: false,
      action: '',
      beforeUpload: (file, fileList) => this.beforeUpload(file, fileList),
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
```

`Charts`组件
因为使用的`Charts`比较多，所以使用`recharts`提供的组件`ResponsiveContainer`为了使得这些`Charts`不够缩放的影响。但是当前做的这些`Charts`大部分都是相同的结构，所以相同的部分应该抽离出来。

![WrapperCharts](https://user-gold-cdn.xitu.io/2019/1/1/168079a302463ac0?w=1920&h=1030&f=png&s=255382)

因为其他的`Charts`都差不多，这里我只说一下`LineCharts`

```
import React, { Component } from 'react';
import WrapperCharts from './WrapperCharts';
import './index.scss';
import {
  Line,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Label,
} from "recharts";

export const COLOR_LISTS = ['#8884d8', '#cf6868', '#3fb549', '#a6d41f', '#8ad4d8', '#cfdd68', '#354449', '#a75d1f'];

interface LineChartsProps {
  data?: any;
  names?: any;
}

export default class LineCharts extends Component<LineChartsProps, any> {
  render() {
    const { data, names } = this.props;
    return (
      <WrapperCharts class_name="line-charts">
        <LineChart data={data}>
          <CartesianGrid />
          {
            names && <XAxis dataKey={names[0].dataKey} name={names[0].name} />
          }
          <YAxis />
          <Tooltip />
          <Legend />
          {
            names && names.slice(1).map((item, index) => (
              <Line type="monotone" dataKey={item.dataKey} key={index} name={item.name} stroke={COLOR_LISTS[index]} />
            ))
          }
          <Label />
        </LineChart>
      </WrapperCharts>
    )
  }
}
```

`github page deploy`

```
npm i -g gh-pages
```
`package.json`配置
```
"predeploy": "yarn run build",
"deploy": "gh-pages -d build"
```
部署
```
yarn run deploy
```


![Deploy](https://user-gold-cdn.xitu.io/2019/1/1/16807bbfbe1471f2?w=735&h=738&f=png&s=78518)


引入图片

![引入图片](https://user-gold-cdn.xitu.io/2019/1/1/16807a01a32d697d?w=1178&h=144&f=png&s=32134)


以上就是这两天做的小东西，写的和讲的都很潦草，请看管轻喷。

![溜了溜了](https://user-gold-cdn.xitu.io/2019/1/1/168079f3d99082ae?w=225&h=225&f=jpeg&s=626)
