import React, { Component } from 'react';
import XLSX from 'xlsx';
import './index.scss';
import { Upload, Icon, message, Button, Checkbox, Modal } from 'antd';
import LineCharts from 'src/components/Recharts/LineCharts';
import BarCharts from 'src/components/Recharts/BarCharts';
import AreaCharts from 'src/components/Recharts/AreaCharts';
import PieCharts from 'src/components/Recharts/PieCharts';
import ComposedCharts from 'src/components/Recharts/ComposedCharts';

const Dragger = Upload.Dragger;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['AreaCharts', 'BarCharts', 'ComposedCharts', 'LineCharts', 'PieCharts'];

export default class Charts extends Component {
  count: any = [];
  public state = {
    checkedLists: ['LineCharts'] as any,
    indeterminate: true,
    checkAll: false,
    lineData: [] as any,
    names: [{
      name: '',
      dataKey: '',
    }] as any,
  }

  componentWillMount() {
    this.info();
  }

  public lineDataFormat = JsonData => {
    let lineData = [] as any;
    let names = [] as any;
    JsonData && JsonData[0].map((item, index) => {
      names.push({
        name: item,
        dataKey: `v${index}`
      })
    });
    let data = JsonData.slice(1);
    data.map((ds: any) => {
      let d = {} as any;
      ds.map((item, i) => {
        d.id = `dk-${item}-${i}`
        d[names[i].dataKey] = item;
      })
      lineData.push(d);
    })
    this.count.push({
      lineData,
      names,
    })
    this.setState({
      lineData,
      names,
    })
  }

  public handleImpotedJson = (data: any) => {
    this.lineDataFormat(data)
  }

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
        var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
        var jsonArr = XLSX.utils.sheet_to_json(first_worksheet, {header: 1});
        this.handleImpotedJson(jsonArr);
    };
    if (rABS) {
      reader.readAsBinaryString(f);
    } else {
      reader.readAsArrayBuffer(f);
    }
    return false;
  }

  public onChange = (checkedLists: any) => {
    this.setState({
      checkedLists,
      indeterminate: !!checkedLists.length && (checkedLists.length < plainOptions.length),
      checkAll: checkedLists.length === plainOptions.length,
    });
  }

  public onCheckAllChange = e => {
    this.setState({
      checkedLists: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  }

  public drawCharts = (checkedList: any) => {
    switch (checkedList) {
      case 'AreaCharts':
        this.count && this.count.map((item, index) => (
          <AreaCharts key={index} data={item.lineData} names={item.names} />
        ))
        break;
      case 'BarCharts':
        this.count && this.count.map((item, index) => (
          <BarCharts key={index} data={item.lineData} names={item.names} />
        ))
        break;
      case 'ComposedCharts':
        this.count && this.count.map((item, index) => (
          <ComposedCharts key={index} data={item.lineData} names={item.names} />
        ))
        break;
      case 'LineCharts':
        this.count && this.count.map((item, index) => (
          <LineCharts key={index} data={item.lineData} names={item.names} />
        ))
        break;
      case 'PieCharts':
        this.count && this.count.map((item, index) => (
          <PieCharts key={index} data={item.lineData} names={item.names} />
        ))
        break;
      default:
        this.count && this.count.map((item, index) => (
          <LineCharts key={index} data={item.lineData} names={item.names} />
        ))
      break;
    }
  }

  public info = () => {
    Modal.info({
      title: 'User Notice',
      content: (
        <div>
          <p>Please select the Chart you need Draw before using, and then upload your excel file。</p>
          <p>Eg:<img src={require('src/common/images/eg.png')} /></p>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const { indeterminate, checkAll, checkedLists } = this.state;

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

    return (
      <div className="charts-drawer">
        <div className="upload-header">
          <Button type="primary" onClick={this.info} style={{ margin: '.8rem 0' }}>Usage Notice</Button>
          <div className="upload-btn">
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files
              </p>
            </Dragger>
          </div>
        </div>
        <div className="check-lists">
          <Checkbox
            style={{ fontWeight: 'bold' }}
            indeterminate={indeterminate}
            onChange={this.onCheckAllChange}
            checked={checkAll}
          >
            All Charts
          </Checkbox>
          <CheckboxGroup options={plainOptions} value={checkedLists} onChange={this.onChange} />
        </div>
        <div>
          {
            this.count && checkedLists && checkedLists.map((item, index) => (
              <div key={index}>
                <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{item}</p>
                {
                  item === 'AreaCharts' && this.count && this.count.map((item, index) => (
                    <AreaCharts key={index} data={item.lineData} names={item.names} />
                  ))
                }
                {
                  item === 'BarCharts' && this.count && this.count.map((item, index) => (
                    <BarCharts key={index} data={item.lineData} names={item.names} />
                  ))
                }
                {
                  item === 'ComposedCharts' && this.count && this.count.map((item, index) => (
                    <ComposedCharts key={index} data={item.lineData} names={item.names} />
                  ))
                }
                {
                  item === 'LineCharts' && this.count && this.count.map((item, index) => (
                    <LineCharts key={index} data={item.lineData} names={item.names} />
                  ))
                }
                {
                  item === 'PieCharts' && this.count && this.count.map((item, index) => (
                    <PieCharts
                      key={index}
                      data={item.lineData}
                      names={item.names}
                      radius={100}
                      pieWidth={700}
                      pieHeight={500} />
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
