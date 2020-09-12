//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    movies: [
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599726004020&di=aea7ff8250bd817b22eb7fc961abd724&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D1484500186%2C1503043093%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599726004020&di=8e16d4005e67b933859319873b6b9b44&imgtype=0&src=http%3A%2F%2Ft8.baidu.com%2Fit%2Fu%3D2247852322%2C986532796%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D853' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599726004019&di=59ec7b5f1448f66acc1ae9f4035c1786&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D583874135%2C70653437%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D3607%26h%3D2408' },
      { url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599726004018&di=e40bf2709ea33c659057eda75835079d&imgtype=0&src=http%3A%2F%2Ft9.baidu.com%2Fit%2Fu%3D2268908537%2C2815455140%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D1280%26h%3D719' },
    ],
    card: [
      { label: '生活垃圾', url: '../lifeRubbish/lifeRubbish' },
      { label: '医疗垃圾', url: '../medicineRubbish/medicineRubbish' },
      // { label: '新建考核', url: '../CreatedAssessment/CreatedAssessment' },
      // { label: '量化填报', url: '../Reporting/Reporting' },
      // { label: '考核模版', url: '../AssessmentTemplate/AssessmentTemplate' },
      // { label: '量化报表', url: '../QuantifyTable/QuantifyTable' },
      // { label: '工作记录', url: '../WorkRecording/WorkRecording' },
    ],
    message: [
      { text: '您有一个自我考核没有完成', url: '' },
      { text: '您有一个跨部门考核没有完成', url: '' },
      { text: '上级部门发布重要信息', url: '' },
      { text: '考核未通过，需要整改', url: '' },
      { text: '您有一个考核需要验证', url: '' },
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        },
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  jump(e) {
    const { url } = e.currentTarget.dataset.currentdata
    wx.navigateTo({ url })
  }
})