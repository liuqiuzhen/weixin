Page({
  data: {
    current: 0,
    id: 0
  },
  onLoad: function (params) {
    this.setData({
      id: params.id
    })
  },
  onReady: function () {
    console.log(this.data.id);
    wx.setNavigationBarTitle({
      title: '健康食谱'
    });
  }
});
