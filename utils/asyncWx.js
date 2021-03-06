/**
 * promise 形式的 getSetting
 */
export const getSetting = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: result => {
        resolve(result);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}

/**
 * promise 形式的 chooseAddress
 */
export const chooseAddress = () => {
  return new Promise((resolve, reject) => {
    wx.chooseAddress({
      success: result => {
        resolve(result);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}

/**
 * promise 形式的 openSetting
 */
export const openSetting = () => {
  return new Promise((resolve, reject) => {
    wx.openSetting({
      success: result => {
        resolve(result);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}

/**
 * promise 形式的 showModal
 */
export const showModal = (obj) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      ...obj,
      success: result => {
        resolve(result);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}

/**
 * promise 形式的 showToast
 */
export const showToast = (obj) => {
  return new Promise((resolve, reject) => {
    wx.showToast({
      ...obj,
      success: result => {
        resolve(result);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}

/**
 * promise 形式的 login
 */
export const login = (obj) => {
  return new Promise((resolve, reject) => {
    wx.login({
      ...obj,
      success: result => {
        resolve(result);
      },
      fail: err => {
        reject(err);
      }
    })
  })
}