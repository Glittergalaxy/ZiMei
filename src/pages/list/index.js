export default [
    {
      title: "地区",
      detailTitle: "请选择地区",
      isMutiple: false,
      key: "type",
      defaultSelectedIndex: 1,
      detailList: [
        {
          title: "不限",
          value: ""
        },
        {
          title: "滨江区",
          value: "1"
        },
        {
          title: "西湖区",
          value: "2"
        },
        {
          title: "江干区",
          value: "3"
        },
        {
          title: "下沙区",
          value: "4"
        }
      ]
    },
    {
      title: "价格",
      key: "price",
      isMutiple: false,
      detailList: [
        {
          title: "不限",
          value: ""
        },
        {
          title: "0~2000",
          value: "0~2000"
        },
        {
          title: "2000~3000",
          value: "2000~3000"
        }
      ]
    },
    {
      title: "请选择房型",
      key: "single",
      isMutiple: false,
      detailTitle: "请选择类型",
      reflexTitle: true,
      detailList: [
        {
          title: "不限",
          value: ""
        },
        {
          title: "3室2厅",
          value: "1"
        },
        {
          title: "2室2厅",
          value: "2"
        },
        {
          title: "4室2厅",
          value: "3"
        }
      ]
    },
    {
      title: "排序",
      key: "sort",
      isSort: true,
      reflexTitle: true,
      defaultSelectedIndex: 0,
      detailList: [
        {
          title: "默认排序",
          value: ""
        },
        {
          title: "发布时间",
          value: "add_time"
        },
        {
          title: "薪资最高",
          value: "wages_up"
        },
        {
          title: "离我最近",
          value: "location"
        }
      ]
    }
  ]