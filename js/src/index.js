

const WxpImagePicker = {
  show() {
      alert("module WxpImagePicker is created sucessfully ")
  }
};


var meta = {
   WxpImagePicker: [{
    name: 'show',
    args: []
  }]
};



if(window.Vue) {
  weex.registerModule('WxpImagePicker', WxpImagePicker);
}

function init(weex) {
  weex.registerApiModule('WxpImagePicker', WxpImagePicker, meta);
}
module.exports = {
  init:init
};
